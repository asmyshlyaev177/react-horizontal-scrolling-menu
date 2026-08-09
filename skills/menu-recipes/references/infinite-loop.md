# Infinite loop reference — react-horizontal-scrolling-menu 8.2.3

The complete clone-and-teleport recipe, verified against
`stories/InfiniteLoop/InfiniteLoop.source.tsx`. There is no `loop` prop; this
hook is the whole feature.

## Mechanism

Render `[tailClones, ...items, headClones]`. The clone zones are pixel-identical
to the rows they mirror, so when scrolling settles inside one, shifting
`scrollLeft` by exactly one loop length lands on an identical frame — the jump
is invisible. Everything else is bookkeeping around that one move.

Loop length is measured, never assumed: `offsetLeft` of the first right clone
minus `offsetLeft` of the first real item. That survives variable item widths,
margins and gaps without configuration.

## The hook

```tsx
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import { useDebounceCallback, useUnmount } from 'usehooks-ts';

// Two pages per side: the clone zone must cover a viewport (identical frames
// around a jump), with room to spare so a Next click from the page straddling
// the seam never clamps at the end of the row.
const CLONES_PER_SIDE = 6;

const leftCloneId = (id: string) => `${id}-lc`;
const rightCloneId = (id: string) => `${id}-rc`;

// Clones render exactly like their twins; a unique itemId is the only
// difference — title, selection and clicks all use the real id.
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

// Spread `menuProps` onto ScrollMenu, render `slides`, and call `normalize()`
// after moving scrollLeft by hand (e.g. inside a drag). `itemIds` are read
// once, on the first render.
function useInfiniteLoop(
  itemIds: string[],
  clonesPerSide: number = CLONES_PER_SIDE,
) {
  const [slides] = React.useState(() => getSlides(itemIds, clonesPerSide));

  // The `containerRef` prop receives the scroll container div itself.
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Seam markers come from the data — itemId can be anything.
  const firstRealId = slides[clonesPerSide].itemId;
  const firstRightCloneId = slides[slides.length - clonesPerSide].itemId;

  // Shift by one loop length when settled inside a clone zone. Pure geometry
  // and idempotent — visibility flags lag and must not gate it.
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
  const settle = useDebounceCallback(normalize, 150);
  useUnmount(() => settle.cancel());

  const hasScrollEnd = typeof window !== 'undefined' && 'onscrollend' in window;
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasScrollEnd) {
      return;
    }
    el.addEventListener('scrollend', normalize);
    return () => el.removeEventListener('scrollend', normalize);
  }, [normalize, hasScrollEnd]);

  // Start on the first real item, before first paint.
  React.useLayoutEffect(() => {
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(`[data-key='${firstRealId}']`);
    if (el && first) {
      el.scrollLeft = first.offsetLeft;
    }
  }, [firstRealId]);

  return {
    slides,
    normalize,
    menuProps: {
      containerRef,
      onScroll: hasScrollEnd ? undefined : () => settle(),
    },
  };
}
```

`useDebounceCallback`/`useUnmount` come from `usehooks-ts` in the story; any
debounce with a `.cancel()` works. The Safari branch is wired through the
menu's own `onScroll` prop rather than a second listener, so only one of the
two paths is ever active.

## Visibility across twins

An item is visible when any of its twins is. The raw per-element flag goes
stale for a frame right after a teleport and would blink whatever it drives.

```tsx
function useLoopItemVisible(realId: string) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const realVisible = visibility.useIsVisible(realId, true);
  const leftTwinVisible = visibility.useIsVisible(leftCloneId(realId), false);
  const rightTwinVisible = visibility.useIsVisible(rightCloneId(realId), false);
  return realVisible || leftTwinVisible || rightTwinVisible;
}
```

The `defaultValue` split matters: `true` for the real item (it is on screen
before the observer reports), `false` for the twins (they are not).

## Arrows

Always enabled. `useLeftArrowVisible`/`useRightArrowVisible` track the
outermost items — here those are clones, so the stock hooks flash the arrows
disabled every time the seam comes into view.

```tsx
function LoopPrev() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  return <button onClick={() => api.scrollPrev()}>Prev</button>;
}
function LoopNext() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  return <button onClick={() => api.scrollNext()}>Next</button>;
}
```

## Drag

`normalize()` inside the drag handler keeps the seam crossable mid-gesture —
without it a drag can run off the end of the clone zone before `scrollend`
ever fires.

```tsx
const handleDrag =
  ({ scrollContainer }: publicApiType) =>
  (ev: React.MouseEvent) =>
    dragManager.dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
        loop.normalize();
      }
    });
```

Selection is keyed by `realId`, so clicking a clone selects its twin. See
`skills/menu-interactions/SKILL.md` for the `DragDealer` class and the
mouse-prop factory shapes.

## Constraints

- `itemId` must be unique per rendered child; clones get the `-lc`/`-rc`
  suffix. `key` follows `itemId`, everything user-facing follows `realId`.
- `clonesPerSide` must cover at least one viewport width. Too few clones and
  the teleport lands mid-gap, or a Next click clamps at the row end.
- The item list is snapshot on first render (`useState` initializer). A loop
  over a list that grows needs a `key` remount, not an in-place update.
- `normalize` must stay idempotent and geometry-only. Gating it on
  `isItemVisible`/`useIsVisible` reintroduces the one-frame lag it exists to
  hide.
