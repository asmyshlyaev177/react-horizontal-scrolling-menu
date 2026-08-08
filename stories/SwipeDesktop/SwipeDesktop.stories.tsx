/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { drag, TestObj } from '../test';
// @ts-ignore
import Example from './SwipeDesktop.source';
import ExampleRaw from './SwipeDesktop.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/SwipeDesktop',
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

export const SwipeDesktop = {};

makeLiveEditStory(SwipeDesktop, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = {
  tags: ['test-only'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow: '', rightArrow: '' });
    // Gates the `getVisibleCards()` read below: it is a snapshot, not a
    // retrying assertion, so the observer must have run first.
    await testObj.isReady();

    const lastCard = (await testObj.getVisibleCards()).slice(-1)[0];

    await drag(lastCard, { delta: { x: -100, y: 0 }, duration: 150, steps: 5 });
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);

    await drag(lastCard, { delta: { x: 100, y: 0 }, duration: 150, steps: 5 });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
  },
};
