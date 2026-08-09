---
name: 'menu-visibility'
description: >
  Track which react-horizontal-scrolling-menu items are on screen:
  useIsVisible(itemId | 'first' | 'last', defaultValue),
  useLeftArrowVisible/useRightArrowVisible, the options prop (ratio,
  rootMargin, threshold), items.getVisible()/subscribe/unsubscribe, and the
  async IntersectionObserver truth model (items must be seen once, menuVisible
  gating, frozen isFirstItemVisible snapshots). Load when disabling arrows at
  the edges, styling items by visibility, building progress indicators, or
  debugging flickering or dead arrows.
metadata:
  type: core
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/createApi.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/hooks/useIntersectionObserver.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/settings.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/ItemsMap/ItemsMap.ts'
---

# Visibility Tracking

Visibility is IntersectionObserver-driven and **asynchronous**. An item has
visibility data only after the observer has reported it at least once — which
requires the menu itself to have been on screen. Nothing is true
synchronously: not at mount, not on the server, not in the same tick as a
click or a scroll call. Read visibility reactively (hooks) or inside
callbacks (`onUpdate`, event handlers) — never as a one-shot read during
setup.

Two structural facts drive everything below:

- All state lives in `api.items`, an `ItemsMap` (a `Map` of
  `String(itemId) → IOItem`), where `IOItem` is
  `{ index: string; key: string; entry: IntersectionObserverEntry; visible: boolean }`.
- The hooks live **on the context api object** (`api.useIsVisible(...)`,
  `api.useLeftArrowVisible()`). Unusual, but rules-of-hooks-safe: the api is
  built in a `React.useMemo` whose dependencies (`items`, transition props,
  `noPolyfill`, `menuVisible` ref) never change after mount, so the hook
  identities are stable. Call them unconditionally at the top of components
  rendered under `ScrollMenu` (arrows, header/footer, items).

## Setup

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`);

export function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useLeftArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollPrev()}>
      ←
    </button>
  );
}

function RightArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useRightArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollNext()}>
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = api.useIsVisible(itemId, true);
  return (
    <div style={{ width: '160px', opacity: isVisible ? 1 : 0.4 }}>{title}</div>
  );
}
```

## Core Patterns

### Edge-aware arrows with the built-in hooks

`useLeftArrowVisible()` / `useRightArrowVisible()` return the `disabled`
state for each arrow. They wrap `useIsVisible('first', true)` /
`useIsVisible('last', false)` **plus a latch**: the internal state only
updates while `menuVisible.current` is true, so arrows do not flicker when
the page scrolls the menu out of the viewport vertically
(`src/createApi.ts:65-89`). This is the canonical arrow pattern from
`stories/Simple` — prefer it over hand-rolling `useIsVisible` arrows.

```tsx
function LeftArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useLeftArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollPrev()}>
      Left
    </button>
  );
}
```

### Per-item visibility with useIsVisible

`useIsVisible(itemId | 'first' | 'last', defaultValue = false)` subscribes
to one item and re-renders on changes. `defaultValue` is the SSR /
first-paint state — what renders before the first IntersectionObserver batch
arrives client-side. The canonical arrow defaults (`('first', true)`,
`('last', false)`) paint a row scrolled to its start; for items above the
fold use `true` so they don't flash from hidden styling on hydration.

```tsx
function Card({ itemId, title }: { itemId: string; title: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = api.useIsVisible(itemId, true);
  return <div data-visible={isVisible}>{title}</div>;
}
```

The hook also reads the `ItemsMap` directly on mount, because the observer's
first batch can fire before the subscription effect runs
(`src/createApi.ts:37-60`) — you never need to handle that race yourself.

### Reacting to visibility changes: onUpdate + items.getVisible()

For progress dots, lazy loading, or analytics, read the visible set inside
the `onUpdate` callback — it fires after each visibility batch.
`items.getVisible()` returns `[itemId, IOItem]` pairs sorted by index.

