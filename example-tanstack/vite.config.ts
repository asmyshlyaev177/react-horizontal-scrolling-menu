import { cloudflare } from '@cloudflare/vite-plugin';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Same plugin stack as website/ — TanStack Start server-rendering through
// workerd — but no prerender: the point of this app is exercising the
// library's SSR path on every request, against the local build.
export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    viteReact(),
  ],
  // The library is linked via file:../ and resolves through the repo root,
  // which has its own react in node_modules — dedupe, or hooks crash on the
  // two-Reacts problem. (Next avoids it with turbopack.root; this is the
  // Vite equivalent.)
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 3004,
    strictPort: true,
  },
  preview: {
    port: 3004,
    strictPort: true,
  },
});
