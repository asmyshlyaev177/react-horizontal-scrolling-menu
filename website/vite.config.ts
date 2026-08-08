import { pathToFileURL } from 'node:url';

import { cloudflare } from '@cloudflare/vite-plugin';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

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

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
    snippetsHtml(),
  ],
});
