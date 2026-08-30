---
name: 'menu-migration'
description: >
  Detect and upgrade pre-v8 react-horizontal-scrolling-menu patterns that
  agents trained on older data still generate: destructured
  visibleElements/isFirstItemVisible/isLastItemVisible/initComplete (removed
  v6), Separator items, separatorClassName and getPrevItem/getNextItem
  (removed v7), the Arrows prop (removed v3), missing dist/styles.css import
  (required since v4), CJS require of the ESM-only package (v5),
  transitionDuration/transitionBehavior silently ignored after the v8
  noPolyfill flip, the misleading 8.1.0 changelog BREAKING block, and
  >=8.2.2 for TypeScript moduleResolution node16/bundler. Load when
  upgrading versions or whenever generated or reviewed code uses any of
  those removed APIs.
metadata:
  type: lifecycle
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:CHANGELOG.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/index.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/createApi.ts'
---

# react-horizontal-scrolling-menu — Migration from older versions

Training data, tutorials and StackOverflow answers for this library are
dominated by v2–v5 APIs that no longer exist in v8. Every removal fails
silently or with an unhelpful runtime error — never a deprecation warning.
Identify which era a piece of code targets first, then apply the matching
rewrite. There are no codemods; each boundary is a small mechanical change.

## Setup

The migration target: canonical v8.2.3 usage that every old pattern below
converges on.

```bash
npm install react-horizontal-scrolling-menu@^8.2.3
```

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
  const visible = api.useIsVisible(itemId);
  return (
    <div style={{ width: '160px' }} data-visible={visible}>
      {title}
    </div>
  );
}
```

## Core Patterns

### Detect the era: version-to-pattern cheat sheet

Check the installed version (`npm ls react-horizontal-scrolling-menu`), then
scan the code for these tells. Any match means the code targets an older era
and needs the listed rewrite — even when the installed version is already 8.x.

| Tell in the code                                                                                                                  | Era it targets | v8.2.3 rewrite                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| `<ScrollMenu Arrows={...}>`                                                                                                       | pre-v3         | `LeftArrow`/`RightArrow` slots; extra content in `Header`/`Footer`                 |
| No `dist/styles.css` import anywhere                                                                                              | pre-v4         | `import 'react-horizontal-scrolling-menu/dist/styles.css'`                         |
| `require('react-horizontal-scrolling-menu')` in app code                                                                          | pre-v5         | ESM `import` — package is `"type": "module"` (Jest maps to `dist/index.cjs`)       |
| `visibleElements`, `visibleItems`, `initComplete`, or reactive `isFirstItemVisible`/`isLastItemVisible` destructured from context | pre-v6         | `useIsVisible`, `useLeftArrowVisible`/`useRightArrowVisible`, `items.getVisible()` |
| `Separator` items, `separatorClassName`, `getPrevItem`/`getNextItem`                                                              | pre-v7         | CSS `gap` for spacing; `getPrevElement`/`getNextElement`, `items.prev()`/`next()`  |
| Transition props expected to animate without `noPolyfill={false}`                                                                 | pre-v8         | add `noPolyfill={false}`, or drop the transition props and use native smooth       |
| Hand-rolled arrow disabled-state (`useIsVisible('first', true)` + a `menuVisible` latch)                                          | pre-8.1        | `useLeftArrowVisible()` / `useRightArrowVisible()` (added 8.1.0)                   |

Two changelog traps when confirming an era against `CHANGELOG.md`:

- The **8.1.0 entry's BREAKING CHANGES block is a squash artifact** replaying
  the entire v3–v8 history (styles.css split, ESM move, v6 removals, v7
  separator removal, the noPolyfill flip). None of that happened in 8.1.0 —
  the only genuinely new 8.1.0 API is the `useLeftArrowVisible` /
  `useRightArrowVisible` pair (CHANGELOG.md:29-100).
- **8.2.0 and 8.2.1 shipped a broken `exports` types order**; TypeScript with
  `moduleResolution: "node16"` or `"bundler"` resolves types only on >=8.2.2
  (CHANGELOG 8.2.2).

### v6 boundary: context data fields become hooks

The v6.0.0 Observer rewrite (#270) removed `visibleElements`,
`initComplete`, and the reactive `isFirstItemVisible`/`isLastItemVisible`
(plus the older aliases `visibleItems`, `visibleElementsWithSeparators`,
`visibleItemsWithoutSeparators`). Nearly every pre-2024 tutorial uses them.

```tsx
// pre-v6 — compiles in JS, dead on v8: undefined and non-reactive values
function OldLeftArrow() {
  const { isFirstItemVisible, initComplete, scrollPrev } =
    React.useContext(VisibilityContext);
  const disabled = !initComplete || isFirstItemVisible;
  return (
    <button disabled={disabled} onClick={() => scrollPrev()}>
      ←
    </button>
  );
}
```

```tsx
// v8
function LeftArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useLeftArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollPrev()}>
      ←
    </button>
  );
}
```

Field-by-field mapping:

| Removed (pre-v6)                    | v8 replacement                                                    |
| ----------------------------------- | ----------------------------------------------------------------- |
| `visibleElements` / `visibleItems`  | `api.items.getVisible().map(([id]) => id)` read inside callbacks  |
| `isFirstItemVisible` (was reactive) | `api.useIsVisible('first', true)` or `api.useLeftArrowVisible()`  |
| `isLastItemVisible` (was reactive)  | `api.useIsVisible('last', false)` or `api.useRightArrowVisible()` |
| `initComplete`                      | gone — gate on `api.items.getVisible().length` inside `onUpdate`  |

`useIsVisible(itemId, defaultValue = false)` subscribes to the item (also
`'first'`/`'last'`); the second argument is the first-paint/SSR value
(src/createApi.ts:31-63).

### v7 boundary: separators and prev/next items

v7.0.0 (#274) removed Separator elements, `separatorClassName`, and the
separator-aware `getPrevItem`/`getNextItem`.

```tsx
// pre-v7
const next = api.getNextItem();
api.scrollToItem(next, 'smooth', 'start');
```

```tsx
// v8 — same semantics: neighbors of the visible group
const next = api.getNextElement(); // item after the last visible one
api.scrollToItem(next, 'smooth', 'start');

