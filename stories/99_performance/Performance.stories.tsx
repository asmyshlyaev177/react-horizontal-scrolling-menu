import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import styled from 'styled-jss';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';

// @ts-ignore
import ExampleRaw from './Performance.source.tsx?raw';
import Example from './Performance.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Performance',
  component: Example,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
};

export default meta;

export const Performance = createLiveEditStory({
  code: ExampleRaw,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
  modifyEditor: setupEditor,
});
