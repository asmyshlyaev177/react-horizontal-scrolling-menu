/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, within } from 'storybook/test';
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
// @ts-ignore
import Example from './RTL.source';
import ExampleRaw from './RTL.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/RTL',
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

export const RTL = {};

makeLiveEditStory(RTL, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const TestRTL = {
  tags: ['test-only'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement) as Canvas;
    const testObj = new TestObj(canvas, {
      leftArrow: rightArrowSelector,
      rightArrow: leftArrowSelector,
    });
    expect(await canvas.getByLabelText('RTL')).toBeChecked();
    await testObj.isReady();

    await scrollSmokeTest(testObj);
  },
};

// Verifies the same menu still scrolls correctly with RTL switched off.
export const TestNonRTL = {
  tags: ['test-only'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement) as Canvas;
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector,
    });

    await canvas.getByLabelText('RTL').click();
    expect(await canvas.getByLabelText('RTL')).not.toBeChecked();
    await testObj.isReady();

    await scrollSmokeTest(testObj);
  },
};
