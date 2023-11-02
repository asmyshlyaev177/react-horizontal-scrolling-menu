import { defineConfig } from 'cypress';

export default defineConfig({
  modifyObstructiveCode: false,

  retries: {
    runMode: 1,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'http://localhost:3003',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
