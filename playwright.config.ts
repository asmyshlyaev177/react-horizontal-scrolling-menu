import { defineConfig, devices } from '@playwright/test';

/**
 * The example apps are started by wireit before the tests run — `serve` +
 * `serve-tanstack` for the production builds (`test:e2e`), `demo` +
 * `demo-tanstack` for the dev servers (`test:e2e:dev`). example-nextjs listens
 * on 3003 (the baseURL), example-tanstack on 3004; the one spec suite loops
 * over both.
 */
export default defineConfig({
  testDir: './e2e',

  // Every spec opens its own page and shares no state, so they can run at once.
  fullyParallel: true,

  // But not unbounded: the tests assert real scrolling, and in the dev-server
  // variant a worker per test saturates the CPU (rollup watch + next dev +
  // vite dev + one chromium each) badly enough that the first scrollIntoView
  // starves and a click appears to do nothing. Three workers is the load the
  // suite was originally written for.
  workers: 3,

  forbidOnly: !!process.env.CI,

  // Same budget Cypress used: retry in CI, never locally.
  retries: process.env.CI ? 2 : 0,

  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list']],

  use: {
    baseURL: 'http://localhost:3003',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
