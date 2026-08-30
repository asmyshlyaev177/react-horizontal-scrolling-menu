/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

import { ALL_LOCALES } from '../scripts/i18n/locales.mjs';
import { shikiContrast } from './shiki-contrast.ts';
import { EXAMPLES } from './src/lib/examples-manifest.ts';
import { SITE_URL } from './src/lib/links.ts';
import {
  convertedMirrors,
  exampleDocument,
  hubDocument,
  prefixOf,
} from './src/lib/mirror-docs.ts';

/** Every code block, both themes. GitHub's palette leaves a third of its
 *  tokens under the contrast floor on this panel; the transformer lifts them. */
const HIGHLIGHT = {
  themes: { light: 'github-light-default', dark: 'github-dark-default' },
  defaultColor: false as const,
  transformers: [
    shikiContrast(
      readFileSync(new URL('./src/styles/app.css', import.meta.url), 'utf8'),
    ),
  ],
};

// Highlights every snippet in src/lib/snippets.ts with shiki at build
// time and exposes the HTML as a virtual module. Shiki stays a dev
// dependency: neither the client bundle nor the worker ships it.
function snippetsHtml(): Plugin {
  const virtualId = 'virtual:snippets-html';
  const resolvedId = '\0' + virtualId;
  const sourcePath = new URL('./src/lib/snippets.ts', import.meta.url);

  return {
    name: 'snippets-html',
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    async load(id) {
      if (id !== resolvedId) return;
      this.addWatchFile(sourcePath.pathname);

      const { codeToHtml } = await import('shiki');
      // Cache-bust so edits to snippets.ts are picked up in dev.
      const { snippets } = (await import(
        `${pathToFileURL(sourcePath.pathname).href}?t=${Date.now()}`
      )) as typeof import('./src/lib/snippets');

      const out: Record<string, string> = {};
      for (const [key, { code, lang }] of Object.entries(snippets)) {
        out[key] = await codeToHtml(code, { lang, ...HIGHLIGHT });
      }
      return `export default ${JSON.stringify(out)};`;
    },
  };
}

// Serves each story's full source, shiki-highlighted, as one virtual
// module per example (`virtual:example-code/<slug>`) so a route chunk
// only carries its own code. Sources are read from the repo root —
// the pages render the same file they display.
function exampleCodeHtml(): Plugin {
  const prefix = 'virtual:example-code/';
  const resolvedPrefix = '\0' + prefix;
  const repoRoot = new URL('..', import.meta.url);

  return {
    name: 'example-code-html',
    resolveId(id) {
      if (id.startsWith(prefix)) return '\0' + id;
    },
    async load(id) {
      if (!id.startsWith(resolvedPrefix)) return;
      const slug = id.slice(resolvedPrefix.length);
      const entry = EXAMPLES.find((example) => example.slug === slug);
      if (!entry) throw new Error(`Unknown example slug: ${slug}`);

      const file = fileURLToPath(new URL(entry.sourceFile, repoRoot));
      this.addWatchFile(file);
      const code = readFileSync(file, 'utf8');

      const { codeToHtml } = await import('shiki');
      const html = await codeToHtml(code, { lang: 'tsx', ...HIGHLIGHT });
      return `export const code = ${JSON.stringify(code)};\nexport const html = ${JSON.stringify(html)};`;
    },
  };
}

// Emits sitemap.xml with every route, stamped with the last commit date
// (content freshness = HEAD commit, never new Date()).

/** The locale-independent path of every page the site routes. */
const PAGE_PATHS = [
  '/',
  '/examples',
  ...EXAMPLES.map((example) => `/examples/${example.slug}`),
  '/compare',
];

/**
 * Every URL the site serves, grouped by the page it is a translation of.
 *
 * One list, three consumers: the sitemap (which needs the alternates cluster),
 * the Markdown mirrors (which need to know a locale page is still an example
 * page and deserves its source) and public/_headers. Hand-maintaining any of
 * the three separately is how a locale ends up with no `Link:` header and no
 * sitemap entry while looking fine in a browser.
 */
const ALL_PAGES = PAGE_PATHS.map((path) => ({
  path,
  urls: ALL_LOCALES.map((locale) => ({
    locale,
    url: `${prefixOf(locale)}${path}`.replace(/\/$/, '') || '/',
  })),
}));

