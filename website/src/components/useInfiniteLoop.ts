import * as React from 'react';

const emptySubscribe = () => () => {};

// The loop from the Storybook recipe, made SSR-aware: the server renders
// only the real items at scrollLeft 0 — pixel-identical to what the
// client shows once the clones mount and the start jump runs, in the
// same pre-paint commit. Shared by the autoplay and infinite-loop demos.
export function useInfiniteLoop(itemIds: string[], clonesPerSide: number) {
  // Server snapshot false → real items only in the HTML; client snapshot
  // true → React re-renders with clones right after hydration, and the
  // layout effect below jumps before that commit paints.
  const withClones = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const slides = React.useMemo(
    () =>
      withClones
        ? getSlides(itemIds, clonesPerSide)
        : itemIds.map((id) => ({ itemId: id, realId: id })),
    [withClones, itemIds, clonesPerSide],
  );

  // Receives the scroll container div itself.
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Seam markers come from the data — itemId can be anything.
  const firstRealId = itemIds[0];
  const firstRightCloneId = rightCloneId(itemIds[0]);

  // Shift by one loop length when settled inside a clone zone. Pure
  // geometry and idempotent; a no-op until the clones exist.
  const normalize = React.useCallback(() => {
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(`[data-key='${firstRealId}']`);
    const firstClone = el?.querySelector<HTMLElement>(
      `[data-key='${firstRightCloneId}']`,
    );
    if (!el || !first || !firstClone) {
      return;
    }

    const realStart = first.offsetLeft;
    const loopLength = firstClone.offsetLeft - realStart;
    const x = el.scrollLeft;

    if (x >= realStart + loopLength) {
      el.scrollLeft = x - loopLength;
    } else if (x < realStart) {
      el.scrollLeft = x + loopLength;
    }
  }, [firstRealId, firstRightCloneId]);

  // 'scrollend' fires when scrolling truly ends; debounce covers Safari.
  const settleTimer = React.useRef(0);
  const settle = React.useCallback(() => {
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(normalize, 150);
  }, [normalize]);
  React.useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  const hasScrollEnd = typeof window !== 'undefined' && 'onscrollend' in window;
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasScrollEnd) {
      return;
    }
    el.addEventListener('scrollend', normalize);
    return () => el.removeEventListener('scrollend', normalize);
  }, [normalize, hasScrollEnd]);

  // Jump to the first real item in the same commit the clones appear in,
  // before paint — the row never shows the clone zone.
  useIsomorphicLayoutEffect(() => {
    if (!withClones) {
      return;
    }
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(`[data-key='${firstRealId}']`);
    if (el && first) {
      el.scrollLeft = first.offsetLeft;
    }
  }, [withClones, firstRealId]);

  return {
    slides,
    normalize,
    menuProps: {
      containerRef,
      onScroll: hasScrollEnd ? undefined : () => settle(),
    },
  };
}

const leftCloneId = (id: string) => `${id}-lc`;
const rightCloneId = (id: string) => `${id}-rc`;

// Clones render exactly like their twins; unique itemId is the only
// difference.
const getSlides = (ids: string[], clonesPerSide: number) => {
  const left = ids
    .slice(-clonesPerSide)
    .map((id) => ({ itemId: leftCloneId(id), realId: id }));
  const right = ids
    .slice(0, clonesPerSide)
    .map((id) => ({ itemId: rightCloneId(id), realId: id }));
  const real = ids.map((id) => ({ itemId: id, realId: id }));

  return [...left, ...real, ...right];
};

const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
