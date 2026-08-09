/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import type { Canvas } from '../test';
import {
  leftArrowSelector,
  rightArrowSelector,
  scrollSmokeTest,
  TestObj,
} from '../test';
import Example from './CustomTransition.source';
// @ts-ignore
import ExampleRaw from './CustomTransition.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/CustomTransition',
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

export const CustomTransition = {};

makeLiveEditStory(CustomTransition, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = {
  tags: ['test-only'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement) as Canvas;
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector,
    });

    // The select drives both transition props; 1200ms is the default.
    const select = canvas.getByTestId('duration-select');
    expect(select).toHaveValue('1200');

    await testObj.isReady();

    // The full scroll pass runs through the custom rAF transition — every
    // visibility assertion only settles once the ease-in-out animation has
    // landed `scrollLeft` on its computed target.
    await scrollSmokeTest(testObj);

    // Changing the duration swaps in a new behavior closure; the menu has to
    // keep scrolling with it.
    await userEvent.selectOptions(select, '500');
    expect(select).toHaveValue('500');

    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);
  },
};
