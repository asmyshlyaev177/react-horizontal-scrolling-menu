import { defineConfig } from '@playwright/test';

/**
 * The website's smoke suite: what the site serves, to whom.
 *
 * It runs against `vite preview` — the built site in workerd, the same
 * runtime Cloudflare runs — and never against `vite dev`, because most of
 * what it asserts does not exist in dev. The `.md` mirrors are emitted at
 * build (`markdownMirrors()` is `apply: 'build'`, and the converted ones are
 * written from the prerenderer's `onSuccess` hook), and `_headers` is only
 * honoured by the asset router. `npm test` builds first for that reason; run
 * `npx playwright test` directly to iterate against a build you already have.
 *
 * No browser is launched. Every assertion here is HTTP-level — status,
 * headers, body — so the suite uses the `request` fixture only, and CI never
 * calls `playwright install`. Adding a test that touches `page` means adding
 * a browser download to the website job in .github/workflows/main.yml.
 */

const PORT = 4173;

export default defineConfig({
  testDir: './e2e',

  // Nothing here mutates server state, so the whole suite can run at once.
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list']],

  use: {
    baseURL: `http://localhost:${PORT}`,
    // Deliberately no `extraHTTPHeaders`: content negotiation is the thing
    // under test, so every request states its own Accept and User-Agent and
    // nothing is inherited from here.
  },

  webServer: {
    // Preview only — `npm test` has already built. `--strictPort` because
    // vite otherwise walks to the next free port on a collision, and the
    // suite would then quietly measure whatever else was on 4173.
    command: `npx vite preview --port ${PORT} --strictPort`,
    // Polled on a static asset rather than `/`, so the readiness check can
    // never be answered by the negotiating middleware. workerd accepts
    // connections slightly before it answers them, so a probe can hang;
    // this timeout is what turns that into a failed run instead of a hung one.
    url: `http://localhost:${PORT}/llms.txt`,
    timeout: 120_000,
    // Locally a server already on 4173 is reused, which is convenient while
    // writing tests and wrong the moment you change src/ — kill it to force
    // a rebuild. CI always starts its own.
    reuseExistingServer: !process.env.CI,
  },
});
