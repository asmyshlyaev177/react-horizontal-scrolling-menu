/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react-vite';
import React from 'react';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import Example from './ScrollToItem.source';
// @ts-ignore
import ExampleRaw from './ScrollToItem.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/ScrollToItem',
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

export const ScrollToItem = {};

makeLiveEditStory(ScrollToItem, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
