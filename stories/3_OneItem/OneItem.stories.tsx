/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { expect, within } from '@storybook/test';

import { setupEditor } from '../setupEditor';
import { availableImports } from '../availableImports';
import { ScrollMenu } from '../../src/index';
import { TestObj, leftArrowSelector, rightArrowSelector } from '../test';
import { SizeWrapper } from '../SizeWrapper';

// @ts-ignore
import ExampleRaw from './OneItem.source.tsx?raw';
import Example from './OneItem.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/OneItem',
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

export const OneItem = createLiveEditStory({
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
    await testObj.wait();

    await testObj.arrowsVisible({ left: false, right: true });
    expect(await testObj.getVisibleCardsKeys(1)).toEqual(['test0']);

    await testObj.clickNext();
    await testObj.wait();
    await testObj.cardHidden('test0');
    expect(await testObj.getVisibleCardsKeys(1)).toEqual(['test1']);
    await testObj.arrowsVisible({ left: true, right: true });

    await testObj.clickNext();
    await testObj.wait();
    await testObj.cardHidden('test1');
    expect(await testObj.getVisibleCardsKeys(1)).toEqual(['test2']);
    await testObj.arrowsVisible({ left: true, right: true });

    await testObj.clickPrev();
    await testObj.wait();
    await testObj.cardHidden('test2');
    await testObj.arrowsVisible({ left: true, right: true });
    expect(await testObj.getVisibleCardsKeys(1)).toEqual(['test1']);

    await testObj.clickPrev();
    await testObj.wait();
    await testObj.cardHidden('test1');
    await testObj.arrowsVisible({ left: false, right: true });
    expect(await testObj.getVisibleCardsKeys(1)).toEqual(['test0']);
  },
};
