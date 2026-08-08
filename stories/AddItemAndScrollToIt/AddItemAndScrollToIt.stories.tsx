/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react-vite';
import React from 'react';
import { userEvent, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { leftArrowSelector, rightArrowSelector, TestObj } from '../test';
import Example from './AddItemAndScrollToIt.source';
// @ts-ignore
import ExampleRaw from './AddItemAndScrollToIt.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/AddItemAndScrollToIt',
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

export const AddItemAndScrollToIt = {};

makeLiveEditStory(AddItemAndScrollToIt, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = {
  tags: ['test-only'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector,
    });
    await testObj.isReady();

    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);

    // Adding an item appends it and scrolls the menu all the way to it.
    await userEvent.click(canvas.getByTestId('add-item'));
    await testObj.expectVisibleCards(['test8', 'test9', 'test10']);

    // And again from the position the first add left the menu in.
    await userEvent.click(canvas.getByTestId('add-item'));
    await testObj.expectVisibleCards(['test9', 'test10', 'test11']);
  },
};
