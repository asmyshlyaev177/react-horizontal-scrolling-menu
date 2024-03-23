/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { setupEditor } from '../setupEditor';
import { availableImports } from '../availableImports';
import { ScrollMenu } from '../../src/index';

// @ts-ignore
import ExampleRaw from './Items_animation.source.tsx?raw';
import Example from './Items_animation.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/ItemsAnimation',
  component: Example,
  decorators: [(Story) => <Story />],
};

export default meta;

export const ItemsAnimation = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