const prev = api.getPrevElement(); // item before the first visible one
// arbitrary neighbors: api.items.prev(item) / api.items.next(item)
```

Item spacing moved to plain CSS on the scroll container:

```tsx
<ScrollMenu
  scrollContainerClassName="menu-row"
  LeftArrow={LeftArrow}
  RightArrow={RightArrow}
>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

```css
.menu-row {
  gap: 8px;
}
```

### v8 boundary: the noPolyfill flip and packaging

v8.0.0 flipped `noPolyfill` to `true` (src/index.tsx:183): scrolling now uses
native `element.scrollIntoView`, and `transitionDuration` (default 500),
`transitionBehavior`, and per-call `{ duration, boundary }` options only take
effect when the polyfill is explicitly re-enabled:

```tsx
// restore v5–v7 animated behavior after upgrading
<ScrollMenu noPolyfill={false} transitionDuration={800}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Keep the `noPolyfill` default for RTL menus — the polyfill has RTL bugs and
the two must not be combined.

Packaging facts for upgrades landing on 8.2.3:

- `"type": "module"` since v5. A CJS build ships at `dist/index.cjs` via the
  `require` export condition — that is what Jest `moduleNameMapper` points to;
  older Next.js needs `transpilePackages: ['react-horizontal-scrolling-menu']`.
- `./dist/styles.css` and `./styles.css` are both valid export paths for the
  stylesheet; the JS bundle never injects CSS (required since v4.0.0).
- Pin `>=8.2.2` (prefer `^8.2.3`) so the `types` condition resolves under
  `moduleResolution: "node16"`/`"bundler"`.

## Common Mistakes

### CRITICAL Destructured visibleElements / initComplete are gone since v6

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

`visibleElements` and `initComplete` were removed in the v6.0.0 Observer
rewrite, so on v8 they destructure to `undefined` with no warning and every
condition built on them is permanently falsy.

Source: CHANGELOG.md:220-228 (v6.0.0, #270); issue #282

### CRITICAL isFirstItemVisible / isLastItemVisible are not reactive

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

These two fields still exist on the context as live getters, but reading
them never subscribes the component, so a render using them does not update
on visibility change (on <= 8.3.1 they were additionally frozen at api
creation and stuck `false`). Reactive paths are the hooks or
`items.getVisible()` inside callbacks.

Source: src/createApi.ts (visibility getters); CHANGELOG v6.0.0

### CRITICAL Transition props silently ignored under default noPolyfill

Wrong:

```tsx
<ScrollMenu transitionDuration={1200}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu noPolyfill={false} transitionDuration={1200}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

