/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { ScrollTest } from '../test';
import Example from './PreventBodyScroll.source';
// @ts-ignore
import ExampleRaw from './PreventBodyScroll.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/PreventBodyScroll',
  component: Example,
  decorators: [
    (Story) => (
      <SizeWrapper>
        <Story />
      </SizeWrapper>
    ),
  ],
};

export default meta;

export const PreventBodyScroll = {};

makeLiveEditStory(PreventBodyScroll, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();
