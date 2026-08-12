import { readFileSync } from 'node:fs';

import { expect, test } from '@playwright/test';

import { EXAMPLES } from '../src/lib/examples-manifest';
import { SITE_URL } from '../src/lib/links';

/**
 * What the site serves, and to whom.
 *
 * Two mechanisms are under test, and they are not the same thing:
 *
 * 1. The homepage negotiates. `/` is the one path routed to the Worker ahead
 *    of the asset store (`run_worker_first` in wrangler.jsonc), so src/start.ts
 *    can answer an agent with Markdown and everyone else with the prerendered
 *    HTML.
 * 2. Every other route publishes a `.md` mirror at its own URL. Those are
 *    static files with one representation each — no negotiation, and nothing
 *    on those paths reads `Accept` at all.
 *
 * A page therefore has to *advertise* its mirror, which it does twice: in
 * <head> (src/lib/seo.ts) and as a `Link:` response header (public/_headers),
 * its own mirror before the site-wide /llms.txt in both. The tests below check
 * both lists and then fetch what they promise — that pairing is what catches a
 * new route whose mirror was never emitted.
 */

const LLMS_TXT = readFileSync(
  new URL('../public/llms.txt', import.meta.url),
  'utf8',
);

const ROBOTS_TXT = readFileSync(
  new URL('../public/robots.txt', import.meta.url),
  'utf8',
);

/** A real browser: HTML, always, on every path. */
const BROWSER = {
  'user-agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
};

/** Every route that ships HTML, and so must advertise a Markdown mirror. */
const HTML_ROUTES = [
  '/',
  '/examples',
  '/compare',
  ...EXAMPLES.map((example) => `/examples/${example.slug}`),
];

/**
 * The homepage's mirror is `/index.md`, not the `/.md` the rule would
 * otherwise produce — same exception the link rewriter in vite.config.ts makes.
 */
const mirrorOf = (path: string) => (path === '/' ? '/index.md' : `${path}.md`);

/** hrefs of the `rel="alternate" type="text/markdown"` links, in document order. */
function markdownAlternates(html: string): string[] {
  const head = html.slice(0, html.indexOf('</head>'));
  return [...head.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter(
      (tag) => tag.includes('rel="alternate"') && tag.includes('text/markdown'),
    )
    .map((tag) => /href="([^"]+)"/.exec(tag)?.[1] ?? tag);
}

/**
 * The YAML frontmatter of a mirror, as a plain object.
 *
 * Deliberately strict rather than a real YAML parse: every value the build
 * writes is a quoted scalar, so anything else here means the generator emitted
 * something a parser would choke on — which is the failure this guards.
 */
