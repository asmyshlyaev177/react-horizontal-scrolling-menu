/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { leftArrowSelector, rightArrowSelector, TestObj } from '../test';
import Example from './Progress.source';
// @ts-ignore
import ExampleRaw from './Progress.source.tsx?raw';

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

export const Progress = {};

makeLiveEditStory(Progress, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = {
  tags: ['test-only'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector,
    });
    // The progress footer is driven by the same visibility state as the cards
    // but mounts and updates a beat behind them, so everything it renders has
    // to be polled rather than read once.
    const expectPages = async (count: number) =>
      waitFor(() =>
        expect(canvas.queryAllByTestId(/page-/)).toHaveLength(count),
      );

    const expectActivePage = async (page: string) =>
      waitFor(() => {
        const active = canvas
          .queryAllByTestId(/page-/)
          .filter((el) => el.className.includes('active'));
        expect(active[0]?.textContent).toEqual(page);
      });

    const expectItemCounts = async (left: string, right: string) =>
      waitFor(async () => {
        expect((await canvas.findByTestId('items-left')).textContent).toEqual(
          left,
        );
        expect((await canvas.findByTestId('items-right')).textContent).toEqual(
          right,
        );
      });

    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
    await expectItemCounts('0', '27');
    await expectPages(10);
    await expectActivePage('1');

    await userEvent.click(canvas.getByTestId('page-5'));

    await expectPages(10);
    await testObj.expectVisibleCards(['test12', 'test13', 'test14']);
    await expectActivePage('5');
    await expectItemCounts('12', '15');

    await userEvent.click(canvas.getByTestId('page-10'));

    await expectPages(10);
    await testObj.expectVisibleCards(['test27', 'test28', 'test29']);
    await expectActivePage('10');
    await expectItemCounts('27', '0');
  },
};
