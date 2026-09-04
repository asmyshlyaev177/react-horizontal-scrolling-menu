import { expect, test } from '@playwright/test';

import {
  ALL_LOCALES,
  INDEXED_LOCALES,
  LOCALES,
} from '../../scripts/i18n/locales.mjs';
import { copyFor } from '../src/content';
import { en } from '../src/content/en';
import { EXAMPLES } from '../src/lib/examples-manifest';
import { SITE_URL } from '../src/lib/links';
import {
  BROWSER,
  frontmatterOf,
  HTML_ROUTES,
  linkHeaderTargets,
  mainOf,
  markdownAlternates,
} from './shared';

/**
 * Everything smoke.spec.ts checks, once, in a language that is not English.
 *
 * That suite runs against the unprefixed routes — the right trade for its
 * per-example checks — which means a mirror emitted for `/examples` and not
 * for `/ja/examples` passes all of it while eight advertised URLs 404, and a
 * page whose furniture comes from `content/en` looks perfect in the only
 * language anyone asserted on. Both happened. One locale catches them; eight
 * would be measuring the prerenderer.
 */
const LOCALE = LOCALES[1]; // ja — prefixed, non-latin, so a stray English string shows

const copy = copyFor(LOCALE.code);

test.describe(`a translated locale (/${LOCALE.dir}) publishes the same surfaces`, () => {
  for (const path of HTML_ROUTES) {
    const page = `/${LOCALE.dir}${path}`.replace(/\/$/, '');
    // The locale homepage advertises the English `/index.md`: that mirror is
    // the published llms.txt, one document by design ($locale/index.tsx).
    const mirror = path === '/' ? '/index.md' : `${page}.md`;

    test(`${page} advertises ${mirror}, in <head> and in a Link: header, and it exists`, async ({
      request,
    }) => {
      const html = await request.get(page, { headers: BROWSER });
      expect(html.status()).toBe(200);

      const expected = [`${SITE_URL}${mirror}`, `${SITE_URL}/llms.txt`];
      expect(markdownAlternates(await html.text())).toEqual(expected);
      expect(linkHeaderTargets(html.headers()['link'])).toEqual(
        expected.map((href) => href.replace(SITE_URL, '')),
      );

      const md = await request.get(mirror, { headers: BROWSER });
      expect(md.status()).toBe(200);
      expect(md.headers()['content-type']).toContain('text/markdown');
    });
  }

  // An indexed locale declares the cluster of indexed locales plus x-default;
  // an unindexed one declares `noindex` and no cluster at all. Both shapes,
  // on the homepage too — it builds its head by hand rather than through
  // pageHead(), and so once had none at all.
  const INDEXED = INDEXED_LOCALES.find((l) => l.code !== 'en')!;
  const UNINDEXED = LOCALES.find((l) => !l.indexed)!;
  const CLUSTER = [...INDEXED_LOCALES.map((l) => l.code), 'x-default'];
  for (const [locale, cluster] of [
    [INDEXED, CLUSTER],
    [UNINDEXED, []],
  ] as const) {
    const shape = cluster.length
      ? 'the indexed hreflang cluster'
      : 'noindex and no cluster';
    test(`/${locale.dir} pages declare ${shape}`, async ({ request }) => {
      for (const path of ['/', '/examples', '/compare']) {
        const html = await (
          await request.get(`/${locale.dir}${path}`.replace(/\/$/, ''), {
            headers: BROWSER,
          })
        ).text();
        const head = html.slice(0, html.indexOf('</head>'));
        const alternates = [...head.matchAll(/hrefLang="([^"]+)"/g)].map(
          ([, lang]) => lang,
        );
        expect(alternates, `${path} hreflang cluster`).toEqual(cluster);
        expect(
          /<meta name="robots" content="noindex"/.test(head),
          `${path} noindex`,
        ).toBe(!locale.indexed);
      }
    });
  }

  test('the hub and the example mirrors carry that language, not English', async ({
    request,
  }) => {
    // The names come from the locale's own manifest module; asserting against
    // it rather than a pasted string is what keeps this honest when the copy
    // is reworded.
    const hub = await (await request.get(`/${LOCALE.dir}/examples.md`)).text();
    for (const example of EXAMPLES) {
      const listing = copy.manifest.examples[example.slug];
      expect(hub).toContain(
        `${SITE_URL}/${LOCALE.dir}/examples/${example.slug}.md`,
      );
      expect(hub).toContain(listing.name);
    }

    const [first] = EXAMPLES;
    const mirror = await (
      await request.get(`/${LOCALE.dir}/examples/${first.slug}.md`)
    ).text();
    expect(frontmatterOf(mirror)).toMatchObject({
      title: copy.manifest.examples[first.slug].name,
      canonical: `${SITE_URL}/${LOCALE.dir}/examples/${first.slug}`,
    });
  });
});

