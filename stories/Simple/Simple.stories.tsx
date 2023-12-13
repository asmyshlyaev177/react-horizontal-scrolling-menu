/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import type { queries } from '@storybook/testing-library';
import styled from 'styled-jss';
import { expect } from '@storybook/jest';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';

// @ts-ignore
import ExampleRaw from './Simple.source.tsx?raw';
import { SimpleExample as Example } from './Simple.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'ScrollMenu',
  component: Example,
  decorators: [
    (Story) => (
      <SizeWrapper>
        <Story />

        {/* TODO: description block */}
      </SizeWrapper>
    ),
  ],
};

const SizeWrapper = styled('div')({
  maxWidth: '650px',
  maxHeight: '400px',
});

export default meta;

export const Simple = createLiveEditStory({
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
    const testObj = new TestObj(canvas);
    await testObj.isReady();

    await testObj.arrowsVisible({ left: false, right: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test0',
      'test1',
      'test2',
    ]);

    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.arrowsVisible({ left: true, right: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test3',
      'test4',
      'test5',
    ]);

    await testObj.clickNext();
    await testObj.cardHidden('test5');
    await testObj.arrowsVisible({ left: true, right: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test6',
      'test7',
      'test8',
    ]);

    await testObj.clickNext();
    await testObj.cardHidden('test6');
    await testObj.arrowsVisible({ left: true, right: false });
    expect(await testObj.getVisibleCards()).toEqual([
      'test7',
      'test8',
      'test9',
    ]);

    await testObj.clickPrev();
    await testObj.cardHidden('test7');
    await testObj.arrowsVisible({ left: true, right: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test4',
      'test5',
      'test6',
    ]);

    await testObj.clickPrev();
    await testObj.cardHidden('test4');
    await testObj.arrowsVisible({ left: true, right: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test1',
      'test2',
      'test3',
    ]);

    await testObj.clickPrev();
    await testObj.cardHidden('test3');
    await testObj.arrowsVisible({ left: false, right: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  },
};

type Canvas = ReturnType<typeof within<typeof queries>>;

class TestObj {
  canvas: Canvas;

  constructor(canvas: Canvas) {
    this.canvas = canvas;
  }

  async isReady() {
    await waitFor(() =>
      expect(this.canvas.getAllByText('visible: false')[0]).toBeInTheDocument()
    );
  }

  async getVisibleCards() {
    const visibleCards = [
      ...this.canvas.getAllByText(
        (_content, element) =>
          !!(element as HTMLElement)?.innerText?.includes('visible: true'),
        { selector: '.card' }
      ),
    ].map((el) => el.innerText.split('\n')[0]);

    expect(visibleCards).toHaveLength(3);

    return visibleCards;
  }

  async cardHidden(card: string) {
    await waitFor(() =>
      expect(
        this.canvas.getAllByText(
          (_content, element) =>
            !!(element as HTMLElement)?.innerText?.includes(
              `${card}\nvisible: false`
            ),

          { selector: '.card' }
        )[0]
      ).toBeInTheDocument()
    );
  }

  async clickPrev() {
    await userEvent.click(this.canvas.getByTestId('left-arrow'));
  }

  async clickNext() {
    await userEvent.click(this.canvas.getByTestId('right-arrow'));
  }

  async arrowsVisible({ left, right }: { left: boolean; right: boolean }) {
    if (left) {
      expect(await this.canvas.getByTestId('left-arrow')).toBeVisible();
    } else {
      expect(await this.canvas.getByTestId('left-arrow')).not.toBeVisible();
    }

    if (right) {
      expect(await this.canvas.getByTestId('right-arrow')).toBeVisible();
    } else {
      expect(await this.canvas.getByTestId('right-arrow')).not.toBeVisible();
    }
  }
}
