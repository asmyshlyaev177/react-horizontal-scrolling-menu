import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as Types from '../../dist/index.d.ts?raw';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as styles from './index.css';

// TODO: move from up from src folder

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Example from './Simple.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'ScrollMenu',
  parameters: {},
  argTypes: {
    onWheel: {
      description: 'onWheel handler',
      type: 'function',
    },
  },
  decorators: [
    // TODO: https://storybook.js.org/docs/writing-stories/decorators#global-decorators
    (Story) => (
      <div style={{ maxWidth: '650px', maxHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type args = Parameters<
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Parameters<typeof createLiveEditStory>[0]['modifyEditor']
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setupEditor = (monaco: args[0], _editor: args[1]) => {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2016,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs, // NodeJs
    module: monaco.languages.typescript.ModuleKind.AMD,
    allowSyntheticDefaultImports: true,
    jsx: 2,
    esModuleInterop: true,
  });

  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `declare module "react-horizontal-scrolling-menu" { ${Types.default} }`
  );
};

export const Simple = createLiveEditStory({
  code: Example,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    './index.css': styles,
  },
  modifyEditor: setupEditor,
});
