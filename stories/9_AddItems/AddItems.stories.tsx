/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react-vite';
import React from 'react';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import Example from './AddItems.source';
// @ts-ignore
import ExampleRaw from './AddItems.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/AddItems',
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

export const AddItems = {};

makeLiveEditStory(AddItems, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
