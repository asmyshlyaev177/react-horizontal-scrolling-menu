import { expect, waitFor } from 'storybook/test';

// Helpers for the InfiniteLoop/Autoplay play tests. Clones render
// pixel-identical to their twins, so only item ids and scrollLeft can
// prove a seam teleport ran. `storyRoot` is the story's root DOM element
// (Storybook's `canvasElement`).

export const getScrollEl = (storyRoot: HTMLElement) => {
  const el = storyRoot.querySelector<HTMLElement>(
    '.react-horizontal-scrolling-menu--scroll-container',
  );
  if (!el) {
    throw new Error('scroll container not found');
  }
  return el;
};

/** Left edge of the real items and the loop length, both in px. */
export const getZone = (el: HTMLElement) => {
  const first = el.querySelector<HTMLElement>("[data-key='test0']");
  const firstClone = el.querySelector<HTMLElement>("[data-key='test0-rc']");
  if (!first || !firstClone) {
    throw new Error('marker items not found');
  }
  const realStart = first.offsetLeft;
  return { realStart, loop: firstClone.offsetLeft - realStart };
};

/** Polls until scrollLeft sits inside the real-items zone, i.e. any
 * pending seam teleport has run. */
export const inRealZone = (storyRoot: HTMLElement) =>
  waitFor(
    () => {
      const el = getScrollEl(storyRoot);
      const { realStart, loop } = getZone(el);
      expect(el.scrollLeft).toBeGreaterThanOrEqual(realStart);
      expect(el.scrollLeft).toBeLessThan(realStart + loop);
    },
    { timeout: 5000 },
  );

/** Cards whose own element the observer reports visible (`data-visible`).
 * The displayed flag is a union over twins and also covers off-screen
 * clones, so it can't identify which element is actually on screen. */
export const getVisibleCards = (storyRoot: HTMLElement) =>
  [...storyRoot.querySelectorAll<HTMLElement>('.card')].filter(
    (card) => card.dataset.visible === 'true',
  );

/** Polls until exactly these cards, by item id (`data-cy`), report
 * visible. Ids distinguish clones from twins, so passing also proves the
 * IntersectionObserver re-reported after a teleport. */
export const expectVisibleKeys = (
  storyRoot: HTMLElement,
  keys: string[],
  label = '',
) =>
  waitFor(
    () => {
      const el = getScrollEl(storyRoot);
      const visible = getVisibleCards(storyRoot).map((card) => card.dataset.cy);
      expect(visible, `${label} scrollLeft=${el.scrollLeft}`).toEqual(keys);
    },
    { timeout: 5000 },
  );

/** Runs a seam-crossing `action` while sampling every frame. Once the
 * teleport lands on the final position, every settled on-screen card must
 * already display `visible: true` — the twin union covers the frame where
 * per-element flags are still stale, so the header must never blink. */
export const expectNoBlink = async (
  storyRoot: HTMLElement,
  action: () => Promise<void>,
) => {
  const el = getScrollEl(storyRoot);
  const samples: Array<{ x: number; hidden: string[] }> = [];
  let raf = 0;
  const tick = () => {
    const left = el.scrollLeft;
    const right = left + el.clientWidth;
    const hidden = [...storyRoot.querySelectorAll<HTMLElement>('.card')]
      .filter((card) => {
        const start = card.offsetLeft;
        const inView =
          Math.min(start + card.offsetWidth, right) - Math.max(start, left);
        return (
          inView / card.offsetWidth >= 0.95 &&
          !!card.textContent?.includes('visible: false')
        );
      })
      .map((card) => card.dataset.cy ?? '');
    samples.push({ x: left, hidden });
    raf = window.requestAnimationFrame(tick);
  };
  raf = window.requestAnimationFrame(tick);
  try {
    await action();
  } finally {
    window.cancelAnimationFrame(raf);
  }
  const finalX = el.scrollLeft;
  const blinked = samples.filter(
    (s) => Math.abs(s.x - finalX) < 1 && s.hidden.length > 0,
  );
  expect(blinked).toEqual([]);
};

export const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
