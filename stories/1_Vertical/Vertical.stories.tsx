/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from '@emotion/styled';
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { downArrowSelector, ScrollTest, upArrowSelector } from '../test';
import Example from './Vertical.source';
// @ts-ignore
import ExampleRaw from './Vertical.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Vertical',
  component: Example,
  decorators: [
    (Story) => (
      <SizeWrapper>
        <Story />
      </SizeWrapper>
    ),
  ],
};

const SizeWrapper = styled('div')({
  maxWidth: '300px',
  maxHeight: '670px',
  display: 'flex',
  position: 'relative',
});

export default meta;

export const Vertical = {};

makeLiveEditStory(Vertical, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest({
  leftArrow: upArrowSelector,
  rightArrow: downArrowSelector,
});
