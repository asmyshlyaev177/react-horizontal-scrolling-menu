---
name: 'menu-recipes'
description: >
  Recipes composed on the react-horizontal-scrolling-menu public API — NOT
  props: autoplay (setInterval + scrollNext gated on menuVisible), infinite
  loop/carousel (clone head/tail + scrollLeft teleport at seams), center on
  click (scrollToItem 'center'), save/restore scroll position (onUpdate,
  onInit, scrollContainer), load-more with a loader item (items.last()?.visible
  in onUpdate), one item per scroll (getPrevElement/getNextElement), snap to
  a card (CSS scroll-snap on scrollContainerClassName/itemClassName, current
  card from onScroll, drag with snap switched off), hiding arrows, multiple
  menus, tab switching. Load when asked for autoplay, looping, snapping,
  a testimonial/card carousel, infinite scroll, or any feature missing from
  the props table — inventing an autoplay/loop/snap prop generates dead code.
metadata:
  type: core
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.3.2'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/Autoplay/Autoplay.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/InfiniteLoop/InfiniteLoop.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/CenterOnClick/CenterOnClick.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/SaveRestorePosition/Position.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/AddItems/AddItems.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/OneItemScroll/OneItemScroll.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/ScrollSnap/ScrollSnap.source.tsx'
---

# react-horizontal-scrolling-menu — Recipes

No autoplay, loop, or snap props exist, by design (README "What it does —
and doesn't"). Each feature below is a ~60-line recipe on the public API;
snapping to a card is CSS scroll-snap, not physics. Generate the recipe,
never a prop.

Every recipe is also a live-editable Storybook story — URLs and source paths
in `references/stories.md`.

## Setup

Shared base every pattern below builds on (scrollbar hiding and item spacing
are plain CSS — see `skills/menu-setup/SKILL.md`):

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ids = Array.from({ length: 10 }, (_, i) => `item-${i}`);

function LeftArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useLeftArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollPrev()}>
      Prev
    </button>
  );
}
function RightArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useRightArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollNext()}>
      Next
    </button>
  );
}
function Card({ itemId, title }: { itemId: string; title: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const visible = api.useIsVisible(itemId, true);
  return <div style={{ width: 160, opacity: visible ? 1 : 0.5 }}>{title}</div>;
}
// Children below are written as ids.map(renderCard) to keep recipes short.
const renderCard = (id: string) => <Card itemId={id} key={id} title={id} />;
```

## Core Patterns

### Autoplay: interval calling scrollNext, gated on menu visibility

```tsx
export function AutoplayMenu({ interval = 3000 }: { interval?: number }) {
  const apiRef = React.useRef<publicApiType | null>(null);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      const api = apiRef.current;
      // Off-screen scrollNext drags the page; a hidden tab freezes IO.
      if (!api?.menuVisible.current || document.visibilityState !== 'visible')
        return;
      api.scrollNext();
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, interval]);
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} apiRef={apiRef}>
        {ids.map(renderCard)}
      </ScrollMenu>
    </div>
  );
}
```

The full story also pauses on touch/focus, stays off under
`prefers-reduced-motion` (WCAG 2.2.2), and layers this timer on the
infinite-loop hook below so playback never hits the end of the row.

### Infinite loop: clone head/tail, teleport scrollLeft at the seams

Render `[tailClones, ...items, headClones]`; when scrolling settles inside a
clone zone, shift `scrollLeft` by one loop length — clone zones are
pixel-identical, so the jump is invisible.

```tsx
export function LoopMenu() {
  const loop = useInfiniteLoop(ids); // references/infinite-loop.md
  return (
    <ScrollMenu {...loop.menuProps} LeftArrow={LoopPrev} RightArrow={LoopNext}>
      {loop.slides.map(({ itemId, realId }) => (
        // itemId must stay unique (clone suffix); display/selection use realId
        <Card itemId={itemId} key={itemId} title={realId} />
      ))}
    </ScrollMenu>
  );
}
```

Four parts of the hook are load-bearing, and each one is a bug if dropped:

- clone zones at least a viewport wide per side (`CLONES_PER_SIDE = 6`), or a
  Next click from the page straddling the seam clamps at the row end
- the teleport is pure `offsetLeft` geometry, idempotent, and must not be
  gated on visibility flags — they lag a frame behind a teleport
- arrows always enabled: `useLeftArrowVisible`/`useRightArrowVisible` track
  the outermost items, which here are clones, so they flash at the seam
- `useIsVisible` OR'd across an item and both clone twins, same lag

`normalize()` also has to run after any manual `scrollLeft` write (a drag),
not just on `scrollend`.

### Center the clicked item

Items read the api from `VisibilityContext` — no `apiRef` needed inside the
menu. `scrollToItem` takes an element or item object, never an id string.

```tsx
function CenterCard({
  itemId,
  selected,
  onSelect,
}: {
  itemId: string;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const handleClick = () => {
    onSelect(itemId);
    const el = api.getItemElementById(itemId);
    if (el) api.scrollToItem(el, 'smooth', 'center');
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(ev) => ev.code === 'Enter' && handleClick()}
      style={{ width: 160, background: selected ? 'palegreen' : 'white' }}
    >
      {itemId}
    </div>
  );
}
```

Render `CenterCard` where Setup renders `Card`, holding the selected id in the
parent — the menu itself needs no extra props.

### Save and restore scroll position

Save `scrollContainer.current.scrollLeft` in `onUpdate` (fires after scroll
settles — `onScroll` fires mid-animation), restore it in `onInit`.

```tsx
export function RestoredMenu() {
  // Also set window.history.scrollRestoration = 'manual' once (an effect),
  // so the browser doesn't fight the restore on reload/back navigation.
  const save = (api: publicApiType) =>
    sessionStorage.setItem(
      'menu-pos',
      String(api.scrollContainer.current?.scrollLeft ?? 0),
    );

  const restore = (api: publicApiType) => {
    const node = api.scrollContainer.current;
    if (node) node.scrollLeft = +(sessionStorage.getItem('menu-pos') ?? 0);
  };
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onUpdate={save}
      onInit={restore}
    >
      {ids.map(renderCard)}
    </ScrollMenu>
  );
}
```

### Load more when the end comes into view

Give the loader its own `itemId` as the last child; trigger fetching from
`onUpdate` when the last item becomes visible.

```tsx
const Loader = ({ itemId }: { itemId: string }) => (
  <div style={{ width: 160 }}>Loading…</div>
);

