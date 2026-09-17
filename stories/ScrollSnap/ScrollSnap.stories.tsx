/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import { drag } from '../test';
import Example from './ScrollSnap.source';
// @ts-ignore
import ExampleRaw from './ScrollSnap.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/ScrollSnap',
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

export const ScrollSnap = {};

makeLiveEditStory(ScrollSnap, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

const settleTimeout = 5000;

/** `--tilt` in the source: one card away from the center turns this far. */
const TILT = 8;

const getRail = (root: HTMLElement) => {
  const rail = root.querySelector<HTMLElement>(
    '.react-horizontal-scrolling-menu--scroll-container',
  );
  if (!rail) {
    throw new Error('scroll container not found');
  }
  return rail;
};
const getSlots = (root: HTMLElement) => [
  ...root.querySelectorAll<HTMLElement>('.review-slot'),
];
const getCards = (root: HTMLElement) => [
  ...root.querySelectorAll<HTMLElement>('.review-card'),
];
const getDots = (root: HTMLElement) =>
  within(root).getAllByRole('button', { name: /^Review \d of \d$/ });

/** Rotation in degrees, read back from the computed transform matrix. */
const angleOf = (el: HTMLElement) => {
  const matrix = getComputedStyle(el).transform.match(/^matrix\(([^)]+)\)/);
  if (!matrix) {
    return 0;
  }
  const [a, b] = matrix[1].split(',').map(Number);
  return (Math.atan2(b, a) * 180) / Math.PI;
};

/** Distance from a slot's center to the rail's center, in px. Slots are
 *  never transformed, so their rects are the layout positions. */
const offCenter = (rail: HTMLElement, slot: HTMLElement) => {
  const r = rail.getBoundingClientRect();
  const s = slot.getBoundingClientRect();
  return s.left + s.width / 2 - (r.left + r.width / 2);
};

/** The fan is a scroll-driven animation, which Firefox still ships behind
 *  a flag; the source guards it with @supports, so there the cards are flat
 *  and only the geometry, the dots and the arrows are asserted. */
const hasScrollDrivenAnimations = () =>
  CSS.supports('animation-timeline: view()');

/** Polls until `index` is the centered card: in the middle, its dot the
 *  current one, and — where the platform draws the fan — flat, with its
 *  neighbours turned one --tilt outward. */
const expectCentered = (root: HTMLElement, index: number) =>
  waitFor(
    () => {
      const rail = getRail(root);
      const slots = getSlots(root);
      const cards = getCards(root);
      expect(Math.abs(offCenter(rail, slots[index]))).toBeLessThan(2);
      const current = getDots(root).map((dot) =>
        dot.getAttribute('aria-current'),
      );
      expect(current).toEqual(current.map((_, i) => String(i === index)));
      if (!hasScrollDrivenAnimations()) {
        return;
      }
      expect(Math.abs(angleOf(cards[index]))).toBeLessThan(0.5);
      if (cards[index - 1]) {
        expect(angleOf(cards[index - 1])).toBeCloseTo(-TILT, 0);
      }
      if (cards[index + 1]) {
        expect(angleOf(cards[index + 1])).toBeCloseTo(TILT, 0);
      }
    },
    { timeout: settleTimeout },
  );

/** Snapping is handed back to CSS once a drag's glide has settled. */
const expectSnapRestored = (root: HTMLElement) =>
  waitFor(() => expect(getRail(root).style.scrollSnapType).toBe(''), {
    timeout: settleTimeout,
  });

// The cards carry no visibility debug text, so this play asserts through
// geometry, computed transforms and ARIA instead of TestObj's helpers.
export const Test = {
  tags: ['test-only'],
  play: async ({
    canvasElement: storyRoot,
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(storyRoot);
    const last = getDots(storyRoot).length - 1;

    // Opens on the first card, centered by the rail's side padding.
    await expectCentered(storyRoot, 0);
    expect(canvas.getByTestId('left-arrow')).toBeDisabled();
    expect(canvas.getByTestId('right-arrow')).toBeEnabled();

    // Arrows step one card, not one page.
    await userEvent.click(canvas.getByTestId('right-arrow'));
    await expectCentered(storyRoot, 1);
    expect(canvas.getByTestId('left-arrow')).toBeEnabled();

    // A dot scrolls straight to its card; the far end disables the arrow.
    await userEvent.click(getDots(storyRoot)[last]);
    await expectCentered(storyRoot, last);
    expect(canvas.getByTestId('right-arrow')).toBeDisabled();

    // Drag back six tenths of a pitch and release between two cards: the
    // rail glides to the closer one, then hands snapping back to CSS.
    const [first, second] = getSlots(storyRoot);
    const pitch = second.offsetLeft - first.offsetLeft;
    await drag(getCards(storyRoot)[last], {
      delta: { x: Math.round(pitch * 0.6), y: 0 },
    });
    await expectCentered(storyRoot, last - 1);
    await expectSnapRestored(storyRoot);
    expect(canvas.getByTestId('right-arrow')).toBeEnabled();

    // A nudge short of half a pitch snaps back to the same card.
    await drag(getCards(storyRoot)[last - 1], { delta: { x: -40, y: 0 } });
    await expectCentered(storyRoot, last - 1);
    await expectSnapRestored(storyRoot);
  },
};
