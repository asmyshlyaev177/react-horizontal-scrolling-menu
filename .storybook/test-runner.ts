// .storybook/test-runner.ts
// `waitForPageReady` is referenced only by the commented-out postVisit hook
// below; import it again when that is enabled.
import { type TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  // async postVisit(page, context) {
  //   // use the test-runner utility to wait for fonts to load, etc.
  //   await waitForPageReady(page);
  //   // by now, we know that the page is fully loaded
  // },
};
export default config;
