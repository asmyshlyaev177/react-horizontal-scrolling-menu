/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { setupEditor } from '../setupEditor';
import { availableImports } from '../availableImports';
import { ScrollMenu } from '../../src/index';
import { ScrollTest } from '../test';
import { SizeWrapper } from '../SizeWrapper';

// @ts-ignore
import ExampleRaw from './MobileSwipeOnly.source.tsx?raw';
import Example from './MobileSwipeOnly.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/MobileSwipeOnly',
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

export const MobileSwipeOnly = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();
