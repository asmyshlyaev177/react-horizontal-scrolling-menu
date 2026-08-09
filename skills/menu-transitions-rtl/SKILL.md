---
name: 'menu-transitions-rtl'
description: >
  Animate react-horizontal-scrolling-menu scrolling and build right-to-left
  menus: noPolyfill defaults to true since v8, so transitionDuration (default
  500), a custom-easing-function transitionBehavior, and per-call
  ScrollOptions { duration, boundary } on scrollToItem/scrollNext/scrollPrev
  are silently ignored unless noPolyfill={false} (string 'smooth' | 'auto'
  behaviors still reach native scrollIntoView); the RTL prop (only a
  direction: rtl CSS class) and its limits — never combine RTL with
  transition props. Load when scroll animation speed/easing has no effect,
  when customizing transitions, or when building RTL menus.
metadata:
  type: core
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/helpers.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/types.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/index.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/createApi.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/CustomTransition/CustomTransition.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/RTL/RTL.source.tsx'
---

# react-horizontal-scrolling-menu — Transitions and RTL

The single most important fact: **`noPolyfill` defaults to `true` since
v8.0.0** (`src/index.tsx:183`). With the default, every scroll uses native
`Element.scrollIntoView`: `transitionDuration`, a function-valued
`transitionBehavior`, and `ScrollOptions` `duration`/`boundary` are silently
discarded (`src/helpers.tsx:72-77`). Only the string behaviors
`'smooth'`/`'auto'` survive — they are forwarded to the native call, with
`'smooth'` as the fallback (`src/helpers.tsx:60-73`). Any duration/easing
work starts by setting `noPolyfill={false}`, which routes scrolling through
the `smooth-scroll-into-view-if-needed` polyfill. The one exception: RTL
menus must keep the default (see Tensions).

## Setup

Animated transitions, minimum viable:

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function LeftArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useLeftArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollPrev()}>
      Left
    </button>
  );
}

function RightArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useRightArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollNext()}>
      Right
    </button>
  );
}

// itemId must stay on the component's props (ScrollMenu reads it);
// do not spread it onto the DOM node.
function Card({ title }: { itemId: string; title: string }) {
  return <div style={{ width: '160px', margin: '0 10px' }}>{title}</div>;
}

const items = Array.from({ length: 10 }, (_, i) => ({ id: `item-${i}` }));

