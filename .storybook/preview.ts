import 'normalize.css';
import './index.css';

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  // `actions.argTypesRegex` was removed in Storybook 8: matching handlers are no
  // longer auto-wired, and explicit action args come from `fn()` in `storybook/test`.
  parameters: {
    options: {
      // Docs first, then the examples in teaching order: basics, scrolling
      // control, dynamic items, polish, layout variants, input modes, and the
      // edge-case demos last. Anything unlisted lands after these.
      storySort: {
        order: [
          'Docs',
          'Examples',
          [
            'Simple',
            'OneItemScroll',
            'OneItem',
            'MouseDrag',
            'ScrollToItem',
            'CenterOnClick',
            'AddItems',
            'AddItemAndScrollToIt',
            'ItemsAnimation',
            'Progress',
            'SaveRestorePosition',
            'PreventBodyScroll',
            'CustomTransition',
            'Vertical',
            'BottomArrows',
            'MobileSwipeOnly',
            'SwipeDesktop',
            'RTL',
            'Performance',
            'InitNoBlink',
          ],
        ],
      },
    },
  },
};

export default preview;
