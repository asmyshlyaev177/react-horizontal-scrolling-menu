import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

import { EXAMPLES } from './src/lib/examples-manifest';
import { SITE_URL } from './src/lib/links';

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

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
    snippetsHtml(),
    exampleCodeHtml(),
    sitemap(),
  ],
});
