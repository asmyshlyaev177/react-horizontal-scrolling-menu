import { getJestConfig } from '@storybook/test-runner';

// The default Jest configuration comes from @storybook/test-runner.
// This file is ESM because package.json sets "type": "module"; the previous
// `require`/`module.exports` form fails under Node's ESM loader.
const testRunnerConfig = getJestConfig();

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
export default {
  ...testRunnerConfig,
  roots: ['stories'],
  testTimeout: 120 * 1000,
  /** Add your own overrides below, and make sure
   *  to merge testRunnerConfig properties with your own
   * @see https://jestjs.io/docs/configuration
   */
};
