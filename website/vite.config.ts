import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { defineConfig, type Plugin } from 'vite';

import { EXAMPLE_GROUPS, EXAMPLES } from './src/lib/examples-manifest';
import { GITHUB, SITE_URL, STORIES } from './src/lib/links';
import { frontmatter, metaOf } from './src/lib/markdown-frontmatter';

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
        out[key] = await codeToHtml(code, {
          lang,
          themes: {
            light: 'github-light-default',
            dark: 'github-dark-default',
          },
          defaultColor: false,
        });
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
      const html = await codeToHtml(code, {
        lang: 'tsx',
        themes: {
          light: 'github-light-default',
          dark: 'github-dark-default',
        },
        defaultColor: false,
      });
      return `export const code = ${JSON.stringify(code)};\nexport const html = ${JSON.stringify(html)};`;
    },
  };
}

// Emits sitemap.xml with every route, stamped with the last commit date
// (content freshness = HEAD commit, never new Date()).
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
      const paths = [
        '/',
        '/examples',
        ...EXAMPLES.map((example) => `/examples/${example.slug}`),
        '/compare',
      ];
      const urls = paths
        .map(
          (path) =>
            `  <url><loc>${SITE_URL}${path}</loc><lastmod>${lastmod}</lastmod></url>`,
        )
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
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

      const emit = (fileName: string, source: string) =>
        this.emitFile({ type: 'asset', fileName, source });

      const footer = (extra: string) =>
        [
          '---',
          '',
          `More examples: <${SITE_URL}/examples.md> · Library summary for LLMs: <${SITE_URL}/llms.txt>`,
          extra,
          `Package: \`npm install react-horizontal-scrolling-menu\` · MIT · <${GITHUB}>`,
          '',
        ]
          .filter(Boolean)
          .join('\n');

      // The homepage's mirror is the llms.txt already published at its own
      // URL — one document, two names, because agents disagree about which
      // to try. Read from public/ so there is still a single source.
      emit('index.md', readFileSync(llmsTxtPath, 'utf8'));

      const hub = EXAMPLE_GROUPS.map((group) => {
        const entries = EXAMPLES.filter((example) => example.group === group);
        if (entries.length === 0) return null;
        return [
          `## ${group}`,
          '',
          ...entries.map(
            (example) =>
              `- [${example.name}](${SITE_URL}/examples/${example.slug}.md) — ${example.blurb}`,
          ),
          '',
        ].join('\n');
      }).filter(Boolean);

      emit(
        'examples.md',
        [
          frontmatter({
            title: 'react-horizontal-scrolling-menu — examples',
            description:
              'Every pattern the library supports, each with a live demo and its complete source.',
            canonical: `${SITE_URL}/examples`,
          }),
          '# react-horizontal-scrolling-menu — examples',
          '',
          '> Every pattern the library supports, each with a live demo and its',
          '> complete source. Links below point at the Markdown of each example;',
          '> drop the `.md` for the rendered page.',
          '',
          '---',
          '',
          ...hub,
          footer(''),
        ].join('\n'),
      );

      for (const example of EXAMPLES) {
        const file = fileURLToPath(new URL(example.sourceFile, repoRoot));
        this.addWatchFile(file);
        const code = readFileSync(file, 'utf8');
        const fileName = example.sourceFile.split('/').pop() ?? 'source.tsx';

        emit(
          `examples/${example.slug}.md`,
          [
            frontmatter({
              title: example.name,
              description: example.blurb,
              canonical: `${SITE_URL}/examples/${example.slug}`,
              source: fileName,
            }),
            `# ${example.name}`,
            '',
            `> ${example.blurb}`,
            '',
            `Live demo, and the prose explaining how it works: the page above.`,
            `Editable in the browser: <${STORIES[example.storyKey]}>`,
            '',
            '---',
            '',
            `Full source — \`${fileName}\`:`,
            '',
            '```tsx',
            code.trimEnd(),
            '```',
            '',
            footer(
              `Working on this with an AI agent? The package ships SKILL.md files: \`npx @tanstack/intent@latest install\`, then load \`react-horizontal-scrolling-menu#menu-setup\`.`,
            ),
          ].join('\n'),
        );
      }
    },
  };
}

// Pages whose Markdown mirror is written by markdownMirrors() above, from
// better sources than their own rendered HTML: the homepage's mirror is the
// hand-written llms.txt, and each example's carries its complete source file.
// Everything else gets converted from what it actually renders.
const HAS_BESPOKE_MIRROR = (path: string) =>
  path === '/' || path === '/examples' || path.startsWith('/examples/');

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
}).use(gfm); // tables, strikethrough — a comparison matrix without gfm is a wall of <tr>

/**
 * Site-relative links mean nothing to a client holding this file over HTTP,
 * so they become absolute — and point at the other page's Markdown, since
 * every route on this site has a mirror. An agent following a link out of a
 * Markdown document should land in another one, not back in HTML.
 *
 * Two things are left alone: the root, whose mirror is `/index.md` rather
 * than the `/.md` this would otherwise produce, and anything that already
 * has a file extension (`/llms.txt`, `/og.png`) and so is not a page.
 */
const absolutise = (markdown: string) =>
  markdown.replace(
    // The trailing group keeps any link title — `](/x "title")`.
    /\]\((\/[^)\s]*)([^)]*)\)/g,
    (_whole, href: string, title: string) => {
      const target =
        href === '/'
          ? '/index.md'
          : /\.[a-z0-9]+$/i.test(href)
            ? href
            : `${href}.md`;
      return `](${SITE_URL}${target}${title})`;
    },
  );

/**
 * Links rendered side by side in a flex row carry no whitespace between them
 * in the markup, so they convert to `[a](…)[b](…)` — valid Markdown, and
 * unreadable. A separator is what the visual gap meant.
 */
const separateAdjacentLinks = (markdown: string) =>
  markdown.replace(/\)\[/g, ') · [');

/**
 * Converts each remaining prerendered page to `<path>.md`, from the HTML it
 * actually shipped.
 *
 * The alternative was keeping a second, hand-written copy of pages like
 * /compare in sync with the JSX by hand. Converting what rendered means the
 * mirror cannot drift from the page by construction — the page is the source.
 * Only `<main>` is converted: the header, footer and JSON-LD are chrome, and
 * an agent reading this wants the argument, not the navigation.
 */
function convertedMirrors(outputDir: URL) {
  return ({ page, html }: { page: { path: string }; html: string }) => {
    if (HAS_BESPOKE_MIRROR(page.path)) return;

    const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1];
    if (!main) return;

    const body = separateAdjacentLinks(absolutise(turndown.turndown(main)));
    const { title, description, image } = metaOf(html);
    const document = [
      frontmatter({
        title,
        description,
        canonical: `${SITE_URL}${page.path}`,
        image,
      }),
      body.trim(),
      '',
      '---',
      '',
      `More examples: <${SITE_URL}/examples.md>`,
      `Library summary for LLMs: <${SITE_URL}/llms.txt>`,
      '',
    ].join('\n');

    const file = fileURLToPath(new URL(`.${page.path}.md`, outputDir));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, document, 'utf8');
  };
}

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
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
  ],
});
