import { defineConfig, devices } from '@playwright/test';

/**
 * The demo app is started by wireit before the tests run — `serve` for the
 * exported build (`test:e2e`) and `demo` for `next dev` (`test:e2e:dev`). Both
 * listen on 3003, so one spec suite covers both variants.
 */
export default defineConfig({
  testDir: './e2e',

  // Every spec opens its own page and shares no state, so they can run at once.
  fullyParallel: true,

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
