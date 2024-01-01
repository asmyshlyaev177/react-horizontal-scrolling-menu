/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import styled from 'styled-jss';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
import { ScrollTest, upArrowSelector, downArrowSelector } from '../test';

// @ts-ignore
import ExampleRaw from './Vertical.source.tsx?raw';
import Example from './Vertical.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'ScrollMenu/Vertical',
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

export const Vertical = createLiveEditStory({
  code: ExampleRaw,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
  modifyEditor: setupEditor,
});

export const Test = ScrollTest({
  leftArrow: upArrowSelector,
  rightArrow: downArrowSelector,
});
