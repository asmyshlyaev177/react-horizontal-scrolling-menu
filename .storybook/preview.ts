import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  horizontal: {
    name: 'horizontal',
    styles: {
      height: '400px',
      width: '650px',
    }
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    } },
  },
};

export default preview;
