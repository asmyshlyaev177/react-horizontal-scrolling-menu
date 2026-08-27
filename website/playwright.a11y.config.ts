/**
 * Separate from `playwright.config.ts` because that suite is HTTP-level and
 * launches no browser — its CI job never runs `playwright install`. This one
 * drives a real page, so the download lives in its own step. `testDir` is
 * `./tests`, not `./e2e`, so the smoke config cannot collect it and inherit
 * that dependency.
 */
import { defineConfig } from '@playwright/test';

/** Not the smoke suite's 4173: both must be able to run at once. */
const PORT = 4174;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['list']] : [['list']],

  use: { baseURL: `http://localhost:${PORT}` },

  webServer: {
    // `--strictPort`: vite otherwise walks to the next free port and the suite
    // audits whatever else was on 4174.
    command: `npx vite preview --port ${PORT} --strictPort`,
    // A static asset: workerd accepts connections slightly before it answers
    // them, so a probe on a rendered route can hang.
    url: `http://localhost:${PORT}/llms.txt`,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