```tsx
<ScrollMenu
  onUpdate={(api: publicApiType) => {
    const visibleIds = api.items.getVisible().map(([id]) => id);
    console.log('visible now:', visibleIds);
  }}
>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

For a single item outside the menu tree, subscribe on the `items` instance —
keys are an `itemId` or `'first'`, `'last'`, `'onInit'`, `'onUpdate'`.
`subscribe` and `unsubscribe` both take `(key, callback)` and cleanup must
pass the same callback instance (`src/ItemsMap/ItemsMap.ts:15-21`).

### Tuning the observer: the options prop

Defaults from `src/settings.ts`:
`{ ratio: 0.9, rootMargin: '5px', threshold: [0.05, 0.5, 0.75, 0.95] }`.
An item counts as visible when its `intersectionRatio >= ratio`. The prop is
partially merged over the defaults.

```tsx
<ScrollMenu options={{ ratio: 0.5, rootMargin: '5px' }}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Lower `ratio` when items are nearly as wide as the container. `root` is not
configurable — it is always the internal scroll container.

## Common Mistakes

### [CRITICAL] Reading isFirstItemVisible/isLastItemVisible expecting reactivity

Wrong:

```tsx
const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
return (
  <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    ←
  </button>
);
```

Correct:

```tsx
const api = React.useContext<publicApiType>(VisibilityContext);
const disabled = api.useLeftArrowVisible();
return (
  <button disabled={disabled} onClick={() => api.scrollPrev()}>
    ←
  </button>
);
```

These context fields are frozen first-render snapshots — computed while the
`ItemsMap` is still empty, inside an api memo that never recomputes — so they
stay `false` forever; the reactive paths are the hooks or
`items.getVisible()` read inside callbacks.

Source: src/createApi.ts:91-92; CHANGELOG v6.0.0

### [CRITICAL] Destructuring the removed v5-era visibility API from context

Wrong:

```tsx
const { isFirstItemVisible, visibleElements, initComplete } =
  React.useContext(VisibilityContext);
```

Correct:

```tsx
const api = React.useContext<publicApiType>(VisibilityContext);
const disabled = api.useLeftArrowVisible();
const visibleIds = api.items.getVisible().map(([id]) => id);
```

`visibleElements`, `initComplete` and reactive
`isFirstItemVisible`/`isLastItemVisible` were removed in v6 (Observer
rewrite); nearly every pre-2024 tutorial uses them, and in v8 they are
`undefined` or frozen snapshots.

