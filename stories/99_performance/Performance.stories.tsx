import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { setupEditor } from '../setupEditor';
import { availableImports } from '../availableImports';
import { ScrollMenu } from '../../src/index';

// @ts-expect-error import
import ExampleRaw from './Performance.source.tsx?raw';
import Example from './Performance.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Performance',
  component: Example,
  decorators: [(Story) => <Story />],
};

export default meta;

export const Performance = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});
