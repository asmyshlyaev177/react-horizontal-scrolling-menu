/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import Example from './Items_animation.source';
// @ts-ignore
import ExampleRaw from './Items_animation.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/ItemsAnimation',
  component: Example,
};

export default meta;

export const ItemsAnimation = {};

makeLiveEditStory(ItemsAnimation, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
