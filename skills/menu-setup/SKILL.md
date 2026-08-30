---
name: 'menu-setup'
description: >
  Build a working react-horizontal-scrolling-menu: install, the mandatory
  'react-horizontal-scrolling-menu/dist/styles.css' import, ScrollMenu with a
  unique itemId per child, arrow components via VisibilityContext with
  useLeftArrowVisible/useRightArrowVisible, Header/Footer slots, and CSS
  customization (fixed item width, spacing via gap on the scroll container,
  hiding the scrollbar). Load when creating a category row, tab strip, chip
  filter, or any horizontal scrolling list, or when a menu renders vertically,
  arrows do nothing, or item visibility is not tracked.
metadata:
  type: lifecycle
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/index.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/helpers.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/styles.css'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/Simple/Simple.source.tsx'
---

# Menu Setup

## Setup

```bash
npm install react-horizontal-scrolling-menu
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
  const visible = api.useIsVisible(itemId, true);
  return (
    <div style={{ width: '160px' }} data-visible={visible}>
      {title}
    </div>
  );
}
```

Three contracts this relies on, none of which produce an error when violated:

- Every direct child of `ScrollMenu` needs a unique `itemId` prop (the React
  `key` is the fallback). Ids are `String()`-coerced.
- `styles.css` is a separate import — the JS bundle never injects CSS.
- Item width comes from your CSS, in fixed units. The menu measures nothing.

The arrow hooks are the canonical edge detection: `useLeftArrowVisible()` /
`useRightArrowVisible()` return `true` when the first/last item is visible —
use the return value directly as the arrow's `disabled` state, as above.
Despite the "Visible" in the name, this is a disabled-latch: it only updates
while the menu itself is on screen, so arrows do not flicker when the page
scrolls vertically past the menu (src/createApi.ts:65-89).

## Core Patterns

### Header and Footer slots

`Header` and `Footer` render full-width above/below the arrows+items row.
Like the arrows, they are rendered as bare elements with no props — read
state from `VisibilityContext`:

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function EndIndicator() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const atEnd = api.useIsVisible('last', false);
  return <span>{atEnd ? 'End of list' : 'Scroll for more'}</span>;
}

function Chip({ label }: { itemId: string; label: string }) {
  return <div style={{ width: '120px' }}>{label}</div>;
}

export function MenuWithChrome({ ids }: { ids: string[] }) {
  return (
    <ScrollMenu Header={<h2>Categories</h2>} Footer={EndIndicator}>
      {ids.map((id) => (
        <Chip itemId={id} key={id} label={id} />
      ))}
    </ScrollMenu>
  );
}
```

Both a component reference (`Footer={EndIndicator}`) and an element
(`Header={<h2>Categories</h2>}`) are accepted
(src/helpers.tsx:88-99 `getElementOrConstructor`). Read reactive state
through the context hooks (`useIsVisible`, the arrow hooks): a plain render
of `api.items.getVisible()` never updates, because visibility changes mutate
the ItemsMap without re-rendering the menu.

### The itemId contract — self-check uniqueness

`itemId` is read from each direct child's props (React `key` as fallback) and
`String()`-coerced (src/helpers.tsx:101-105). The internal `ItemsMap` is a
`Map` keyed by that string: duplicates overwrite each other, last one wins,
and the library never warns — visibility and `scrollToItem` then silently
target the wrong element. Pick a field that is unique per rendered item and
verify it yourself:

```tsx
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function ProductCard({ name }: { itemId: string; name: string }) {
  return <div style={{ width: '160px' }}>{name}</div>;
}

function ProductRow({
  products,
}: {
  products: { sku: string; name: string }[];
}) {
  const ids = products.map((p) => String(p.sku));
  if (process.env.NODE_ENV !== 'production') {
    console.assert(
      new Set(ids).size === ids.length,
      'ScrollMenu: duplicate itemId values — visibility tracking will break silently',
    );
  }
  return (
    <ScrollMenu>
      {products.map((p) => (
        <ProductCard itemId={p.sku} key={p.sku} name={p.name} />
      ))}
    </ScrollMenu>
  );
}
```

Each child is wrapped in a `div.react-horizontal-scrolling-menu--item` with
`data-key={itemId}` and `data-index` attributes (src/components/Item) — handy
for e2e selectors and `document.querySelector`.

## Styling

The menu ships structural CSS only; all visual customization is your CSS
against the shipped class names (src/constants.ts):

| Class                                                           | Element                       |
| --------------------------------------------------------------- | ----------------------------- |
| `react-horizontal-scrolling-menu--wrapper`                      | outer-most div (column flex)  |
| `react-horizontal-scrolling-menu--header`                       | Header slot                   |
| `react-horizontal-scrolling-menu--inner-wrapper`                | arrows + scroll container row |
| `react-horizontal-scrolling-menu--arrow-left` / `--arrow-right` | arrow slots                   |
| `react-horizontal-scrolling-menu--scroll-container`             | the scrolling flex row        |
| `react-horizontal-scrolling-menu--item`                         | wrapper around each child     |
| `react-horizontal-scrolling-menu--footer`                       | Footer slot                   |

The `itemClassName`, `scrollContainerClassName` and `wrapperClassName` props
append your own class next to the shipped one (src/index.tsx:117-128) — use
them to scope styles per menu instance.

The three customizations every real menu needs:

```css
/* menu.css */

