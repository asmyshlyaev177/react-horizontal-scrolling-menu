/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
import styled from 'styled-jss';

// @ts-ignore
import * as Types from '../index.d.ts?raw';

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
    (Story) => (
      <SizeWrapper>
        <Story />

        {/* TODO: description block */}
      </SizeWrapper>
    ),
  ],
};

const SizeWrapper = styled('div')({
  maxWidth: '650px',
  maxHeight: '400px',
});

export default meta;

export const Simple = createLiveEditStory({
  code: Example,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
  modifyEditor: setupEditor,
});

type args = Parameters<
  // @ts-ignore
  Parameters<typeof createLiveEditStory>[0]['modifyEditor']
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setupEditor(monaco: args[0], _editor: args[1]) {
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
}
