/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import React from 'react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { SizeWrapper } from '../SizeWrapper';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { ScrollTest, TestObj, drag } from '../test';

// @ts-ignore
import Example from './MouseDrag.source';
import ExampleRaw from './MouseDrag.source.tsx?raw';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/MouseDrag',
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

export const MouseDrag = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();

export const TestDrag = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow: '', rightArrow: '' });
    await testObj.wait();

    const lastCard = (await testObj.getVisibleCards()).slice(-1)[0];
    expect(await testObj.getSelectedCardsKeys()).toHaveLength(0);
    await lastCard.click();
    expect(await testObj.getSelectedCards()).toHaveLength(1);

    await drag(lastCard, { delta: { x: -350, y: 0 } });
    await testObj.wait();

    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test2',
      'test3',
      'test4',
    ]);
  },
};
