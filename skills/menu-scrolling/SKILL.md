---
name: 'menu-scrolling'
description: >
  Imperative scrolling for react-horizontal-scrolling-menu:
  scrollToItem(getItemById(id), behavior, inline, block), scrollNext/scrollPrev,
  apiRef for controlling the menu from outside (fire methods, never read data),
  getItemElementById/getItemElementByIndex for just-added items, and
  page-at-a-time navigation with slidingWindow + getItemsPos. Load when
  scrolling to an item on mount or selection, controlling the menu from
  outside, scrolling after adding items dynamically, or when scrollToItem
  silently does nothing or the whole page jumps to the menu.
metadata:
  type: core
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/createApi.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/helpers.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/slidingWindow/slidingWindow.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/getItemsPos.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/ScrollToItem/ScrollToItem.source.tsx'
---

# Imperative Scrolling

## Setup

Click an item to center it. The api object comes from `VisibilityContext`
inside the menu, from the `apiRef` prop outside it, and as the first argument
of every callback prop (`onInit`, `onUpdate`, `onWheel`, `onScroll`).

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ids = ['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

function Card({ itemId, title }: { itemId: string; title: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  return (
    <div
      role="button"
      tabIndex={0}
      style={{ width: '160px' }}
      onClick={() =>
        api.scrollToItem(api.getItemById(itemId), 'smooth', 'center')
      }
    >
      {title}
    </div>
  );
}

export function Menu() {
  return (
    <ScrollMenu>
      {ids.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}
```

The blessed form is `api.scrollToItem(api.getItemById(id), 'smooth', 'center')`
— a bare string id is a silent no-op (see Common Mistakes).
`getItemElementById(id)` / `getItemElementByIndex(index)` are the
advanced form: they query the DOM directly by `data-key` / `data-index`,
which makes them stale-proof for items added in the current render.

Defaults (src/helpers.tsx:60,68-69; src/createApi.ts:131-132,152-153):

| Method       | behavior   | inline    | block       |
| ------------ | ---------- | --------- | ----------- |
| scrollToItem | `'smooth'` | `'end'`   | `'nearest'` |
| scrollPrev   | `'smooth'` | `'end'`   | `'nearest'` |
| scrollNext   | `'smooth'` | `'start'` | `'nearest'` |

`behavior` accepts `'auto' | 'instant' | 'smooth'` and falls back to the
`transitionBehavior` prop when one is set. The optional trailing
`{ duration, boundary }` argument only takes effect with
`noPolyfill={false}` — the default native scroll ignores it.

## Core Patterns

### Control the menu from outside with apiRef

Pass a ref to `ScrollMenu`; the full context value is assigned to it after
mount. Use it to fire methods only — data read from it goes stale.

```tsx
import React from 'react';
import {
  ScrollMenu,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ids = ['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

function Card({ itemId, title }: { itemId: string; title: string }) {
  return <div style={{ width: '160px' }}>{title}</div>;
}

export function PageWithExternalControls() {
  const apiRef = React.useRef<publicApiType | null>(null);

  const centerItem = (id: string) => {
    const api = apiRef.current;
    if (api) api.scrollToItem(api.getItemById(id), 'smooth', 'center');
  };

  return (
    <div>
      <button onClick={() => apiRef.current?.scrollPrev()}>Prev</button>
      <button onClick={() => centerItem('item-3')}>Center item-3</button>
      <button onClick={() => apiRef.current?.scrollNext()}>Next</button>
      <ScrollMenu apiRef={apiRef}>
        {ids.map((id) => (
          <Card itemId={id} key={id} title={id} />
        ))}
      </ScrollMenu>
    </div>
  );
}
```

### Scroll to an item on mount

`onInit` fires once the menu has rendered and measured its items, so the api
is safe to use right away — no timers. Use `'auto'` (instant) so the initial
position does not animate.

```tsx
import React from 'react';
import {
  ScrollMenu,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ids = ['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

function Card({ itemId, title }: { itemId: string; title: string }) {
  return <div style={{ width: '160px' }}>{title}</div>;
}

export function MenuStartingAtItemFive() {
  const scrollToItemOnInit = (api: publicApiType) => {
    const el = api.getItemElementById('item-5');
    if (el) api.scrollToItem(el, 'auto', 'start');
  };

  return (
    <ScrollMenu onInit={scrollToItemOnInit}>
      {ids.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}
```

### Page-at-a-time navigation with slidingWindow and getItemsPos

`scrollNext`/`scrollPrev` already move one viewport-group. Use
`slidingWindow` + `getItemsPos` when you need to control which item of the
target group lands where — e.g. centering the next page:

```tsx
import {
  getItemsPos,
  slidingWindow,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';

function scrollOnePage(api: publicApiType, direction: 'prev' | 'next') {
  const visible = api.items.getVisible().map(([id]) => id);
  if (!visible.length) return;
  const group = slidingWindow(api.items.toItems(), visible)[direction]();
  const target = getItemsPos(group).center;
  api.scrollToItem(api.getItemById(target), 'smooth', 'center');
}
```

`slidingWindow(allIds, visibleIds)` returns `{ prev(), next() }` — each an
id array the size of the visible set, clamped at the row edges.
`getItemsPos(group)` returns `{ first, center, last }` ids of that group.

## Common Mistakes

### CRITICAL Passing an itemId string to scrollToItem

Wrong:

```tsx
api.scrollToItem('item-3', 'smooth', 'center'); // nothing scrolls
```

Correct:

```tsx
api.scrollToItem(api.getItemById('item-3'), 'smooth', 'center');
```

The JSDoc example shows a bare `'itemId'`, but scrollToItem unwraps
`target?.entry?.target` — a string has no `.entry` and no `.scrollIntoView`,
so the call is a silent no-op (the TS type `ItemOrElement` correctly rejects
strings; plain JS gets no error at all).

Source: src/createApi.ts:307-313 (JSDoc) vs src/helpers.tsx:59-64;
https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/157

### HIGH Reading data values from apiRef during render

Wrong:

```tsx
const atEnd = apiRef.current?.isLastItemVisible; // in render: never re-renders
```

Correct:

```tsx
const api = apiRef.current;
if (api) api.scrollToItem(api.getItemById('item-3'), 'smooth', 'center');
```

apiRef is a mutable object React cannot re-render on — values read from it
during render go stale. Inside event handlers and timers the visibility
getters read the live ItemsMap and are fine (on <= 8.3.1 they were frozen
even there — read `api.items.last()?.visible` instead). Reactive state in
components comes from the context hooks.

Source: README.md apiRef section;
https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/167

### HIGH getItemById right after adding an item returns undefined

Wrong:

```tsx
setItems((prev) => [...prev, newItem]);
const api = apiRef.current;
if (api) api.scrollToItem(api.getItemById(newItem.id)); // undefined target — no-op
```

Correct:

```tsx
// after the state update commits (effect or callback):
const api = apiRef.current;
const el = api?.getItemElementById(newItem.id);
if (api && el) api.scrollToItem(el, 'smooth', 'end');
```

The ItemsMap lags children by one render, so the map does not know a
just-appended item yet; `getItemElementById`/`getItemElementByIndex` query
the DOM by `data-key`/`data-index` and are stale-proof for this case.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/167;
discussion #295; stories/AddItemAndScrollToIt

### HIGH Scroll methods drag the whole page to the menu

Wrong:

```tsx
setInterval(() => apiRef.current?.scrollNext(), 3000); // page keeps jumping to the menu
```

Correct:

```tsx
setInterval(() => {
  if (apiRef.current?.menuVisible.current) apiRef.current.scrollNext();
}, 3000);
```

Scrolling is scrollIntoView-based, so scroll methods called while the menu
is off screen scroll ancestor containers too (the page jumps vertically to
the menu) — gate every programmatic scroll on `menuVisible.current`.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/276
(#277, #174, #230)

### MEDIUM Numeric itemIds compared as numbers

Wrong:

```tsx
<Card itemId={idx} key={idx} title={String(idx)} />;
// later:
api.getItemById(idx + 1);
```

Correct:

```tsx
<Card itemId={String(idx)} key={idx} title={String(idx)} />;
// later:
api.getItemById(String(idx + 1));
```

itemId is `String()`-coerced everywhere internally, so `getItemById(5)`
looks up `"5"` — mixing number and string ids causes missed lookups.

Source: CHANGELOG v3.1.1 (#207); src/helpers.tsx:102

### MEDIUM Calling apiRef.current methods before mount

Wrong:

```tsx
const apiRef = React.useRef<publicApiType | null>(null);
apiRef.current.scrollNext(); // during render — crash or no-op
```

Correct:

```tsx
const apiRef = React.useRef<publicApiType | null>(null);
React.useEffect(() => {
  apiRef.current?.scrollNext();
}, []);
```

apiRef is populated in a useEffect after mount (src/index.tsx:281-287);
before that `current` is null (or an empty object internally) — call methods
only from effects or event handlers, with optional chaining.

Source: src/index.tsx:148,281-287

### MEDIUM Reimplementing page math instead of slidingWindow/getItemsPos

Wrong:

```tsx
const all = api.items.toItems();
const firstVisible = api.items.getVisible()[0]?.[0];
const next = all[all.indexOf(firstVisible) + 3]; // breaks at edges, wrong in RTL
```

Correct:

```tsx
const visible = api.items.getVisible().map(([id]) => id);
const next = slidingWindow(api.items.toItems(), visible).next();
api.scrollToItem(api.getItemById(getItemsPos(next).center), 'smooth', 'center');
```

Page-at-a-time and centering math is shipped — `slidingWindow().prev()/.next()`
plus `getItemsPos()` handle row edges and RTL; hand-rolled index math misses
both.

Source: README.md Other helpers; stories/OneItemScroll

## Tensions

### HIGH Tension: Trivial quick start vs total silence on misuse

The library contains zero throws or warnings — every contract violation
(missing styles.css, missing/duplicate itemId, string to scrollToItem)
fails silently with no error to debug from. Self-check the contracts before
shipping. See skills/menu-setup/SKILL.md and skills/menu-visibility/SKILL.md.

### HIGH Tension: Imperative convenience vs reactive truth

The api object mixes live methods, reactive hooks, non-reactive getters
(`isFirstItemVisible`/`isLastItemVisible`) and mutable stores (`items`,
apiRef). Fire methods imperatively; in components rendered under ScrollMenu
read state through the hooks — render reads of the getters never update. See
skills/menu-visibility/SKILL.md.

### HIGH Tension: Native scroll correctness vs animation control

`noPolyfill` defaults to `true`, so the per-call `{ duration, boundary }`
ScrollOptions and the transition props are silently discarded;
`noPolyfill={false}` restores animation control but re-imports polyfill edge
bugs (RTL, page-level scrolling). See skills/menu-transitions-rtl/SKILL.md.

## See also

- skills/menu-visibility/SKILL.md — paging math consumes the visible set
  (`items.getVisible()`), and scroll gating uses `menuVisible`
- skills/menu-recipes/SKILL.md — autoplay, infinite loop, load-more and
  center-on-click are recipes built from these scroll methods
- skills/menu-transitions-rtl/SKILL.md — transition props and ScrollOptions
  modify how the scroll methods animate

## References

- [Full publicApiType member reference](references/api.md)
