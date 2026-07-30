/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { leftArrowSelector, rightArrowSelector, TestObj } from '../test';
// @ts-ignore
import Example from './OneItemScroll.source';
import ExampleRaw from './OneItemScroll.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/OneItemScroll',
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

export const OneItemScroll = {};

makeLiveEditStory(OneItemScroll, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector,
    });
    // Both arrows start in the state this first assertion expects, so
    // without gating on the observer it would pass before the menu had
    // initialised and the click below would hit an empty ItemsMap.
    await testObj.isReady();

    await testObj.arrowsVisible({ left: false, right: true });

    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.expectVisibleCards(['test1', 'test2', 'test3']);
    await testObj.arrowsVisible({ left: true, right: true });

    await testObj.clickNext();
    await testObj.cardHidden('test1');
    await testObj.expectVisibleCards(['test2', 'test3', 'test4']);
    await testObj.arrowsVisible({ left: true, right: true });

    await testObj.clickPrev();
    await testObj.cardHidden('test4');
    await testObj.arrowsVisible({ left: true, right: true });
    await testObj.expectVisibleCards(['test1', 'test2', 'test3']);

    await testObj.clickPrev();
    await testObj.cardHidden('test3');
    await testObj.arrowsVisible({ left: false, right: true });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
  },
};
