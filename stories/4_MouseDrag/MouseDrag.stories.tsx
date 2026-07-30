/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { drag, ScrollTest, TestObj } from '../test';
// @ts-ignore
import Example from './MouseDrag.source';
import ExampleRaw from './MouseDrag.source.tsx?raw';

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

export const MouseDrag = {};

makeLiveEditStory(MouseDrag, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();

export const TestDrag = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow: '', rightArrow: '' });
    // Gates the `getVisibleCards()` read below: it is a snapshot, not a
    // retrying assertion, so the observer must have run first.
    await testObj.isReady();

    const lastCard = (await testObj.getVisibleCards()).slice(-1)[0];
    expect(await testObj.getSelectedCardsKeys()).toHaveLength(0);
    await lastCard.click();
    expect(await testObj.getSelectedCards()).toHaveLength(1);

    await drag(lastCard, { delta: { x: -350, y: 0 } });

    await testObj.expectVisibleCards(['test2', 'test3', 'test4']);
  },
};