`scrollToItem` forwards `duration`, `boundary` and custom-function behavior
only into the `smooth-scroll-into-view-if-needed` branch, and since v8.0.0
`noPolyfill` defaults to `true` (native `scrollIntoView`, which accepts none
of them) — so v5–v7 code keeps compiling after an upgrade while its animation
timing silently changes, and newly added transition props do nothing. Full
transition and RTL guidance: `skills/menu-transitions-rtl/SKILL.md`.

Source: src/helpers.tsx:72-77; src/index.tsx:183; CHANGELOG v8.0.0

### HIGH getPrevItem / getNextItem removed in v7

Wrong:

```tsx
const nextItem = api.getNextItem();
```

Correct:

```tsx
const nextItem = api.getNextElement();
```

v7.0.0 removed the separator-aware `getPrevItem`/`getNextItem` along with
Separator elements; on v8 those properties are `undefined` (a TypeError only
at call time), and the replacements are `getPrevElement`/`getNextElement`
for neighbors of the visible group or `api.items.prev()`/`next()` for
neighbors of any item.

Source: CHANGELOG.md:189-202 (v7.0.0, #274); src/createApi.ts:106-114

### MEDIUM Trusting the 8.1.0 BREAKING block as new breakage

Wrong:

```jsonc
// "8.1.0 removed visibleElements — pin 8.0.x to keep it"
{ "react-horizontal-scrolling-menu": "8.0.2" }
```

Correct:

```jsonc
// the 8.1.0 BREAKING block replays v3–v8 history (squash artifact);
// visibleElements was removed in 6.0.0 — migrate once, land on latest
{ "react-horizontal-scrolling-menu": "^8.2.3" }
```

The 8.1.0 changelog entry replays every historical breaking change from v3
through v8, so reading it as 8.1.0 breakage misattributes years-old removals
and drives pointless pins — the only new 8.1.0 API is the
`useLeftArrowVisible`/`useRightArrowVisible` pair (#292).

Source: CHANGELOG.md:29-100

### MEDIUM The v2-era Arrows wrapper prop is silently dropped

Wrong:

```tsx
<ScrollMenu Arrows={MyArrows}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} Header={MyTitle}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

The `Arrows` prop was removed in v3.0.0; an unknown prop is ignored without
warning, so the menu renders with no arrows at all — arrows are the
`LeftArrow`/`RightArrow` slots and extra surrounding content goes in
`Header`/`Footer`.

Source: CHANGELOG.md:396-404 (v3.0.0, #197)

### MEDIUM Separator or gap props for item spacing

Wrong:

```tsx
<ScrollMenu separatorClassName="gap" itemsGap={8}>
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu scrollContainerClassName="menu-row">
  {items.map((id) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

```css
.menu-row {
  gap: 8px;
}
```

Separator elements and `separatorClassName` were removed in v7 (and
`itemsGap` never existed), so these props are silently ignored — spacing is
plain CSS: `gap` on the scroll container via `scrollContainerClassName`, or
margin on your item component. See `skills/menu-setup/SKILL.md` for the full
CSS customization surface.

Source: CHANGELOG v7.0.0 (#274); maintainer interview

### MEDIUM TypeScript cannot find types on 8.2.0/8.2.1

Wrong:

```jsonc
{ "react-horizontal-scrolling-menu": "8.2.0" }
```

Correct:

```jsonc
{ "react-horizontal-scrolling-menu": "^8.2.3" }
```

8.2.0/8.2.1 listed the `types` condition in the wrong order inside the
`exports` map, so `moduleResolution: "node16"`/`"bundler"` fails with
"Cannot find module ... or its corresponding type declarations" even though
the runtime import works — fixed in 8.2.2 (`types` now first).

Source: CHANGELOG.md:10-15 (8.2.2); package.json exports field

## See also

- `skills/menu-visibility/SKILL.md` — the highest-impact removed APIs are the
  old visibility fields; migration lands on the v8 hooks (`useIsVisible`,
  `useLeftArrowVisible`/`useRightArrowVisible`, `items.getVisible()`).
- `skills/menu-transitions-rtl/SKILL.md` — shared failure mode: transition
  props are gated behind `noPolyfill={false}` since the v8 flip.
- `skills/menu-setup/SKILL.md` — shared failure mode: item spacing is CSS
  `gap`, not a separator prop.
