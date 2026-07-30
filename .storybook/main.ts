import type { StorybookConfig } from '@storybook/react-vite';
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    'storybook-addon-code-editor',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  // v6 of the code-editor addon serves Monaco from its own bundled copy, so the
  // extra `monaco-editor/esm` static dir this used to add is no longer needed.
  staticDirs: getCodeEditorStaticDirs(import.meta.filename),
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // This Storybook is deployed as the library's demo, so Storybook's own
  // onboarding UI has no place in it: `sidebarOnboardingChecklist` is the
  // "Get started" card above the sidebar, `menuOnboardingChecklist` its entry
  // in the top-left menu.
  features: {
    sidebarOnboardingChecklist: false,
    menuOnboardingChecklist: false,
  },
  // Hides the "What's new" tab/notification about Storybook releases.
  core: {
    disableWhatsNewNotifications: true,
  },
};
export default config;
