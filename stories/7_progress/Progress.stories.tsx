/* eslint-disable max-statements */
/* eslint-disable sonarjs/no-duplicate-string */
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

    expect(await canvas.getByTestId('items-left').textContent).toEqual('0');
    expect(await canvas.getByTestId('items-right').textContent).toEqual('27');

    expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);
    await testObj.wait();
    const activePages = await canvas
      .queryAllByTestId(/page-/)
      .filter((el) => el.className.includes('active'));
    expect(activePages[0].textContent).toEqual('1');

    await userEvent.click(canvas.getByTestId('page-5'));
    await testObj.wait();
    await testObj.wait();

    expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test12',
      'test13',
      'test14',
    ]);

    const activePages1 = await canvas
      .queryAllByTestId(/page-/)
      .filter((el) => el.className.includes('active'));
    expect(activePages1[0].textContent).toEqual('5');

    expect(await canvas.getByTestId('items-left').textContent).toEqual('12');
    expect(await canvas.getByTestId('items-right').textContent).toEqual('15');

    await testObj.wait();
    await userEvent.click(canvas.getByTestId('page-10'));

    await testObj.wait();
    expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);
    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test27',
      'test28',
      'test29',
    ]);

    await testObj.wait(1200);
    const activePages2 = await canvas
      .queryAllByTestId(/page-/)
      .filter((el) => el.className.includes('active'));
    expect(activePages2[0].textContent).toEqual('10');

    expect(await canvas.getByTestId('items-left').textContent).toEqual('27');
    expect(await canvas.getByTestId('items-right').textContent).toEqual('0');
  },
};
