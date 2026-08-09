# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![NPM Downloads](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![Available for hire](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

A horizontal scrolling menu component for React, built on native browser
scrolling with per-item visibility tracking. Good for category rows, tab
strips, chip filters, galleries — any row of things your app needs to reason
about. Items are your own components with your own CSS; the menu is
responsive to its parent width; navigation works by scrollbar, touch, mouse
wheel, drag, or the arrow components you provide. 5.7 kB min+gzip.

![example](/sample.gif)

### [Landing page](https://react-horizontal-scrolling-menu.asmyshlyaev177.workers.dev) · [Live examples (Storybook, editable in the browser)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#properties-and-callbacks)

### Used by

Over 20,000 repositories depend on this library. A few you can go and read:

- [Our World in Data](https://github.com/owid/owid-grapher) — `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform) — `^8.2.0`
- [erxes](https://github.com/erxes/erxes) — `^4.0.4`
- [Reapit](https://github.com/reapit/foundations) — `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws) — `^2.1.1`

Also featured in [React Status #257](https://react.statuscode.com/issues/257).

## Quick start

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
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstVisible = visibility.useIsVisible('first', true);
  return (
    <button disabled={isFirstVisible} onClick={() => visibility.scrollPrev()}>
      ←
    </button>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastVisible = visibility.useIsVisible('last', false);
  return (
    <button disabled={isLastVisible} onClick={() => visibility.scrollNext()}>
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId);
  return (
    <div style={{ width: '160px' }} data-visible={isVisible}>
      {title}
    </div>
  );
}
```

Three things the example relies on:

- Every item needs a unique `itemId` prop — that's how visibility tracking
  works. The React `key` works as a fallback.
- `styles.css` is a separate import; the JS bundle never injects CSS.
- Item width comes from your own CSS — the menu measures nothing.

Writing plain JavaScript? Drop the type imports and use
`React.useContext(VisibilityContext)` as usual.

## What it does — and doesn't

Built on native browser scrolling: momentum, scrollbar, touch, wheel and
accessibility come from the browser, not a physics reimplementation. On top
of that: per-item visibility via IntersectionObserver, `scrollToItem` /
`scrollNext` / `scrollPrev`, an `apiRef` for control from outside, Header
and Footer slots, RTL, dynamic add/remove detection, and TypeScript types
throughout. SSR-safe — the [landing page](https://react-horizontal-scrolling-menu.asmyshlyaev177.workers.dev)
server-renders every demo.

No carousel engine: no snap or spring physics — if you want a fullscreen
image slider, use Embla or Swiper. Autoplay and infinite loop aren't props
either; they're recipes of about sixty lines each on the public API,
live-editable in Storybook
([infinite loop](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[autoplay](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
If you need a row that knows what's visible, this is it.

## Examples

Every example is live-editable in the
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) —
each story ships with a Monaco editor loaded with the library's real type
definitions. Covers: basic usage, one-item-per-scroll, mouse drag, scroll to
item on mount, center on click, adding items dynamically, save/restore
position, items animation, progress dots, preventing body scroll, custom
transitions, infinite loop, autoplay, vertical layout, arrows in the footer,
mobile swipe, RTL, and a 5000-item stress test.

### AI agents

The package ships [TanStack Intent](https://tanstack.com/intent) skills —
task-focused guidance for AI coding agents (correct v8 API, common silent
failures, recipes), versioned with the library in `skills/`. If you use an
agent, run `npx @tanstack/intent@latest install` to wire the skills into
your setup.

<!-- DOCS_START -->

### Helpers and API

Children of the main ScrollMenu component (arrows, header, footer, items)
can use **VisibilityContext** to access state and callbacks. Function
callbacks also receive the context, e.g. `onWheel`, `onScroll`.

## Properties and callbacks

| Prop                     | Signature                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| LeftArrow                | React component for left arrow                                                                        |
| RightArrow               | React component for right arrow                                                                       |
| Header                   | React component Header                                                                                |
| Footer                   | React component Footer                                                                                |
| onWheel                  | (VisibilityContext, event) => void                                                                    |
| onScroll                 | (VisibilityContext, event) => void, fires _before_ scroll settles                                     |
| onInit                   | (VisibilityContext) => void                                                                           |
| onUpdate                 | (VisibilityContext) => void                                                                           |
| apiRef                   | React.RefObject \| React.RefCallback                                                                  |
| options                  | options for IntersectionObserver - `rootMargin`, `threshold`, and `ratio` to consider element visible |
| containerRef             | React.RefObject \| React.RefCallback for the scroll container                                         |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                              |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                              |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                              |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                              |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                              |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                              |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                              |
| itemClassName            | ClassName of Item                                                                                     |
| scrollContainerClassName | ClassName of scrollContainer                                                                          |
| wrapperClassName         | ClassName of the outer-most div                                                                       |
| transitionDuration       | Duration of transitions in ms, default `500`, needs `noPolyfill={false}`                              |
| transitionBehavior       | 'smooth' \| 'auto' \| custom function, needs `noPolyfill={false}`                                     |
| RTL                      | Enable Right to left direction                                                                        |
| noPolyfill               | `true` by default (native scrollIntoView); set `false` to enable transition props                     |

Note the two callback shapes: `onWheel` and `onScroll` are plain
`(context, event) => void`, while the mouse and touch props are handler
factories — `(context) => (event) => void`. See the
[MouseDrag story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
for the factory pattern in use.

### VisibilityContext

Hooks (call them only inside components rendered under ScrollMenu, following
the rules of hooks):

| Hook                 | Signature                                                                |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

Values and functions:

| Prop                  | Signature                                              |
| --------------------- | ------------------------------------------------------ |
| getItemById           | itemId => IOItem \| undefined                          |
| getItemElementById    | itemId => DOM Element \| null                          |
| getItemByIndex        | index => IOItem \| undefined                           |
| getItemElementByIndex | index => DOM Element \| null                           |
| getNextElement        | () => IOItem \| undefined                              |
| getPrevElement        | () => IOItem \| undefined                              |
| isFirstItemVisible    | boolean                                                |
| isItemVisible         | itemId => boolean                                      |
| isLastItem            | boolean                                                |
| isLastItemVisible     | boolean                                                |
| menuVisible           | { current: boolean }                                   |
| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |
| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |
| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |
| items                 | ItemsMap class instance                                |
| scrollContainer       | Ref<OuterContainer>                                    |

### items class instance

ItemsMap stores info about all items, with methods to get currently visible
items and the previous or next item. You can also subscribe to updates.

| Prop/method | Description                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe   | subscribe to events for `itemId` or `first`, `last`, `onInit`, `onUpdate`, e.g. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe | use in useEffect for cleanup, pass the same callback instance                                                                                  |
| getVisible  | returns only visible items                                                                                                                     |
| toItems     | returns ids of all items                                                                                                                       |
| toArr       | returns all items                                                                                                                              |
| first       | returns the first item                                                                                                                         |
| last        | returns the last item                                                                                                                          |
| prev        | (itemId \| Item) => previous item \| undefined                                                                                                 |
| next        | (itemId \| Item) => next item \| undefined                                                                                                     |

### Transitions and animation

`transitionDuration` and `transitionBehavior` (`'smooth'`, `'auto'`, or a
custom function) control how `scrollToItem` and the scroll helpers animate.
Both require `noPolyfill={false}` — the default native scroll ignores them.
They don't combine with the `RTL` prop.

See the
[CustomTransition story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
for a custom easing function.

#### ScrollOptions

The last argument of `scrollToItem`, `scrollPrev` and `scrollNext` overrides
the transition props for that one call:

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // milliseconds
});
```

### Other helpers

#### slidingWindow

Get the previous or next group of visible items:

```tsx
slidingWindow(allItems, visibleItems).prev();
// or .next()
```

#### getItemsPos

Get the first, center and last item of a group — e.g. to scroll to the
center of the previous page:

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

Pass a ref to ScrollMenu and the full VisibilityContext value is assigned to
it — useful for firing functions like `scrollToItem` from outside the menu.
Data values on the ref can go stale, so prefer calling functions:

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

You can also reach an item's DOM element directly via
``document.querySelector(`[data-key='${itemId}']`)``. See the
[ScrollToItem story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
and the
[AddItemAndScrollToIt story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it).

<!-- DOCS_END -->

## SSR

The library is SSR-safe: the first render emits plain markup and
IntersectionObserver only attaches client-side. The `useIsVisible`
`defaultValue` argument controls the server-rendered state — the canonical
arrow pattern (`('first', true)` / `('last', false)`) renders a disabled
left arrow and enabled right arrow, matching a row scrolled to its start.

### Next.js note

The package is ESM-first. On older Next.js setups you may hit
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240) —
adding the package to
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
resolves it.

## Browser support

Requires **IntersectionObserver** and **requestAnimationFrame** — every
modern browser. No IE.

## Development

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
npm run setup
npm run demo        # example app (Next.js, port 3003) with the library in watch mode
npm run demo-tanstack  # example app (TanStack Start SSR, port 3004)
npm run storybook   # examples
npm test            # unit + e2e + storybook tests
```

Two integration example apps live in the repo — `example-nextjs` and
`example-tanstack` (TanStack Start, server-rendered in workerd) — both
rendering the same demo (mouse drag, body-scroll locking, custom animation
with a control panel) so the one e2e suite in `e2e/` runs against the
library under both frameworks, including an assertion that the menu is
already present in the server-rendered HTML.

Contributions and corrections are welcome — fork, commit, open a PR, and
don't forget tests. See [CONTRIBUTING](./CONTRIBUTING.md) and the
[CHANGELOG](./CHANGELOG.md).

Docs for the legacy [v1 API](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1).

## About

Built and maintained by **Aleksandr Smyshliaev** since 2018 — my first npm
package, and still the same public API across React 16.8 to 19. I'm a
frontend engineer (React / Next.js / TypeScript) and **available for
contract and full-time work**.

- **Reach me** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **Also mine** — [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (typed URL state),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (record/replay for Playwright)

A ⭐️ on the repo helps more people find the library.
