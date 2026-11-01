/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { makeLiveEditStory } from 'storybook-addon-code-editor';

import { ScrollMenu } from '../../src/index';
import { availableImports } from '../availableImports';
import { setupEditor } from '../setupEditor';
import { SizeWrapper } from '../SizeWrapper';
import Example from './MuiTabs.source';
// @ts-ignore
import ExampleRaw from './MuiTabs.source.tsx?raw';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/MuiTabs',
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

export const MuiTabs = {};

makeLiveEditStory(MuiTabs, {
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

const settleTimeout = 5000;

// The tabs carry no visibility debug text, so this play asserts through
// ARIA and scroll position instead of TestObj's card helpers.
export const Test = {
  tags: ['test-only'],
  play: async ({
    canvasElement: storyRoot,
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(storyRoot);

    const tabs = await canvas.findAllByRole('tab');
    expect(tabs.length).toBeGreaterThan(3);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');

    const scrollEl = storyRoot.querySelector(
      '.react-horizontal-scrolling-menu--scroll-container',
    ) as HTMLElement;
    expect(scrollEl).not.toBeNull();
    expect(scrollEl.scrollLeft).toBe(0);

    // DIAG-START
    const diagLog: string[] = [];
    const lastTabEl = tabs[tabs.length - 1];
    const diagRow = () => {
      const c = scrollEl.getBoundingClientRect();
      const t = lastTabEl.getBoundingClientRect();
      const ratio =
        Math.max(0, Math.min(t.right, c.right) - Math.max(t.left, c.left)) /
        t.width;
      const l = canvas.getByLabelText('Scroll tabs left') as HTMLButtonElement;
      const r = canvas.getByLabelText('Scroll tabs right') as HTMLButtonElement;
      return `sl=${scrollEl.scrollLeft} cw=${scrollEl.clientWidth} sw=${scrollEl.scrollWidth} last=${ratio.toFixed(3)} sel=${lastTabEl.getAttribute('aria-selected')} L=${l.disabled}/${getComputedStyle(l).opacity} R=${r.disabled}/${getComputedStyle(r).opacity}`;
    };
    let diagPrev = '';
    const diagLoop = () => {
      const row = diagRow();
      if (row !== diagPrev)
        diagLog.push(`${Math.round(performance.now())} ${row}`);
      diagPrev = row;
      requestAnimationFrame(diagLoop);
    };
    requestAnimationFrame(diagLoop);
    new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          diagLog.push(
            `${Math.round(performance.now())} IO ratio=${e.intersectionRatio.toFixed(3)} isect=${e.isIntersecting}`,
          ),
        ),
      { root: scrollEl, rootMargin: '5px', threshold: [0.05, 0.5, 0.75, 0.95] },
    ).observe(lastTabEl);
    // DIAG-END

    // A faded arrow must keep its box: if it left the layout, the strip
    // would resize mid-scroll and a smooth scroll would stop short of the end.
    const fadedLeftArrow = canvas.getByLabelText('Scroll tabs left');
    await waitFor(() =>
      expect(getComputedStyle(fadedLeftArrow).opacity).toBe('0'),
    );
    expect(fadedLeftArrow.getBoundingClientRect().width).toBeGreaterThan(0);

    // Selecting the last tab must move aria-selected and center it —
    // i.e. actually scroll the strip.
    const last = tabs[tabs.length - 1];
    diagLog.push(`${Math.round(performance.now())} CLICK`);
    await userEvent.click(last);
    await waitFor(
      () => {
        expect(last).toHaveAttribute('aria-selected', 'true');
        expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
        expect(scrollEl.scrollLeft).toBeGreaterThan(0);
      },
      { timeout: settleTimeout },
    );

    // At the far end the right arrow must fade out and the left fade in.
    await waitFor(
      () => {
        const leftArrow = canvas.getByLabelText('Scroll tabs left');
        const rightArrow = canvas.getByLabelText('Scroll tabs right');
        expect(
          getComputedStyle(rightArrow).opacity,
          '\n' + diagLog.join('\n') + '\nNOW ' + diagRow(),
        ).toBe('0');
        expect(getComputedStyle(leftArrow).opacity).toBe('1');
      },
      { timeout: settleTimeout },
    );
  },
};