/**
 * Appends the per-route `Link:` rules to the `_headers` Cloudflare reads.
 *
 * Nine languages by four route shapes is thirty-six blocks; the file used to
 * carry four, written by hand. Generating them from the same page table the
 * sitemap uses is the only way they stay in step — and `e2e/smoke.spec.ts`
 * asserts the header on every route, so a missing block fails loudly rather
 * than quietly.
 */
/**
 * Emits the shadcn registry: one /r/<name>.json per item (source embedded at
 * build, so the served JSON cannot drift) plus the /r/registry.json index.
 * Installed via `npx shadcn add <site>/r/<name>.json`; smoke-tested.
 */
function shadcnRegistry(): Plugin {
  const items = [
    {
      source: new URL('./registry/scroll-menu.tsx', import.meta.url),
      meta: {
        name: 'scroll-menu',
        type: 'registry:component',
        title: 'Scroll Menu',
        description:
          'Horizontal scrolling row with edge-aware arrows, mouse drag-to-scroll, native touch scrolling and a hidden scrollbar. Built on react-horizontal-scrolling-menu.',
        author: 'asmyshlyaev177 <https://asmyshlyaev177.dev>',
        dependencies: ['react-horizontal-scrolling-menu', 'lucide-react'],
        registryDependencies: ['button'],
        files: [
          {
            path: 'components/ui/scroll-menu.tsx',
            target: 'components/ui/scroll-menu.tsx',
            type: 'registry:component',
          },
        ],
        docs: `Every direct child of <ScrollMenu> needs a unique itemId prop. Examples and full API: ${SITE_URL}`,
      },
    },
    {
      source: new URL('./registry/scroll-tabs.tsx', import.meta.url),
      meta: {
        name: 'scroll-tabs',
        type: 'registry:component',
        title: 'Scroll Tabs',
        description:
          'Scrollable tab strip — the MUI scrollable-tabs use case without the Tabs coupling. Active tab centers itself; arrows and drag-to-scroll from scroll-menu.',
        author: 'asmyshlyaev177 <https://asmyshlyaev177.dev>',
        dependencies: ['react-horizontal-scrolling-menu'],
        registryDependencies: [`${SITE_URL}/r/scroll-menu.json`],
        files: [
          {
            path: 'components/ui/scroll-tabs.tsx',
            target: 'components/ui/scroll-tabs.tsx',
            type: 'registry:component',
          },
        ],
        docs: `Controlled: pass tabs, value and onValueChange. Examples: ${SITE_URL}`,
      },
    },
    {
      source: new URL('./registry/chip-bar.tsx', import.meta.url),
      meta: {
        name: 'chip-bar',
        type: 'registry:component',
        title: 'Chip Bar',
        description:
          'Horizontal multi-select filter bar: toggleable chips in a drag-to-scroll row that never wraps.',
        author: 'asmyshlyaev177 <https://asmyshlyaev177.dev>',
        dependencies: ['react-horizontal-scrolling-menu', 'lucide-react'],
        registryDependencies: [`${SITE_URL}/r/scroll-menu.json`],
        files: [
          {
            path: 'components/ui/chip-bar.tsx',
            target: 'components/ui/chip-bar.tsx',
            type: 'registry:component',
          },
        ],
        docs: `Controlled: pass options, selected and onSelectedChange. Examples: ${SITE_URL}`,
      },
    },
    {
      source: new URL('./registry/media-row.tsx', import.meta.url),
      meta: {
        name: 'media-row',
        type: 'registry:component',
        title: 'Media Row',
        description:
          'Netflix-style media rail: edge fade masks and full-height overlay arrows on hover. Bring your own cards.',
        author: 'asmyshlyaev177 <https://asmyshlyaev177.dev>',
        dependencies: ['react-horizontal-scrolling-menu', 'lucide-react'],
        registryDependencies: [`${SITE_URL}/r/scroll-menu.json`],
        files: [
          {
            path: 'components/ui/media-row.tsx',
            target: 'components/ui/media-row.tsx',
            type: 'registry:component',
          },
        ],
        docs: `Each child card needs a unique itemId prop. Examples: ${SITE_URL}`,
      },
    },
    {
      source: new URL('./registry/autoplay-carousel.tsx', import.meta.url),
      meta: {
        name: 'autoplay-carousel',
        type: 'registry:component',
        title: 'Carousel',
        description:
          'Autoplaying carousel on the scroll-menu row: advances a group at a time, wraps at the end, pauses on hover, focus, hidden tabs, reduced motion and a built-in play/pause toggle.',
        author: 'asmyshlyaev177 <https://asmyshlyaev177.dev>',
        dependencies: ['react-horizontal-scrolling-menu', 'lucide-react'],
        registryDependencies: ['button', `${SITE_URL}/r/scroll-menu.json`],
        files: [
          {
            path: 'components/ui/autoplay-carousel.tsx',
            target: 'components/ui/autoplay-carousel.tsx',
            type: 'registry:component',
          },
        ],
        docs: `Each slide needs a unique itemId prop. Examples: ${SITE_URL}`,
      },
    },
  ];

  return {
    name: 'shadcn-registry',
    apply: 'build',
    generateBundle() {
      if (this.environment?.name !== 'client') return;

      for (const { source, meta } of items) {
        this.addWatchFile(fileURLToPath(source));
        this.emitFile({
          type: 'asset',
          fileName: `r/${meta.name}.json`,
          source:
            JSON.stringify(
              {
                $schema: 'https://ui.shadcn.com/schema/registry-item.json',
                ...meta,
                files: meta.files.map((file) => ({
                  ...file,
                  content: readFileSync(source, 'utf8'),
                })),
              },
              null,
              2,
            ) + '\n',
        });
      }

      // The index the shadcn directory reads, beside the items it lists.
      this.emitFile({
        type: 'asset',
        fileName: 'r/registry.json',
        source:
          JSON.stringify(
            {
              $schema: 'https://ui.shadcn.com/schema/registry.json',
              name: 'react-horizontal-scrolling-menu',
              homepage: SITE_URL,
              items: items.map(({ meta }) => meta),
            },
            null,
            2,
          ) + '\n',
      });
    },
  };
}