function frontmatterOf(markdown: string): Record<string, string> {
  const block = /^---\n([\s\S]*?)\n---\n/.exec(markdown);
  if (!block) return {};
  return Object.fromEntries(
    block[1].split('\n').map((line) => {
      const field = /^([a-z]+): "((?:[^"\\]|\\.)*)"$/.exec(line);
      expect(field, `unparseable frontmatter line: ${line}`).not.toBeNull();
      return [field![1], field![2].replace(/\\(["\\])/g, '$1')];
    }),
  );
}

/** Targets of a `Link:` header, in order. RFC 8288 lists them comma-separated. */
const linkHeaderTargets = (header: string | undefined) =>
  (header ?? '')
    .split(',')
    .map((entry) => /<([^>]+)>/.exec(entry)?.[1])
    .filter((target): target is string => Boolean(target));

test.describe('the homepage negotiates', () => {
  test('`Accept: text/markdown` gets llms.txt, verbatim', async ({
    request,
  }) => {
    const response = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/markdown' },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe(
      'text/markdown; charset=utf-8',
    );
    // Byte-identical to the published file: start.ts inlines it at build, so a
    // drift here means two different answers to the same question.
    expect(await response.text()).toBe(LLMS_TXT);
  });

  test('the Markdown variant is never cacheable', async ({ request }) => {
    const response = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/markdown' },
    });

    // The one rule that matters. Shared caches key on the URL and Cloudflare's
    // edge ignores Vary for everything but Accept-Encoding, so a cacheable
    // Markdown variant gets pinned into the entry for `/` by the first agent
    // that asks and every human visitor afterwards is served raw text — a 200
    // throughout, so nothing alerts. Do not relax this.
    expect(response.headers()['cache-control']).toBe('no-store');
    expect(response.headers()['vary']).toContain('Accept');
  });

  test('the Markdown variant carries the same terms as robots.txt', async ({
    request,
  }) => {
    // A crawler that never fetched robots.txt has no other way to learn them.
    const response = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/markdown' },
    });

    const signal = response.headers()['content-signal'];
    expect(signal).toBeDefined();
    expect(ROBOTS_TXT).toContain(`Content-Signal: ${signal}`);
  });

  test('`text/plain` counts only when it outranks `text/html`', async ({
    request,
  }) => {
    const preferred = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/plain, text/html;q=0.9' },
    });
    expect(preferred.headers()['content-type']).toBe(
      'text/plain; charset=utf-8',
    );
    expect(await preferred.text()).toBe(LLMS_TXT);

    // A browser lists text/plain too, below text/html. That is not a request
    // for Markdown, and reading it as one would hand every Firefox user a
    // wall of text.
    const incidental = await request.get('/', {
      headers: {
        ...BROWSER,
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5',
      },
    });
    expect(incidental.headers()['content-type']).toContain('text/html');
  });

  test('a coding agent gets Markdown from its user-agent alone', async ({
    request,
  }) => {
    // Most agents never send `Accept: text/markdown`; they arrive as a plain
    // HTTP client and take what comes back — and mostly not under their own
    // name either: Cursor is `got`, Windsurf is `colly`, Claude Code is
    // `axios`. The library signature is the only thing on the request.
    for (const ua of [
      'curl/8.15.0',
      'Claude-User/1.0',
      'python-requests/2.32',
      'axios/1.8.4',
      'got (https://github.com/sindresorhus/got)',
      'colly - https://github.com/gocolly/colly',
      'DuckAssistBot/1.0',
      'MistralAI-User/1.0',
    ]) {
      const response = await request.get('/', {
        headers: { 'user-agent': ua, accept: '*/*' },
      });
      expect(
        response.headers()['content-type'],
        `${ua} should be served Markdown`,
      ).toContain('text/markdown');
    }
  });

  test('crawlers and headless browsers are always served HTML', async ({
    request,
  }) => {
    // A crawler and a reader must be served the same representation — that is
    // the line between a Markdown variant and cloaking. HeadlessChrome is here
    // so audits keep measuring the page people actually get. The three
    // Anthropic entries are the interesting ones: every bulk crawler whose
    // name contains a token from the agent list has to be named in HTML_ONLY
    // to be caught, and Claude-Web and anthropic-ai once weren't.
    for (const ua of [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/141.0.0.0 Safari/537.36',
      'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
      'Claude-Web/1.0',
      'anthropic-ai',
      'Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)',
      'facebookexternalhit/1.1',
    ]) {
      const response = await request.get('/', {
        headers: { 'user-agent': ua, accept: '*/*' },
      });
      expect(
        response.headers()['content-type'],
        `${ua} should be served HTML`,
      ).toContain('text/html');
    }
  });

  test('a browser gets the prerendered page, and it is cacheable', async ({
    request,
  }) => {
    const response = await request.get('/', { headers: BROWSER });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');
    expect(response.headers()['cache-control']).not.toContain('no-store');
    // start.ts replays the request against the asset store rather than falling
    // through to `next()`, which would turn the homepage into a per-request
    // server render. The prerendered markup carries the demos already scrolled
    // into existence; an empty shell means the prerender degraded.
    expect(await response.text()).toContain('data-key="item-1"');
    // The asset store can't know this path has two representations.
    expect(response.headers()['vary']).toContain('Accept');
  });
});