test.describe(`a translated locale (/${LOCALE.dir}) reads as that language`, () => {
  test('the page furniture is translated, not just the prose', async ({
    request,
  }) => {
    // The breadcrumb, the source section and the related-example cards used to
    // come from content/en regardless of which language rendered.
    const [first] = EXAMPLES;
    const html = await (
      await request.get(`/${LOCALE.dir}/examples/${first.slug}`, {
        headers: BROWSER,
      })
    ).text();
    const main = mainOf(html);

    for (const label of [
      copy.examplePage.breadcrumbExamples,
      copy.examplePage.fullSource,
      copy.examplePage.storybookCta,
      copy.manifest.examples[first.slug].name,
    ]) {
      expect(main, `missing ${JSON.stringify(label)}`).toContain(label);
    }
    expect(main).not.toContain(en.examplePage.fullSource);
  });

  test('the switcher offers this page in the other eight languages', async ({
    request,
  }) => {
    // The switcher is a <select>; the same nine targets ship as anchors in a
    // <noscript> block, which is what a reader without JS and a crawler
    // looking for the other language versions both get. Asserted on an example
    // page rather than the homepage because the switcher used to send everyone
    // to `/`, losing the page they were reading.
    const [first] = EXAMPLES;
    const path = `/${LOCALE.dir}/examples/${first.slug}`;
    const html = await (await request.get(path, { headers: BROWSER })).text();
    const noscript = /<noscript>([\s\S]*?)<\/noscript>/.exec(html)?.[1] ?? '';

    expect(noscript).toContain(`>${LOCALE.label}<`); // itself, as plain text
    for (const locale of ALL_LOCALES.filter((l) => l.dir !== LOCALE.dir)) {
      const href =
        locale.code === 'en'
          ? `/examples/${first.slug}`
          : `/${locale.dir}/examples/${first.slug}`;
      expect(noscript, `${locale.code} target`).toContain(`href="${href}"`);
    }
  });

  test('a segment that is not a locale is a 404, not the English page', async ({
    request,
  }) => {
    // `$locale` matches any single segment (routes/$locale/route.tsx gates it).
    // `/en` is in the list on purpose: English is served unprefixed.
    for (const path of ['/en', '/en/examples', '/jp', '/nope/compare']) {
      const response = await request.get(path, { headers: BROWSER });
      expect(response.status(), `${path} should not resolve`).toBe(404);
    }
  });

  test('in-prose links keep the reader in this language', async ({
    request,
  }) => {
    // Content modules spell in-site links locale-independently (`/examples/x`)
    // because a translation copies the English module's hrefs; lib/prose.tsx
    // is what prefixes them.
    const html = await (
      await request.get(`/${LOCALE.dir}/compare`, { headers: BROWSER })
    ).text();
    const main = mainOf(html);
    const internal = [...main.matchAll(/href="(\/[^"]*)"/g)].map(
      ([, href]) => href,
    );

    expect(internal.length).toBeGreaterThan(0);
    for (const href of internal) {
      expect(href, 'in-page link left the locale').toMatch(
        new RegExp(`^/${LOCALE.dir}(/|$)`),
      );
    }
  });
});
