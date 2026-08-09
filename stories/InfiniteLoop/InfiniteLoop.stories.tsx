/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, waitFor, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import {
  expectNoBlink,
  expectVisibleKeys,
  getScrollEl,
  getVisibleCards,
  getZone,
  inRealZone,
} from '../loopTestUtils';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { drag, TestObj } from '../test';
// @ts-ignore
import Example from './InfiniteLoop.source';
import ExampleRaw from './InfiniteLoop.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/InfiniteLoop',
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

export const InfiniteLoop = {};

makeLiveEditStory(InfiniteLoop, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

// Gates assert by item id: real ids after a seam crossing prove both the
// teleport and that the observer re-reported — clicking before that would
// act on the stale clone set.
export const Test = {
  tags: ['test-only'],
  play: async ({ canvasElement: storyRoot }) => {
    const canvas = within(storyRoot);
    const testObj = new TestObj(canvas, {
      leftArrow: 'left-arrow',
      rightArrow: 'right-arrow',
    });
    await testObj.isReady();

    // Layout effect put the row exactly on the first real item.
    await waitFor(
      () => {
        const el = getScrollEl(storyRoot);
        expect(el.scrollLeft).toBe(getZone(el).realStart);
      },
      { timeout: 5000 },
    );
    await expectVisibleKeys(storyRoot, ['test0', 'test1', 'test2'], 'init');

    // Backward across the seam and forward again. Settled cards must never
    // blink back to `visible: false` while the observer catches up with
    // the teleport.
    await expectNoBlink(storyRoot, async () => {
      await testObj.clickPrev();
      await expectVisibleKeys(
        storyRoot,
        ['test7', 'test8', 'test9'],
        'wrap-back',
      );
      await inRealZone(storyRoot);
    });

    await expectNoBlink(storyRoot, async () => {
      await testObj.clickNext();
      await expectVisibleKeys(
        storyRoot,
        ['test0', 'test1', 'test2'],
        'wrap-fwd',
      );
      await inRealZone(storyRoot);
    });

    // Full forward lap; the 9|0-1 page legitimately shows clones, and the
    // click after it must land page-aligned past the seam.
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test3', 'test4', 'test5'], 'lap1');
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test6', 'test7', 'test8'], 'lap2');
    await testObj.clickNext();
    await expectVisibleKeys(
      storyRoot,
      ['test9', 'test0-rc', 'test1-rc'],
      'straddle',
    );
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test2', 'test3', 'test4'], 'seam');
    await inRealZone(storyRoot);

    // Clone clicks select the real item — real card + its twin highlight.
    const [test1Card] = await testObj.getCards('test1');
    test1Card.click();
    await waitFor(
      async () => {
        expect(await testObj.getSelectedCardsKeys()).toEqual([
          'test1',
          'test1',
        ]);
      },
      { timeout: 5000 },
    );

    // Drag forward: increments are relative, 350px lands two cards over.
    const [dragFrom] = getVisibleCards(storyRoot);
    await drag(dragFrom, { delta: { x: -350, y: 0 } });
    await expectVisibleKeys(storyRoot, ['test4', 'test5', 'test6'], 'drag-fwd');
    await inRealZone(storyRoot);

    // Drag backward through the seam: normalize() runs inside the drag,
    // so the row teleports mid-gesture and keeps following the cursor.
    const [dragFrom2] = getVisibleCards(storyRoot);
    await drag(dragFrom2, { delta: { x: 900, y: 0 } });
    await expectVisibleKeys(
      storyRoot,
      ['test9', 'test0-rc', 'test1-rc'],
      'drag-back',
    );
    await inRealZone(storyRoot);
  },
};
