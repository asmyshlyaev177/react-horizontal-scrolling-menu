/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import {
  getScrollEl,
  getVisibleCards,
  getZone,
  inRealZone,
  sleep,
} from '../loopTestUtils';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { drag, TestObj } from '../test';
// @ts-ignore
import Example from './Autoplay.source';
import ExampleRaw from './Autoplay.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/Autoplay',
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

export const Autoplay = {};

makeLiveEditStory(Autoplay, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

// Fast ticks so the play test stays inside the runner's timeout; the live
// story keeps the source default.
const INTERVAL = 400;

export const Test = {
  tags: ['test-only'],
  args: { interval: INTERVAL },
  play: async ({ canvasElement: storyRoot }) => {
    const canvas = within(storyRoot);
    const testObj = new TestObj(canvas, {
      leftArrow: 'left-arrow',
      rightArrow: 'right-arrow',
    });
    await testObj.isReady();

    // Ticks only scroll forward; a big backward jump can only be the seam
    // teleport — seeing one proves autoplay wrapped around.
    let prevX = -1;
    let sawWrap = false;
    await waitFor(
      () => {
        const x = getScrollEl(storyRoot).scrollLeft;
        if (prevX >= 0 && x < prevX - 1000) {
          sawWrap = true;
        }
        prevX = x;
        expect(sawWrap).toBe(true);
      },
      { timeout: 15000 },
    );
    await inRealZone(storyRoot);

    // Pause removes the timer; once the in-flight animation and settle
    // finish, the row must freeze.
    await userEvent.click(canvas.getByTestId('autoplay-toggle'));
    await sleep(1500);
    await inRealZone(storyRoot);
    const frozen = getScrollEl(storyRoot).scrollLeft;
    await sleep(3 * INTERVAL);
    expect(getScrollEl(storyRoot).scrollLeft).toBe(frozen);

    // Resume starts a fresh timer.
    await userEvent.click(canvas.getByTestId('autoplay-toggle'));
    await waitFor(
      () => {
        expect(getScrollEl(storyRoot).scrollLeft).not.toBe(frozen);
      },
      { timeout: 5000 },
    );

    // Pause again so the drag is the only movement source.
    await userEvent.click(canvas.getByTestId('autoplay-toggle'));
    await sleep(1500);
    await inRealZone(storyRoot);

    // Drag moves by exactly the dragged distance — minus one loop length
    // if it crossed the seam and teleported mid-gesture.
    const before = getScrollEl(storyRoot).scrollLeft;
    const [dragFrom] = getVisibleCards(storyRoot);
    await drag(dragFrom, { delta: { x: -350, y: 0 } });
    await waitFor(
      () => {
        const el = getScrollEl(storyRoot);
        const moved = el.scrollLeft - before;
        const { loop } = getZone(el);
        const ok =
          Math.abs(moved - 350) <= 1 || Math.abs(moved - (350 - loop)) <= 1;
        expect(ok, `moved=${moved}`).toBe(true);
      },
      { timeout: 5000 },
    );
    await inRealZone(storyRoot);
  },
};
