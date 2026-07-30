import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import Example from './Performance.source';
// @ts-expect-error import
import ExampleRaw from './Performance.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Performance',
  component: Example,
  decorators: [(Story) => <Story />],
};

export default meta;

export const Performance = {};

makeLiveEditStory(Performance, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