Source: CHANGELOG v6.0.0 (#270); issue #282; see skills/menu-migration/SKILL.md

### [HIGH] Visibility logic assuming items are known before being seen

Wrong:

```tsx
<ScrollMenu
  onInit={(api: publicApiType) => {
    if (!api.isItemVisible('item-9')) {
      api.scrollToItem(api.getItemById('item-9'));
    }
  }}
>
  {cards}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu
  onUpdate={(api: publicApiType) => {
    if (api.items.getVisible().length && !api.isItemVisible('item-9')) {
      api.scrollToItem(api.getItemById('item-9'));
    }
  }}
>
  {cards}
</ScrollMenu>
```

Items must be observed on screen at least once before visibility data
exists; a menu below the fold at load has no valid data (dead or wrong
arrows, `isItemVisible` always false) until it is scrolled into view.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/286 (#289, #284)

### [HIGH] Arrow state flickering when the page scrolls vertically

Wrong:

```tsx
const api = React.useContext<publicApiType>(VisibilityContext);
const disabled = api.useIsVisible('first', true);
// flickers: items leave the viewport when the page scrolls past the menu
```

Correct:

```tsx
const api = React.useContext<publicApiType>(VisibilityContext);
const isFirst = api.useIsVisible('first', true);
const [disabled, setDisabled] = React.useState(isFirst);
React.useEffect(() => {
  if (api.menuVisible.current) {
    setDisabled(isFirst);
  }
}, [isFirst, api]);
```

When the page scrolls the menu off screen every item reports not-visible, so
naive visibility-driven arrows flicker; `useLeftArrowVisible`/
`useRightArrowVisible` already contain this `menuVisible`-gated latch —
hand-rolled `useIsVisible` arrows must add it (a
`!!api.items.getVisible().length` gate works too).

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/284 (#275, #147, #298); stories/Simple; src/createApi.ts:65-89

### [HIGH] Wrong useIsVisible defaultValue causes hydration flicker

Wrong:

```tsx
const disabled = api.useIsVisible('first'); // SSR paints enabled, flips on hydration
```

Correct:

```tsx
const disabled = api.useIsVisible('first', true);
```

`defaultValue` is the server-rendered/first-paint state (it defaults to
`false`); the canonical arrows use `('first', true)` / `('last', false)` so
SSR matches a row at its start — wrong defaults flip arrow state after
hydration.

Source: README.md SSR; maintainer interview; see skills/menu-testing-ssr/SKILL.md

### [MEDIUM] Items larger than the container never count as visible

Wrong:

```tsx
<ScrollMenu>{fullWidthSlides}</ScrollMenu>
// 100vw-wide slides with the default ratio 0.9 — never "visible"
```

Correct:

```tsx
<ScrollMenu options={{ ratio: 0.5 }}>{fullWidthSlides}</ScrollMenu>
```

An item is visible when `intersectionRatio >= options.ratio` (default 0.9);
an item bigger than the container can never reach that, so edge detection
and arrows break — lower the ratio for oversized items.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/287 (#279); src/settings.ts

### [MEDIUM] Passing options.root expecting a custom observer root

Wrong:

```tsx
<ScrollMenu options={{ root: document.querySelector('#viewport') }}>
  {cards}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu options={{ ratio: 0.5, rootMargin: '5px' }}>{cards}</ScrollMenu>
```

The `options` prop type accepts `IntersectionObserverInit`, but `root` is
always overridden with the internal scroll container — a custom root is
silently ignored.

Source: src/hooks/useIntersectionObserver.ts:42

### [MEDIUM] items.subscribe without matching unsubscribe cleanup

Wrong:

```tsx
React.useEffect(() => {
  api.items.subscribe('item-5', (item) => setVisible(!!item?.visible));
}, [api]);
```

Correct:

```tsx
React.useEffect(() => {
  const cb = (item?: { visible: boolean }) => setVisible(!!item?.visible);
  api.items.subscribe('item-5', cb);
  return () => api.items.unsubscribe('item-5', cb);
}, [api]);
```

`subscribe`/`unsubscribe` both take `(key, fn)` and require the same
callback instance — subscribing without cleanup (or unsubscribing a fresh
closure, or omitting the key) leaks subscribers across renders.

Source: README.md items class instance; src/ItemsMap/ItemsMap.ts:15-21; src/Observer/Observer.ts:19-26

## Tensions

### HIGH Tension: trivial quick start vs total silence on misuse

The library contains zero throws or warnings — every visibility contract
violation (missing/duplicate `itemId`, reading frozen snapshots, off-screen
menus) fails silently with no error to debug from. Self-check the contracts
instead of waiting for the console. Setup-side contracts:
skills/menu-setup/SKILL.md; scrolling-side: skills/menu-scrolling/SKILL.md.

### HIGH Tension: imperative convenience vs reactive truth

The api object mixes live methods, reactive hooks, frozen snapshots
(`isFirstItemVisible`) and mutable stores (`items`, `apiRef`). Imperative
reads are convenient but stale; hooks are correct but bound by rules of
hooks. Read data via hooks (or `getVisible()` inside callbacks), fire
methods imperatively. Imperative side: skills/menu-scrolling/SKILL.md.

### HIGH Tension: SSR first paint vs async browser truth

The server paints `defaultValue` guesses; real visibility exists only after
IntersectionObserver fires client-side — until then nothing about the menu
is true. Never read visibility at mount and never assert it synchronously in
tests (poll instead). Details: skills/menu-testing-ssr/SKILL.md.

## See also

- skills/menu-setup/SKILL.md — canonical arrows are visibility-driven; setup
  quality depends on the reactive hooks
- skills/menu-scrolling/SKILL.md — paging math consumes
  `items.getVisible()`; programmatic scroll gating uses `menuVisible`
- skills/menu-testing-ssr/SKILL.md — hydration first paint is controlled by
  `useIsVisible` defaultValue; test assertions must respect the async
  visibility model
- skills/menu-migration/SKILL.md — the highest-impact removed APIs are the
  old visibility fields; migration lands on the v8 hooks