function localeHeaders(): Plugin {
  return {
    name: 'locale-headers',
    apply: 'build',
    // `writeBundle`, not `generateBundle`: `_headers` comes from public/ and is
    // copied to the output directory verbatim rather than passing through the
    // bundle, so there is no asset to rewrite — only a file to append to once
    // it has been copied.
    writeBundle() {
      if (this.environment?.name !== 'client') return;
      const file = fileURLToPath(
        new URL('./dist/client/_headers', import.meta.url),
      );

      const alternate = (href: string, title: string) =>
        `  Link: <${href}>; rel="alternate"; type="text/markdown"; title="${title}"`;
      const llms = alternate('/llms.txt', 'LLM-friendly reference (llms.txt)');
      const own = (href: string) => alternate(href, 'This page as Markdown');

      const blocks = ALL_LOCALES.flatMap((locale) => {
        const p = prefixOf(locale);
        return [
          // Every locale homepage points at the same `/index.md`: it is the
          // published llms.txt, one English document, and `$locale/index.tsx`
          // says exactly that in <head>. A `/ja/index.md` here would be both a
          // 404 and a header that disagrees with the markup.
          [p || '/', own('/index.md')],
          [`${p}/examples`, own(`${p}/examples.md`)],
          // `:slug` is interpolated into the value, so one rule covers all 21.
          [`${p}/examples/:slug`, own(`${p}/examples/:slug.md`)],
          [`${p}/compare`, own(`${p}/compare.md`)],
        ].map(([route, link]) => `${route}\n${link}\n${llms}`);
      });

      const existing = readFileSync(file, 'utf8').trimEnd();
      writeFileSync(file, `${existing}\n\n${blocks.join('\n')}\n`, 'utf8');
    },
  };
}

function sitemap(): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      if (this.environment?.name !== 'client') return;
      const lastmod = execSync('git log -1 --format=%cI', {
        cwd: fileURLToPath(new URL('.', import.meta.url)),
      })
        .toString()
        .trim();
      // Every page in every language, each entry carrying the full alternates
      // cluster. Without `xhtml:link` the eight translations read as
      // near-duplicates of the English pages rather than alternates of them.
      const urls = ALL_PAGES.flatMap(({ urls: group }) => {
        const alternates = group
          .map(
            ({ locale, url }) =>
              `    <xhtml:link rel="alternate" hreflang="${locale.code}" href="${SITE_URL}${url}"/>`,
          )
          .concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${group[0].url}"/>`,
          )
          .join('\n');
        return group.map(
          ({ url }) =>
            `  <url>\n    <loc>${SITE_URL}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`,
        );
      }).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

