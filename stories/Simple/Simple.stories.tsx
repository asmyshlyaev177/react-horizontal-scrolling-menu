/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import styled from 'styled-jss';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
import { ScrollTest } from '../test';

// @ts-ignore
import ExampleRaw from './Simple.source.tsx?raw';
import { SimpleExample as Example } from './Simple.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'ScrollMenu/Simple',
  component: Example,
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
  code: ExampleRaw,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();
