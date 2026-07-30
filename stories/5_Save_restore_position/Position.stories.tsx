/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { userEvent, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import {
  leftArrowSelector,
  rightArrowSelector,
  ScrollTest,
  TestObj,
} from '../test';
import Example from './Position.source';
// @ts-ignore
import ExampleRaw from './Position.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Position',
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

export const Position = {};

makeLiveEditStory(Position, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();

export const PosTest = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector,
    });
    await testObj.isReady();
    await userEvent.click(canvas.getByTestId('reset'));
    await userEvent.click(canvas.getByTestId('reload'));
    await testObj.isReady();

    await testObj.clickNext();
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);

    await userEvent.click(canvas.getByTestId('reload'));
    await testObj.isReady();

    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);
  },
};
