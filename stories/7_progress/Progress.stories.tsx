import { expect } from '@storybook/jest';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { within, userEvent } from '@storybook/testing-library';
import React from 'react';
import { createLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { SizeWrapper } from '../SizeWrapper';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { TestObj, leftArrowSelector, rightArrowSelector } from '../test';

import Example from './Progress.source';
// @ts-ignore
import ExampleRaw from './Progress.source.tsx?raw';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Progress',
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

export const Progress = createLiveEditStory({
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
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
    const getLeftItems = async () =>
      await canvas.getByTestId('items-left').textContent;
    const getRightItems = async () =>
      await canvas.getByTestId('items-right').textContent;
    const getActivePage = async () => {
      const activePages = await canvas
        .queryAllByTestId(/page-/)
        .filter((el) => el.className.includes('active'));
      expect(activePages).toHaveLength(1);
      return activePages[0];
    };
    const checkPagesLength = async () =>
      expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);

    expect(await getLeftItems()).toEqual('0');
    expect(await getRightItems()).toEqual('27');

    await checkPagesLength();
    expect(await getActivePage()).toHaveTextContent('1');

    await userEvent.click(canvas.getByTestId('page-5'));
    await testObj.isReady();
    await testObj.wait();

    await checkPagesLength();
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test12',
      'test13',
      'test14',
    ]);
    expect(await getActivePage()).toHaveTextContent('5');
    expect(await getLeftItems()).toEqual('12');
    expect(await getRightItems()).toEqual('15');

    await userEvent.click(canvas.getByTestId('page-10'));
    await testObj.isReady();
    await testObj.wait();

    await checkPagesLength();
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test27',
      'test28',
      'test29',
    ]);
    expect(await getActivePage()).toHaveTextContent('10');
    expect(await getLeftItems()).toEqual('27');
    expect(await getRightItems()).toEqual('0');
  },
};
