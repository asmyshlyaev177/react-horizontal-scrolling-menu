import type { StorybookConfig } from "@storybook/react-webpack5";
import {
  getCodeEditorStaticDirs,
  getExtraStaticDir
} from 'storybook-addon-code-editor/getStaticDirs';

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-webpack5'
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    'storybook-addon-code-editor',
    "@storybook/addon-mdx-gfm"
  ],
  managerHead: (head) => `
  <script>
    let storybookConfig = JSON.parse(localStorage.getItem('storybook-layout'));

    const panelSize = 850
    const navSize = 250
    if (typeof storybookConfig === 'object' && storybookConfig !== null && +storybookConfig.resizerPanel.x > panelSize) {
      storybookConfig.resizerNav.x = navSize;
      storybookConfig.resizerPanel.x = panelSize;
      localStorage.setItem('storybook-layout', JSON.stringify(storybookConfig));
      document.location.reload();
    } else if (storybookConfig === null) {
      storybookConfig = { resizerNav: { x: navSize, y: 0 }, resizerPanel: { x: panelSize, y: 0 } };
      localStorage.setItem('storybook-layout', JSON.stringify(storybookConfig));
    }
  </script>
  ${head}
  `,
  staticDirs: [
    ...getCodeEditorStaticDirs(),
    getExtraStaticDir('monaco-editor/esm')
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
