/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { downArrowSelector, ScrollTest, upArrowSelector } from '../test';
import Example from './Vertical.source';
// @ts-ignore
import ExampleRaw from './Vertical.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Vertical',
  component: Example,
  decorators: [
    (Story) => (
      // Inline style narrows the shared wrapper for a vertical menu.
      <SizeWrapper
        style={{
          maxWidth: '300px',
          maxHeight: '670px',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Story />
      </SizeWrapper>
    ),
  ],
};

export default meta;

export const Vertical = {};

makeLiveEditStory(Vertical, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = {
  ...ScrollTest({
    leftArrow: upArrowSelector,
    rightArrow: downArrowSelector,
  }),
  tags: ['test-only'],
};
