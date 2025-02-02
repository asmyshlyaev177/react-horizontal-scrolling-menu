/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react';
import React from 'react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { SizeWrapper } from '../SizeWrapper';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';

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

export const AddItems = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
