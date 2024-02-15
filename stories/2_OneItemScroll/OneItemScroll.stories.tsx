/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import styled from 'styled-jss';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
import { TestObj, leftArrowSelector, rightArrowSelector } from '../test';
import { SizeWrapper } from '../SizeWrapper';

// @ts-ignore
import ExampleRaw from './OneItemScroll.source.tsx?raw';
import Example from './OneItemScroll.source';

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

export const OneItemScroll = createLiveEditStory({
  code: ExampleRaw,
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
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

    await testObj.clickNext();
    await testObj.wait();
    await testObj.cardHidden('test0');
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test1',
      'test2',
      'test3',
    ]);
    await testObj.arrowsVisible({ left: true, right: true });

    await testObj.clickNext();
    await testObj.wait();
    await testObj.cardHidden('test1');
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test2',
      'test3',
      'test4',
    ]);
    await testObj.arrowsVisible({ left: true, right: true });

    await testObj.clickPrev();
    await testObj.wait();
    await testObj.cardHidden('test4');
    await testObj.arrowsVisible({ left: true, right: true });
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test1',
      'test2',
      'test3',
    ]);

    await testObj.clickPrev();
    await testObj.wait();
    await testObj.cardHidden('test3');
    await testObj.arrowsVisible({ left: false, right: true });
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  },
};