export function AnimatedMenu() {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      noPolyfill={false} // REQUIRED — transition props are no-ops without it
      transitionDuration={1200} // ms, default 500
      transitionBehavior="smooth"
    >
      {items.map(({ id }) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}
```

Patterns below reuse `LeftArrow`, `RightArrow`, `Card`, `items`, and the
import block from this Setup.

## Core Patterns

### The noPolyfill gate — which engine scrolls

| `noPolyfill`     | Engine                                       | Transition controls                                                            | RTL                   |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------------------------ | --------------------- |
| `true` (default) | native `Element.scrollIntoView`              | `duration`/`boundary`/function behavior ignored; string behavior still applies | correct               |
| `false`          | `smooth-scroll-into-view-if-needed` polyfill | all honored                                                                    | buggy — never combine |

Resolution chains in polyfill mode (`src/createApi.ts:120-160,316-336`,
`src/helpers.tsx:60`):

- behavior: positional argument → `transitionBehavior` prop → `'smooth'`
- duration: `ScrollOptions.duration` → `transitionDuration` prop → `500`
- boundary: `ScrollOptions.boundary` → the menu's own scroll container
  (`src/index.tsx:250`)

### Custom easing function via transitionBehavior

A function `transitionBehavior` receives the computed scroll targets and
drives `scrollLeft` itself — any curve or animation library works from there.
Polyfill mode only.

```tsx
// What scroll-into-view-if-needed hands to a custom behavior: one action per
// scrollable ancestor that must move — here always just the scroll container,
// because the menu passes it as `boundary`.
type ScrollAction = { el: Element; top: number; left: number };

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// A second arrow click can land mid-animation; remembering the pending frame
// per element lets the new animation cancel the old one instead of both
// fighting over scrollLeft.
const pendingFrames = new WeakMap<Element, number>();

function animateScroll(el: Element, target: number, duration: number) {
  const prevFrame = pendingFrames.get(el);
  if (prevFrame !== undefined) cancelAnimationFrame(prevFrame);

  const from = el.scrollLeft;
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    el.scrollLeft = from + (target - from) * easeInOutCubic(progress);
    if (progress < 1) {
      pendingFrames.set(el, requestAnimationFrame(step));
    } else {
      pendingFrames.delete(el);
    }
  };

  pendingFrames.set(el, requestAnimationFrame(step));
}

const transition = (instructions: ScrollAction[]) =>
  instructions.forEach(({ el, left }) => animateScroll(el, left, 1200));

export function CustomEasingMenu() {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      noPolyfill={false} // custom easing only runs through the polyfill
      // The typings describe the options-object form, but the menu passes this
      // value straight to scroll-into-view-if-needed as its behavior callback.
      transitionBehavior={transition as unknown as ScrollBehavior}
    >
      {items.map(({ id }) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}
```

Live-editable version: the
[CustomTransition Storybook story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition).

### Per-call override with ScrollOptions

`ScrollOptions` is the last argument of `scrollToItem`, `scrollNext`, and
`scrollPrev`; its `duration`/`boundary` override the menu-level transition
props for that one call (polyfill mode only):

```tsx
function CenteringCard({ title, itemId }: { itemId: string; title: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  const center = () =>
    // behavior inside the options object is required by the type but the
    // positional 'smooth' always wins — only duration/boundary take effect.
    api.scrollToItem(api.getItemById(itemId), 'smooth', 'center', 'nearest', {
      behavior: 'smooth',
      duration: 800, // overrides transitionDuration for this call only
    });

  return (
    <div onClick={center} style={{ width: '160px', margin: '0 10px' }}>
      {title}
    </div>
  );
}
```

`scrollNext`/`scrollPrev` type their options as
`Omit<scrollToItemOptions, 'behavior'>` (`src/createApi.ts:18`), so there
`{ duration: 800 }` alone compiles:

```tsx
function SlowNextArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const disabled = api.useRightArrowVisible();
  return (
    <button
      disabled={disabled}
      onClick={() =>
        api.scrollNext('smooth', 'start', 'nearest', { duration: 800 })
      }
    >
      Right
    </button>
  );
}
```

### RTL menu

The `RTL` prop does exactly one thing: it appends the `rtl` class to the
scroll container (`src/index.tsx:306-307`), which `styles.css` maps to
`direction: rtl` (`src/styles.css:9-11`). Item order and scrolling are native
browser RTL behavior. Keep the `noPolyfill` default and pass no transition
props. Swap the arrow slots so the advancing arrow sits visually left (in RTL
the row starts at the right edge and later items extend leftwards):

```tsx
export function RTLMenu() {
  return (
    // Visual left = logical end in RTL, so the slots swap components.
    // Each arrow keeps its own hook/handler pair, so disabling stays correct.
    <ScrollMenu RTL LeftArrow={RightArrow} RightArrow={LeftArrow}>
      {items.map(({ id }) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}
```

## Common Mistakes

### CRITICAL Transition props ignored under default noPolyfill

Wrong:

```tsx
<ScrollMenu transitionDuration={1200}>
  {items.map(({ id }) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu noPolyfill={false} transitionDuration={1200}>
  {items.map(({ id }) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

`noPolyfill` defaults to `true` (native `scrollIntoView`) since v8.0.0, so
`duration`, `boundary` and custom-function behavior are silently discarded
unless `noPolyfill={false}` pulls in the smooth-scroll polyfill. (Shared with
menu-migration: code written for v5–v7 relied on the polyfill being the
default.)

Source: src/helpers.tsx:72-77; src/index.tsx:183; CHANGELOG v8.0.0

### HIGH Custom transitionBehavior function without noPolyfill={false}

Wrong:

```tsx
<ScrollMenu transitionBehavior={transition as unknown as ScrollBehavior}>
  {items.map(({ id }) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu
  noPolyfill={false}
  transitionBehavior={transition as unknown as ScrollBehavior}
>
  {items.map(({ id }) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

With `noPolyfill` true the function is cast to a native `ScrollBehavior`
string and handed to `scrollIntoView`, which ignores or rejects it — custom
easing only works through the polyfill.

Source: src/helpers.tsx:67; stories/CustomTransition/CustomTransition.source.tsx

### HIGH Combining transition props with RTL

Wrong:

```tsx
<ScrollMenu RTL noPolyfill={false} transitionDuration={800}>
  {items.map(({ id }) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

Correct:

```tsx
<ScrollMenu RTL LeftArrow={RightArrow} RightArrow={LeftArrow}>
  {items.map(({ id }) => (
    <Card itemId={id} key={id} title={id} />
  ))}
</ScrollMenu>
```

The polyfill has RTL bugs (page-level horizontal scrolling); transitions and
the `RTL` prop are documented as not combining — RTL menus keep the
`noPolyfill` default and native scrolling.

Source: README.md "Transitions and animation"; https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/230 (#241, #216)

### MEDIUM behavior field in ScrollOptions treated as effective

Wrong:

```tsx
api.scrollToItem(api.getItemById('item-3'), undefined, 'center', 'nearest', {
  behavior: 'smooth', // never reaches the scroll call
});
```

Correct:

```tsx
api.scrollToItem(api.getItemById('item-3'), 'smooth', 'center', 'nearest', {
  behavior: 'smooth', // required by the type, but only satisfies TS
  duration: 800, // duration/boundary are the fields that take effect
});
```

`scrollToItemOptions` types `behavior` as required, but the implementation
spreads the positional behavior after the options object, so `options.behavior`
is always overridden (falling back through `transitionBehavior` to
`'smooth'`) — only `duration` and `boundary` in the options object matter, and
only in polyfill mode.

Source: src/types.ts:55-59 vs src/helpers.tsx:66-77; src/createApi.ts:316-336

## Tensions

### HIGH Tension: native scroll correctness vs animation control

`noPolyfill={true}` (the default) avoids the polyfill's elusive edge bugs but
makes every transition prop a no-op; `noPolyfill={false}` restores animation
control (duration, easing, per-call `ScrollOptions`) and re-imports those
bugs — RTL breakage and page-level scrolling. Agents adding
`transitionDuration` for polish silently get nothing; agents flipping
`noPolyfill` for animation break RTL menus. Pick one side per menu: animated
LTR with `noPolyfill={false}`, or RTL/maximum-correctness with the default.
The scroll methods these props modify are covered in
[menu-scrolling](../menu-scrolling/SKILL.md).

## See also

- [menu-scrolling](../menu-scrolling/SKILL.md) — `scrollToItem`,
  `scrollNext`/`scrollPrev`, `apiRef`, and paging: transition props and
  `ScrollOptions` modify how those scroll methods animate.