/* 1. Fixed item width — always px/rem, never percent */
.card {
  width: 160px;
}

/* 2. Spacing between items: gap on the scroll container
      (or margin on your item component). There is NO gap/separator prop —
      separator elements were removed in v7. */
.react-horizontal-scrolling-menu--scroll-container {
  gap: 8px;
}

/* 3. Hide the native scrollbar */
.react-horizontal-scrolling-menu--scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* old Edge/IE */
}
.react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
```

```tsx
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './menu.css';
```

To scope the same rules to one menu, pass
`scrollContainerClassName="my-row"` and target `.my-row` instead of the
shipped class.

## Common Mistakes

### CRITICAL: styles.css import omitted, menu stacks vertically

Wrong:

```tsx
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
// no CSS import — items stack vertically, nothing scrolls
```

Correct:

```tsx
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
```

The JS bundle never injects CSS; without the stylesheet the flex scroll
container does not exist and items render as a vertical block.

Source: README.md Quick start; CHANGELOG v4.0.0/v4.0.1 (#231)

### CRITICAL: itemId missing or miscased on direct children

Wrong:

```tsx
<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  {items.map((it) => (
    <Card itemID={it.id} key={it.id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  {items.map((it) => (
    <Card itemId={it.id} key={it.id} />
  ))}
</ScrollMenu>
```

Every direct child needs a unique `itemId` prop (React `key` is the
fallback); without it items register under an empty id, colliding in the
ItemsMap, and arrows/visibility silently break — there is no runtime warning.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/205 (#185, #187, #194, #207); src/helpers.tsx:101-105 getItemId

### HIGH: renaming itemId to itemID to silence the React DOM warning

Wrong:

```tsx
// "fixing" the console warning:
<Card itemID={id} key={id} />
```

Correct:

```tsx
// keep itemId; don't spread it onto the DOM node inside Card
function Card({ itemId, ...rest }: { itemId: string; title: string }) {
  return <div>{rest.title}</div>;
}
```

When an item spreads props onto a DOM element React warns "Invalid DOM
property itemId. Did you mean itemID?" — the warning is expected and
harmless; renaming the prop breaks tracking entirely.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/196

### HIGH: duplicate itemId values silently collide

Wrong:

```tsx
{
  products.map((p) => <Card itemId={p.category} key={p.sku} />);
}
```

Correct:

```tsx
{
  products.map((p) => <Card itemId={p.sku} key={p.sku} />);
}
```

ItemsMap extends Map keyed by `String(itemId)`: duplicates overwrite each
other (last wins) with zero warnings, and visibility and `scrollToItem` then
target the wrong element — self-check uniqueness (see Core Patterns) because
the library never will.

Source: src/ItemsMap/ItemsMap.ts; maintainer interview

### HIGH: expecting arrow components to receive props

Wrong:

```tsx
<ScrollMenu LeftArrow={(api) => <Arrow onClick={api.scrollPrev} />}>
  {children}
</ScrollMenu>
```

Correct:

```tsx
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

`LeftArrow`/`RightArrow`/`Header`/`Footer` are rendered as `<Elem />` with no
props (`getElementOrConstructor`); arrows must read state from
`React.useContext(VisibilityContext)`.

Source: src/helpers.tsx:88-99 getElementOrConstructor

### MEDIUM: items without fixed width, or percent widths

Wrong:

```css
.card {
  width: 50%;
}
```

Correct:

```css
.card {
  width: 160px;
}
```

The menu measures nothing — item width comes from your CSS; percent widths
break the flex layout and oversized items are never counted visible.

Source: README.md Quick start; https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/288

### MEDIUM: looking for a separator or gap prop for item spacing

Wrong:

```tsx
<ScrollMenu separatorClassName="gap" itemsGap={8}>
  {children}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu scrollContainerClassName="menu-row">{children}</ScrollMenu>
```

```css
.menu-row {
  gap: 8px;
}
```

Separator elements were removed in v7; spacing is plain CSS — `gap` on the
scroll container (via `scrollContainerClassName` or the shipped class) or
margin on your item component.

Source: maintainer interview; CHANGELOG v7.0.0 (#274) — also covered in skills/menu-migration/SKILL.md

## Tensions

### HIGH Tension: trivial quick start vs total silence on misuse

The happy path is a few lines, but the library contains zero throws or
warnings — every contract violation (missing CSS import, missing/duplicate
`itemId`, passing a string id to `scrollToItem`) fails silently. Shipping the
quick start without self-checking the contracts produces a menu that renders
but does not work, with no error to debug from. Before declaring setup done,
verify: the `dist/styles.css` import exists, every child has a unique
string `itemId`, and arrows use the context hooks. For the visibility and
scrolling halves of this tension see skills/menu-visibility/SKILL.md and
skills/menu-scrolling/SKILL.md.

## See also

- skills/menu-visibility/SKILL.md — canonical arrows are visibility-driven;
  setup code quality depends on using the reactive hooks
  (`useLeftArrowVisible`/`useRightArrowVisible`/`useIsVisible`), not
  render reads of the non-reactive
  `isFirstItemVisible`/`isLastItemVisible` getters.
