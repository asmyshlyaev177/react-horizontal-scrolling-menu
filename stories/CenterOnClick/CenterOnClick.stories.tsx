/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { leftArrowSelector, rightArrowSelector, TestObj } from '../test';
import Example from './CenterOnClick.source';
// @ts-ignore
import ExampleRaw from './CenterOnClick.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/CenterOnClick',
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

export const CenterOnClick = {};

makeLiveEditStory(CenterOnClick, {
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

    await testObj.arrowsVisible({ left: false, right: true });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);

    // Clicking the last visible card selects it and scrolls it to the
    // center, pulling one neighbour in from each side.
    await userEvent.click(canvas.getByText('test2'));
    await testObj.expectVisibleCards(['test1', 'test2', 'test3']);
    expect(await testObj.getSelectedCardsKeys()).toEqual(['test2']);
    await testObj.arrowsVisible({ left: true, right: true });

    // Clicking another card re-centers on it and moves the single
    // selection over, rather than adding to it.
    await userEvent.click(canvas.getByText('test3'));
    await testObj.expectVisibleCards(['test2', 'test3', 'test4']);
    expect(await testObj.getSelectedCardsKeys()).toEqual(['test3']);
  },
};
