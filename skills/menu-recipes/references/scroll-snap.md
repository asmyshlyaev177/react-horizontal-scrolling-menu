# Scroll-snap carousel reference — react-horizontal-scrolling-menu 8.3.2

A card carousel that lands every swipe on a card, with the neighbours fanned
out behind the centered one — the testimonial-carousel look. Verified against
`stories/ScrollSnap/ScrollSnap.source.tsx` (Storybook `Examples/ScrollSnap`;
site pages `/examples/scroll-snap` and `/testimonial-carousel`). There is no
`snap` prop: snapping and the fan are CSS, and the library supplies the
current card.

## Mechanism

- **Snap** is `scroll-snap-type: x mandatory` on the scroll container
  (`scrollContainerClassName`) and `scroll-snap-align: center` on every item
  wrapper (`itemClassName`). Touch, wheel and keyboard scrolling stay native
  and decelerate onto a card by themselves. Side padding equal to the space
  beside a centered card lets the first and last card reach the middle.
- **The fan** is a CSS scroll-driven animation on each card:
  `animation-timeline: view(inline)` makes the card's own position in the rail
  the clock. The keyframes span two card pitches either side of the center,
  so the middle card is flat and each neighbour turns one `--tilt` further,
  updated with every pixel of scroll. Nothing is measured, nothing re-renders.
- **The current card** comes from `onScroll`: the item whose center is
  closest to the rail's center, kept in state for the dots, the highlight and
  the arrows. Arrows and dots call `scrollToItem(el, 'smooth', 'center')`,
  which lands on a snap point by construction.

Support: Chromium and Safari 26 draw the fan; Firefox stable still keeps
scroll-driven animations behind a flag. Keep the whole `animation` rule under
`@supports (animation-timeline: view())` — with the timeline dropped, the
shorthand would run on the document timeline at 0s and park every card on
the last keyframe. Under the guard Firefox shows flat cards and everything
else works.

## The CSS

```css
.reviews {
  --card: min(280px, 80vw);
  --gap: 16px;
  --tilt: 8deg;
  --pitch: calc(var(--card) + var(--gap));
}
.reviews .react-horizontal-scrolling-menu--inner-wrapper {
  position: relative; /* arrows float over the rail, see below */
}
.reviews-rail {
  scroll-snap-type: x mandatory;
  gap: var(--gap);
  /* Side padding centers the edge cards; bottom room is for the fan. */
  padding: 16px calc(50% - var(--card) / 2) 40px;
  scrollbar-width: none;
  cursor: grab;
  user-select: none;
}
.review-slot {
  flex: none;
  scroll-snap-align: center;
}
.review-card {
  width: var(--card);
  height: 100%;
  transform-origin: 50% 100%;
}
@supports (animation-timeline: view()) {
  .review-card {
    animation: review-tilt linear both;
    animation-timeline: view(inline);
    animation-range: cover calc(50% - 2 * var(--pitch)) cover
      calc(50% + 2 * var(--pitch));
  }
}
@keyframes review-tilt {
  from {
    transform: translateY(24px) rotate(calc(2 * var(--tilt))) scale(0.88);
  }
  50% {
    transform: none;
  }
  to {
    transform: translateY(24px) rotate(calc(-2 * var(--tilt))) scale(0.88);
  }
}
@media (prefers-reduced-motion: reduce) {
  .review-card {
    animation: none;
  }
}
```

Arrows must float over the rail (`position: absolute` on the
`--arrow-left`/`--arrow-right` wrappers, inside the `position: relative`
inner wrapper), not sit beside it as flex siblings: the rail's `50%` padding
resolves against the flex parent, so a sibling arrow column shifts the edge
cards off center by its own width.

## The JavaScript

```tsx
const [active, setActive] = React.useState(0);
const [drag] = React.useState(() => new DragDealer()); // menu-interactions

// Index of the item whose center is closest to the rail's center.
function nearestIndex(api: publicApiType) {
  const rail = api.scrollContainer.current!;
  const middle = rail.scrollLeft + rail.clientWidth / 2;
  const gaps = ids.map((id) => {
    const el = api.getItemElementById(id) as HTMLElement;
    return Math.abs(el.offsetLeft + el.offsetWidth / 2 - middle);
  });
  return gaps.indexOf(Math.min(...gaps));
}

function scrollToIndex(api: publicApiType, index: number) {
  const el = ids[index] && api.getItemElementById(ids[index]);
  if (el) api.scrollToItem(el, 'smooth', 'center');
}

// Snap returns 150ms after the rail last moved, never mid-glide.
const restoreSnap = useDebounceCallback((api: publicApiType) => {
  const rail = api.scrollContainer.current;
  if (rail && !drag.clicked) rail.style.scrollSnapType = '';
}, 150);

<ScrollMenu
  scrollContainerClassName="reviews-rail"
  itemClassName="review-slot"
  LeftArrow={<Arrow target={active - 1} />}
  RightArrow={<Arrow target={active + 1} />}
  Footer={<Dots active={active} />}
  onScroll={(api) => {
    setActive(nearestIndex(api));
    restoreSnap(api);
  }}
  onMouseDown={(api) => (ev) => {
    api.scrollContainer.current!.style.scrollSnapType = 'none';
    drag.dragStart(ev);
  }}
  onMouseMove={(api) => (ev) =>
    drag.dragMove(ev, (delta) => {
      api.scrollContainer.current!.scrollLeft += delta;
    })
  }
  onMouseUp={(api) => () => {
    if (!drag.clicked) return;
    drag.dragStop();
    scrollToIndex(api, nearestIndex(api)); // glide to the closest card
    restoreSnap(api); // armed even when no glide is needed
  }}
  onMouseLeave={/* same as onMouseUp */}
>
  {ids.map(renderCard)}
</ScrollMenu>;
```

`Arrow` reads the api from `VisibilityContext`, is disabled when
`ids[target]` does not exist, and calls `scrollToIndex(api, target)`. `Dots`
renders one button per id with `aria-current` on the active one and a 24px
hit target (WCAG 2.5.8). Element form (`LeftArrow={<Arrow … />}`) is how the
parent's state reaches them.

## Drag on a snap container

A mandatory snap container snaps every programmatic `scrollLeft` write, so
the plain drag recipe re-snaps on each mousemove and stutters from card to
card. The sequence that works, measured in Chrome:

1. `mousedown`: set `scroll-snap-type: none` inline on the container.
2. `mousemove`: write `scrollLeft` as usual.
3. `mouseup`/`mouseleave`: `scrollToItem(nearest, 'smooth', 'center')`.
4. Only once scrolling has settled (debounced `onScroll`, 150ms): clear the
   inline style. Restoring snap while the glide is still running makes the
   browser jump to the snap point instantly instead of gliding there.

Touch needs none of this: the rail is a real scroll container and CSS snap
handles the fling.

## Composes with

- **Infinite loop** (`references/infinite-loop.md`): the teleport moves by
  one loop length, a whole number of snap points, so clones snap like their
  twins.
- **Autoplay**: a timer calling the same `scrollToItem(next, 'smooth',
'center')`, gated on `menuVisible` and paused as in the autoplay recipe.
- The knobs are `--card`, `--gap` and `--tilt`; every other length, the
  animation range included, derives from them.
