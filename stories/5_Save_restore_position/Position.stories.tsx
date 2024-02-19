/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import styled from 'styled-jss';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
import {
  ScrollTest,
  TestObj,
  leftArrowSelector,
  rightArrowSelector,
} from '../test';
import { SizeWrapper } from '../SizeWrapper';

// @ts-ignore
import ExampleRaw from './Position.source.tsx?raw';
import Example from './Position.source';

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

export const Position = createLiveEditStory({
  code: ExampleRaw,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
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
    await testObj.wait()
    await userEvent.click(canvas.getByTestId('reset'));
    await userEvent.click(canvas.getByTestId('reload'));
    await testObj.isReady()

    await testObj.clickNext();
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test3',
      'test4',
      'test5',
    ]);

    await userEvent.click(canvas.getByTestId('reload'));
    await testObj.isReady()
    await testObj.wait()

    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test3',
      'test4',
      'test5',
    ]);
    await userEvent.click(canvas.getByTestId('reset'));
  },
};
