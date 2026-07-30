import 'normalize.css';
import './index.css';

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  // `actions.argTypesRegex` was removed in Storybook 8: matching handlers are no
  // longer auto-wired, and explicit action args come from `fn()` in `storybook/test`.
  parameters: {},
};

export default preview;