test.describe('every route publishes a Markdown mirror', () => {
  for (const path of HTML_ROUTES) {
    test(`${path} advertises its mirror in <head> and in a Link: header`, async ({
      request,
    }) => {
      const page = await request.get(path, { headers: BROWSER });
      expect(page.status()).toBe(200);

      const expected = [`${SITE_URL}${mirrorOf(path)}`, `${SITE_URL}/llms.txt`];

      // Own mirror first, site-wide reference second: a client that takes the
      // first alternate it finds should get the page it asked about.
      expect(markdownAlternates(await page.text())).toEqual(expected);

      // The same pair again as a response header, for clients that send HEAD
      // or never parse markup. These are site-relative.
      expect(linkHeaderTargets(page.headers()['link'])).toEqual(
        expected.map((href) => href.replace(SITE_URL, '')),
      );
    });

    test(`${path} — the mirror it advertises exists`, async ({ request }) => {
      const mirror = await request.get(mirrorOf(path), { headers: BROWSER });

      expect(mirror.status()).toBe(200);
      expect(mirror.headers()['content-type']).toContain('text/markdown');
      // One representation, so unlike the negotiated homepage these cache.
      expect(mirror.headers()['cache-control']).not.toContain('no-store');
      expect((await mirror.text()).trim().length).toBeGreaterThan(0);
    });

    // `/` is skipped: its mirror is llms.txt verbatim, which opens with the H1
    // its own format wants.
    if (path !== '/') {
      test(`${path} — its mirror names the page in frontmatter`, async ({
        request,
      }) => {
        const meta = frontmatterOf(
          await (await request.get(mirrorOf(path))).text(),
        );

        expect(meta.canonical).toBe(`${SITE_URL}${path}`);
        expect(meta.title?.length ?? 0).toBeGreaterThan(0);
        expect(meta.description?.length ?? 0).toBeGreaterThan(0);
      });
    }
  }

  test('/index.md is the same document as /llms.txt', async ({ request }) => {
    // Three names for one file — the mirror, the well-known path, and what
    // `Accept: text/markdown` returns — because agents disagree about which to
    // try. public/llms.txt is the single source for all three.
    const mirror = await request.get('/index.md', { headers: BROWSER });
    const wellKnown = await request.get('/llms.txt', { headers: BROWSER });

    expect(await mirror.text()).toBe(LLMS_TXT);
    expect(await wellKnown.text()).toBe(LLMS_TXT);
    // Workers Assets types every .txt as text/plain; public/_headers overrides
    // it, because a client that asked for Markdown should be told it got some.
    expect(wellKnown.headers()['content-type']).toContain('text/markdown');
  });

  test('the examples hub lists every example', async ({ request }) => {
    const hub = await (await request.get('/examples.md')).text();

    for (const example of EXAMPLES) {
      expect(hub).toContain(`${SITE_URL}/examples/${example.slug}.md`);
      expect(hub).toContain(example.name);
    }
  });

  for (const example of EXAMPLES) {
    test(`/examples/${example.slug}.md carries the example's full source`, async ({
      request,
    }) => {
      const mirror = await (
        await request.get(`/examples/${example.slug}.md`)
      ).text();
      const fileName = example.sourceFile.split('/').pop();

      expect(mirror).toContain(`# ${example.name}`);
      // The manifest is the source for both the page and the mirror, so the
      // frontmatter is checked against it rather than against the rendered
      // <title> the way a converted mirror's is.
      expect(frontmatterOf(mirror)).toMatchObject({
        title: example.name,
        description: example.blurb,
        canonical: `${SITE_URL}/examples/${example.slug}`,
        source: fileName!,
      });
      // The point of this mirror over a converted one: the whole source file,
      // not a description of it.
      expect(mirror).toContain(`\`${fileName}\``);
      expect(mirror).toContain('```tsx');
      expect(mirror).toContain('react-horizontal-scrolling-menu');
    });
  }

  test('a converted mirror rewrites its links to other mirrors', async ({
    request,
  }) => {
    // /compare has no Markdown source of its own — it is turned into Markdown
    // from the HTML it shipped. An agent following a link out of it should land
    // in another Markdown document, not back in HTML, and never on a
    // site-relative href that means nothing over HTTP.
    const compare = await (await request.get('/compare.md')).text();

    expect(compare).not.toMatch(/]\(\//);
    expect(compare).toContain(`${SITE_URL}/`);

    // A converted mirror takes its frontmatter from the head of the page it
    // converted, so the two cannot disagree about what the page is called.
    const html = await (
      await request.get('/compare', { headers: BROWSER })
    ).text();
    expect(frontmatterOf(compare).title).toBe(
      /<title[^>]*>([\s\S]*?)<\/title>/.exec(html)?.[1],
    );
  });
});

test.describe('the discovery files', () => {
  test('robots.txt points at the sitemap and the llms.txt', async ({
    request,
  }) => {
    const robots = await request.get('/robots.txt', { headers: BROWSER });

    expect(robots.status()).toBe(200);
    const body = await robots.text();
    expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
    expect(body).toContain(`${SITE_URL}/llms.txt`);
  });

  test('the sitemap lists every HTML route and nothing else', async ({
    request,
  }) => {
    const sitemap = await (
      await request.get('/sitemap.xml', { headers: BROWSER })
    ).text();
    const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      ([, loc]) => loc.replace(SITE_URL, ''),
    );

    expect(listed.sort()).toEqual([...HTML_ROUTES].sort());
  });
});