export function LoadMoreMenu() {
  const [items, setItems] = React.useState(ids);
  const [loading, setLoading] = React.useState(false);

  const fetchMore = async () => {
    setLoading(true);
    const next = await fetchPage(items.length); // your API
    setItems((cur) => [...cur, ...next]);
    setLoading(false);
  };
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onUpdate={(api) => {
        if (api.items.last()?.visible && !loading) fetchMore();
      }}
    >
      {items.map(renderCard)}
      {loading && <Loader itemId="loader" key="loader" />}
    </ScrollMenu>
  );
}
```

### One item per scroll

`scrollNext`/`scrollPrev` page a full group of visible items;
`getPrevElement()`/`getNextElement()` return the single item adjacent to the
visible window.

```tsx
function OneRightArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const onClick = () => api.scrollToItem(api.getNextElement(), 'smooth', 'end');
  return (
    <button disabled={api.useRightArrowVisible()} onClick={onClick}>
      Next
    </button>
  );
}
// OneLeftArrow mirrors it: getPrevElement(), 'start', useLeftArrowVisible().
```

For custom group math, `slidingWindow(...).next()` and `getItemsPos(group)`
are exported too — see `skills/menu-scrolling/SKILL.md`.

### Snap to a card: CSS scroll-snap, current card from onScroll

Snapping is a stylesheet, not a prop: `scroll-snap-type: x mandatory` on
the rail (`scrollContainerClassName`), `scroll-snap-align: center` on every
item (`itemClassName`), side padding of `calc(50% - card / 2)` so the edge
cards can center. The library's part is the current card: `onScroll` picks
the item whose center is closest to the rail's center (`offsetLeft` against
`scrollLeft`), and arrows and dots call `scrollToItem(el, 'smooth',
'center')` — a snap point by construction. The tilted fan of the neighbours
is a CSS scroll-driven animation, and a mouse drag needs snap switched off
for the gesture; the code for all three is in `references/scroll-snap.md`.

### Hiding arrows, arrows below the menu, multiple menus, tabs

- **No arrows:** `LeftArrow`/`RightArrow` are optional — omit them; the menu
  still scrolls natively (wheel, touch, drag recipes).
- **Arrows below the menu:** render both arrows from a `Footer` slot; it
  reads `VisibilityContext` like arrows do (`<ScrollMenu Footer={Arrows}>`).
- **Multiple menus per page:** each `ScrollMenu` is independent, but each
  must be seen on screen once before its visibility data is valid —
  below-the-fold menus show `defaultValue` states until scrolled into view.
- **Tab switching:** remount with `key={selectedTab}` — see Common Mistakes.

## Common Mistakes

### CRITICAL Inventing autoplay/loop/snap props

Wrong:

```tsx
<ScrollMenu autoplay autoplayInterval={3000} loop>
  {ids.map(renderCard)}