// Emits the Markdown mirrors: `/index.md`, `/examples.md`, and one
// `/examples/<slug>.md` per example.
//
// Appending `.md` to a canonical URL is the convention the documentation sites
// agents actually read converged on independently, and coding agents are the
// overwhelming majority of what fetches those endpoints. Emitted as build
// assets rather than served from a route because this whole site is
// prerendered onto Workers Assets — a static file is the same answer with no
// Worker invocation, and Cloudflare types `.md` as text/markdown on its own.
//
// An example's mirror carries its metadata and its complete source. The prose
// on the page lives in JSX and has no Markdown form to extract, so the mirror
// links to the page for it rather than pretending to replace it.
//
// Every mirror opens with YAML frontmatter — the one part written for a parser
// rather than a reader. An agent choosing which example to open, or citing one
// it has read, needs the title and canonical URL and nothing else, and can
// stop after five lines instead of loading the source file underneath.
// `/index.md` is the exception: it is the published llms.txt byte for byte,
// and that format wants its H1 first.
function markdownMirrors(): Plugin {
  const repoRoot = new URL('..', import.meta.url);
  const llmsTxtPath = new URL('./public/llms.txt', import.meta.url);

  return {
    name: 'markdown-mirrors',
    apply: 'build',
    generateBundle() {
      if (this.environment?.name !== 'client') return;

      /** `''` for English, `ja/` for the rest — an asset path has no leading slash. */
      const dir = (locale: { code: string; dir: string }) =>
        `${prefixOf(locale)}/`.slice(1);

      const emit = (fileName: string, source: string) =>
        this.emitFile({ type: 'asset', fileName, source });

      // The homepage's mirror is the llms.txt already published at its own
      // URL — one document, two names, because agents disagree about which
      // to try. Read from public/ so there is still a single source. One
      // document for every language too: `$locale/index.tsx` advertises this
      // path, not a per-locale one.
      emit('index.md', readFileSync(llmsTxtPath, 'utf8'));

      for (const locale of ALL_LOCALES) {
        emit(`${dir(locale)}examples.md`, hubDocument(locale));

        for (const example of EXAMPLES) {
          const file = fileURLToPath(new URL(example.sourceFile, repoRoot));
          this.addWatchFile(file);
          emit(
            `${dir(locale)}examples/${example.slug}.md`,
            exampleDocument(locale, example, readFileSync(file, 'utf8')),
          );
        }
      }
    },
  };
}

// Pages whose Markdown mirror is written by markdownMirrors() above, from
// better sources than their own rendered HTML: the homepage's mirror is the
// hand-written llms.txt, and each example's carries its complete source file.
// Everything else gets converted from what it actually renders.
export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart({
      // Every URL, stated — the same list the sitemap and `_headers` are built
      // from, so the three cannot disagree, and the build no longer depends on
      // 216 pages being reachable by following hrefs. It used to: the language
      // switcher had to be nine anchors, because a `<select>` would have left
      // all 192 translated pages unbuilt.
      pages: ALL_PAGES.flatMap(({ urls }) =>
        urls.map(({ url }) => ({ path: url })),
      ),
      prerender: {
        enabled: true,
        // Kept on as a backstop for a route added without a page-table entry.
        crawlLinks: true,
        // The crawler follows every same-origin href it finds, and the
        // footer now links /llms.txt — a static file in public/, not a
        // route. Prerendering it would overwrite the real file with
        // whatever the SSR handler makes of a path it has no route for.
        // Nothing this site routes has a dot in it.
        filter: ({ path }) => !path.includes('.'),
        // Fires per page with the HTML that was just written, which is what
        // makes a drift-proof mirror possible for pages with no other source.
        onSuccess: convertedMirrors(new URL('./dist/client/', import.meta.url)),
      },
    }),
    viteReact(),
    snippetsHtml(),
    exampleCodeHtml(),
    markdownMirrors(),
    sitemap(),
    shadcnRegistry(),
    localeHeaders(),
  ],
});
