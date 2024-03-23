import type { StorybookConfig } from '@storybook/react-webpack5';
import {
  getCodeEditorStaticDirs,
  getExtraStaticDir,
} from 'storybook-addon-code-editor/getStaticDirs';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    'storybook-addon-code-editor',
    '@storybook/addon-links',
    // '@storybook/addon-onboarding',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-swc'
  ],
  managerHead: (head) => `
  <script>
    let storybookConfig = JSON.parse(localStorage.getItem('storybook-layout'));

    const panelSize = 940
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
    getExtraStaticDir('monaco-editor/esm'),
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {}
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
