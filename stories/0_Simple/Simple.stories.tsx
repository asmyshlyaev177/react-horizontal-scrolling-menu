/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react';
import React from 'react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { SizeWrapper } from '../SizeWrapper';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { ScrollTest } from '../test';

import Example from './Simple.source';
// @ts-ignore
import ExampleRaw from './Simple.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Simple',
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

export const Simple = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();