</ScrollMenu>
```

Correct:

```tsx
// Autoplay: a timer firing scrollNext(), gated on menuVisible — recipe above.
// Loop: the useInfiniteLoop clone-and-teleport hook — references/infinite-loop.md
// Snap: CSS scroll-snap on the rail and items — recipe above.
```

These props do not exist and are silently ignored — the menu renders normally
and never plays, loops or snaps. Only spring physics and slide effects are
out of scope by design (use Embla or Swiper for those).

Source: README.md "What it does — and doesn't"; stories/Autoplay, stories/InfiniteLoop, stories/ScrollSnap

### HIGH Drag-to-scroll on a mandatory snap container stutters, then jumps

Wrong: the plain drag recipe — `scrollLeft += delta` on every mousemove.

Correct:

```tsx
// mousedown:  rail.style.scrollSnapType = 'none'
// mousemove:  rail.scrollLeft += delta
// mouseup:    scrollToItem(nearest card, 'smooth', 'center'), then
//             rail.style.scrollSnapType = '' once scrolling settles
```

A mandatory snap container snaps every programmatic `scrollLeft` write, and
restoring snap while the release glide runs jumps instead of gliding.

Source: stories/ScrollSnap/ScrollSnap.source.tsx; references/scroll-snap.md

### HIGH Autoplay interval scrolls the page to the menu

Wrong:

```tsx
setInterval(() => apiRef.current?.scrollNext(), 3000);
```

Correct:

```tsx
setInterval(() => {
  if (apiRef.current?.menuVisible.current) apiRef.current.scrollNext();
}, 3000);
```

Scrolling is `scrollIntoView`-based, so `scrollNext` on an off-screen menu
scrolls ancestors too — the page keeps jumping back to the menu every tick.

Source: stories/Autoplay/Autoplay.source.tsx:56-66; issue #276

### HIGH Any programmatic scroll while the menu is off screen drags the page

Wrong:

```tsx
onInit={(api) => api.scrollToItem(api.getItemById('item-9'), 'smooth')}
// menu below the fold: the whole page scrolls to the menu on load
```

Correct:

```tsx
onUpdate={(api) => {
  if (api.items.getVisible().length && !api.isItemVisible('item-9')) {
    api.scrollToItem(api.getItemById('item-9'), 'smooth');
  }
}}
```

Same mechanism as autoplay above, for every recipe calling scroll methods
outside a user gesture — gate on `menuVisible.current` or `items.getVisible()`.

Source: issue #276 (#277, #174, #230); skills/menu-scrolling/SKILL.md

### HIGH getItemById right after adding an item returns undefined

Wrong:

```tsx
setItems([...items, newItem]);
apiRef.current.scrollToItem(apiRef.current.getItemById(newItem.id)); // undefined
```

Correct:

```tsx
// after the state update commits (effect or onUpdate callback):
apiRef.current.scrollToItem(apiRef.current.getItemElementById(newItem.id));
```

The internal ItemsMap lags children by one render; `getItemElementById`
queries the DOM by `data-key` and sees the new item immediately.

Source: issue #167; discussion #295; stories/AddItemAndScrollToIt

### MEDIUM Promising a seamless infinite loop without clones

Wrong:

```tsx
onUpdate={(api) => {
  if (api.items.last()?.visible) {
    api.scrollToItem(api.items.first(), 'smooth'); // visible rewind jump
  }
}}
```

Correct:

```tsx
// Seamless needs cloned head/tail items plus a scrollLeft teleport at the
// seams — the useInfiniteLoop hook from references/infinite-loop.md:
const loop = useInfiniteLoop(ids);
```

Without pixel-identical clone zones the only possible "loop" is an animated
scroll back to the first item — a visible jump, not a loop.

Source: issue #213; stories/InfiniteLoop/InfiniteLoop.source.tsx:94-113; stories/loopTestUtils.ts

### MEDIUM Tab switching reuses one menu with stale position and state

Wrong:

```tsx
<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  {tabs[selected].items.map(renderCard)}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu key={selected} LeftArrow={LeftArrow} RightArrow={RightArrow}>
  {tabs[selected].items.map(renderCard)}
</ScrollMenu>
```

Swapping the item set in place keeps the previous tab's scroll offset and visibility entries; `key={selected}` remounts the menu fresh per tab.

Source: discussion #294; issue #204

### MEDIUM Load-more from scroll-position math instead of a loader item

Wrong:

```tsx
onScroll={(api, ev) => {
  const el = ev.target as HTMLElement;
  if (el.scrollLeft > el.scrollWidth - 800) fetchMore();
}}
```

Correct:

```tsx
onUpdate={(api) => {
  if (api.items.last()?.visible && !loading) fetchMore();
}}
```

Pixel thresholds break with dynamic item widths and `onScroll` fires
mid-animation; the last item's visibility flag is layout-independent, and
`onUpdate` fires only after the scroll settles.

Source: stories/AddItems/AddItems.source.tsx:54-59; discussion #297

## See also

- `skills/menu-scrolling/SKILL.md` — the imperative API every recipe is
  built from (`scrollToItem`, `scrollNext`/`scrollPrev`, `apiRef`).
- `skills/menu-interactions/SKILL.md` — drag, wheel and body-scroll recipes;
  mouse/touch props are factories `(api) => (event) => void`.

## References

- [Infinite loop: the full hook, Safari fallback and drag integration](references/infinite-loop.md)
- [Scroll-snap carousel: the CSS, the fan, and drag with snap switched off](references/scroll-snap.md)
- [Live story map: URLs and source files per recipe](references/stories.md)
