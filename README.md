[![For hire](/hireBadge.svg)](https://www.linkedin.com/in/asmyshlyaev177/)

# React horizontal scrolling menu

![example](/sample.gif)

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![NPM Downloads](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/433d9b4a8a374109a9f96b8faf3c175d)](https://www.codacy.com/gh/asmyshlyaev177/react-horizontal-scrolling-menu/dashboard?utm_source=github.com&utm_medium=referral&utm_content=asmyshlyaev177/react-horizontal-scrolling-menu&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/433d9b4a8a374109a9f96b8faf3c175d)](https://www.codacy.com/gh/asmyshlyaev177/react-horizontal-scrolling-menu/dashboard?utm_source=github.com&utm_medium=referral&utm_content=asmyshlyaev177/react-horizontal-scrolling-menu&utm_campaign=Badge_Coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![Donate Bitcoin](https://img.shields.io/badge/donate-$5-orange.svg)](https://asmyshlyaev177.github.io/donate-bitcoin?amount=5&currency=USD)


#### [Poll what you like/dislike/need from this library](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/discussions/221)

### Check out my new project 👉 https://github.com/asmyshlyaev177/state-in-url
Add a ⭐️ and <a href="https://github.com/asmyshlyaev177" target="_blank">follow me</a> to support the project!

### Proud corner

[performance-dashboard-on-aws
](https://github.com/awslabs/performance-dashboard-on-aws/blob/49ce2517a29569a9761dec8f212f25cf85a394af/frontend/src/components/Tabs.tsx#L3) |
[React status code](https://react.statuscode.com/issues/257)

# Check out examples for common cases
### [Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) (Faster and more convinient, new examples will be here)

### Codesandbox Examples (Deprecated)
<details>
  <summary>Codesandbox examples</summary>
  
[Center items](https://codesandbox.io/s/center-items-on-click-drag-e8cyph?file=/src/index.tsx)

[Dynamically add items when last is visible](https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-dynamically-add-items-38ted?file=/src/index.tsx)

[apiRef - controling component outside](https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-apiref-vdr0d?file=/src/index.tsx)

[Add item and scroll to it](https://codesandbox.io/s/basic-example-forked-3j0xm?file=/src/index.tsx)

[Loop scroll](https://codesandbox.io/s/loop-scroll-4w8ek6?file=/src/index.tsx)

[Custom transition/animation](https://codesandbox.io/p/sandbox/custom-transition-animation-3h4d2y?file=%2Fsrc%2Findex.tsx)

[Swipe on mobile devices(need to run locally, codesandbox has issues)](https://codesandbox.io/s/swipe-on-mobile-qmgqtj)
  
</details>


### Previous version [V1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1)

This is a highly customizable horizontal scrolling menu component for React. Can also use it for Amazon like items block or a Gallery.
Menu component is responsive, just set width for parent container.
Items width will be determined from CSS styles.

For navigation, you can use scrollbar, native touch scroll, mouse wheel or drag by mouse.

Component provide context with visible items and helpers.

Possible set default position on initialization.

Check out examples on [Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) or codesandbox.

:star: if you like the project :)

### NextJS issues

[Cannot use import statement outside a module](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240)

## Quick start

```bash
npm install --save react-horizontal-scrolling-menu
```
test
In project:

```javascript
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id),
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

const LeftArrow = () => {
  const visibility = React.useContext < publicApiType > VisibilityContext;
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
      className="left"
    >
      Left
    </Arrow>
  );
};

const RightArrow = () => {
  const visibility = React.useContext < publicApiType > VisibilityContext;
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <Arrow
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext()}
      className="right"
    >
      Right
    </Arrow>
  );
};

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext < publicApiType > VisibilityContext;
  const visible = visibility.useIsVisible(itemId, true);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(visible)}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default App;
```

Check out Example in `example-nextjs` folder for info how to implement more features like mouse drag or disable body scroll.

## Example

You can clone repository and run demo project.

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
npm run setup
npm run demo
```

## Storybook

Can clone repo and run storybook

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
npm run setup
npm run storybook
```

<!-- DOCS_START -->
### Helpers and api

Children of main ScrollMenu component(arrows, fotter, items) can use **VisibilityContext** to access state and callbacks.
Function callbacks also pass context, eg `onWheel`, `onScroll` etc.

## Properties and callbacks

| Prop                     | Signature                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| LeftArrow                | React component for left arrow                                                                         |
| RightArrow               | React component for right arrow                                                                        |
| Header                   | React component Header                                                                                 |
| Footer                   | React component Footer                                                                                 |
| onWheel                  | (VisibilityContext, event) => void                                                                     |
| onScroll                 | (VisibilityContext, event) => void, will fire _before_ scroll                                          |
| onInit                   | (VisibilityContext) => void                                                                            |
| apiRef                   | React.RefObject \| React.RefCallback                                                                   |
| options                  | options for IntersectionObserver - `rootMargin`, `threshold`, and `ratio` to consider element visible |
| containerRef             | React.RefObject \| React.RefCallback                                                                   |
| onUpdate                 | (VisibilityContext) => void                                                                            |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                               |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                               |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                               |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                               |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                               |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                               |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                               |
| itemClassName            | ClassName of Item                                                                                      |
| scrollContainerClassName | ClassName of scrollContainer                                                                           |
| transitionDuration       | Duration of transitions in ms, default `500`                                                           |
| transitionBehavior       | 'smooth' \|'auto' \| customFunction                                                                    |
| wrapperClassName         | ClassName of the outer-most div                                                                        |
| RTL                      | Enable Right to left direction                                                                         |
| noPolyfill               | Don't use polyfill for scroll, no transitions, `true` by default                                       |

### VisibilityContext

| Prop                  | Signature                                              |
| --------------------- | ------------------------------------------------------ |
| useIsVisible          | (itemId: string, defaultValue?: false) => boolean      |
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
| menuVisible           | { current: boolean }
| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |
| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |
| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |
| items                 | ItemsMap class instance                                |
| scrollContainer       | Ref<OuterContainer>                                    |

### items class instance

ItemsMap class store info about all items and has methods to get currently visible items, prev/next item. Also, can subscribe to updates.

| Prop/method | Description                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe   | subscribe for events for `itemId` or `first`, `last`, `onInit`, `onUpdate`, eg. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe | use in useEffect to cleanup, pass same cb instance                                                                                             |
| getVisible  | return only visible items                                                                                                                      |
| toItems     | return ids for all items                                                                                                                       |
| toArr       | return all items                                                                                                                               |
| first       | return first item                                                                                                                              |
| last        | return last item                                                                                                                               |
| prev        | (itemId \| Item) => previous item \| undefined                                                                                                 |
| next        | (itemId \| Item) => next item \| undefined                                                                                                     |

### Transition/Animation

NOTE: won't work with RTL prop

Can use `transitionDuration`, and `transitionBehavior`
See [example](https://codesandbox.io/p/sandbox/custom-transition-animation-3h4d2y?file=%2Fsrc%2Findex.tsx)

#### ScrollOptions for scrollToItem, scrollPrev, scrollNext

Will override transition\* options passed to ScrollMenu

```javascript
{
  // target,
  behavior, // 'smooth', 'auto' or custom function
    // inline,
    // block,
    {
      duration: number, // number in milliseconds
    };
}
```

### Other helpers

#### slidingWindow

Can get previous or next visible group of items with `slidingWindow(allItems: string[], visibleItems: string[])` helper, e.g

```Javascript
slidingWindow(allItems, visibleItems)
.prev()
//.next()
```

#### getItemsPos

Can get first, center and last items, e.g.

```Javascript
const prevGroup = slidingWindow(allItems, visibleItems).prev()
const { first, center: centerItem, last } = getItemsPos(prevGroup)

// and scroll to center item of previous group of items
scrollToItem(getItemById(centerItem, 'smooth', 'center'))

```

Check out [examples](#examples)

### apiRef

Can pass Ref object to Menu, current value will assigned as VisibilityContext. But some other values can be staled, so better use it only for firing functions like `scrollToItem`.

For scrolling use `apiRef.scrollToItem(apiRef.getItemElementById)` instead of `apiRef.scrollToItem(apiRef.getItemById)`.

Can get item outside of context via `apiRef.getItemElementById(id)` or directly via ``document.querySelector(`[data-key='${itemId}']`)``.
See [`apiRef` example and `Add item and scroll to it`](#examples)

<!-- DOCS_END -->

## Browser support

- Browser must support **IntersectionObserver API** and **requestAnimationFrame** or use polyfills.
- Only modern browsers, no IE or smart toasters

## About

My first npm project. Sorry for my english.

Any contribution and correction appreciated. Just fork repo, commit and make PR, don't forget about tests.

## [Contributing](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/blob/main/CONTRIBUTING.md)

## [Changelog](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/blob/main/CHANGELOG.md)
