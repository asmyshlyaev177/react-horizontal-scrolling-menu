# React horizontal scrolling menu

![example](/sample.gif)

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
[![Tests](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/tests.yml)
[![codebeat badge](https://codebeat.co/badges/ac1ad321-e730-45de-92de-10b9a0e74cf9)](https://codebeat.co/projects/github-com-asmyshlyaev177-react-horizontal-scrolling-menu-main)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/433d9b4a8a374109a9f96b8faf3c175d)](https://www.codacy.com/gh/asmyshlyaev177/react-horizontal-scrolling-menu/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=asmyshlyaev177/react-horizontal-scrolling-menu&amp;utm_campaign=Badge_Grade)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=asmyshlyaev177%40gmail%2ecom&lc=US&item_name=asmyshlyaev177&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

[Demo](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)

[Demo on Codesandbox](https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-d8m29?file=/src/index.tsx)

### Previous version [V1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1)

This is a horizontal scrolling menu component for React.
Menu component has adaptive width, just set width for parent container.
Items width will be determined from CSS styles.

For navigation, you can use scrollbar, native touch scroll, mouse wheel or drag by mouse.

Component provide context with visible items and helpers.

Possible set default position on initialization.

:star: if you like the project :)

## Quick start

```bash
yarn add react-horizontal-scrolling-menu
```
In project:
```javascript
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }

  return (
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {items.map(({ id }) => (
            <Card
              itemId={id} // NOTE: itemId is required for track items
              title={id}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
            />)
          )}

        </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function Card({
  onClick,
  selected,
  title,
  itemId
}) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default App;
```

Check out Example in `example-nextjs` folder for info how to implement more features like mouse drag or disable body scroll.

## Example
You can clone repository and run demo project from *example-nextjs* folder.
```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
yarn install
yarn run demo
```

### Helpers and api
Children of main ScrollMenu component can use **VisibilityContext** to access state and callbacks.
Function callbacks also pass context, eg `onWheel`, `onScroll` etc.

## Properties and callbacks

Prop | Signature
------------ | -------------
LeftArrow | React component for left arrow
RightArrow | React component for right arrow 
onWheel | (VisibilityContext, event) => void
onScroll | (VisibilityContext, event) => void
onInit | (VisibilityContext) => void
onMouseDown |(VisibilityContext) => (React.MouseEventHandler) => void
onMouseUp | (VisibilityContext) => (React.MouseEventHandler) => void
onMouseMove | (VisibilityContext) => (React.MouseEventHandler) => void

### VisibilityContext

Prop | Signature
-----|----------
getItemById | itemId => IOItem \| undefined
getItemByIndex | index => IOItem \| undefined
getNextItem | () => IOItem \| undefined)
getPrevItem | () => IOItem \| undefined
isFirstItemVisible | boolean
isItemVisible | itemId => boolean
isLastItem | boolean
isLastItemVisible | boolean
scrollNext | (behavior, inline, block) => void 
scrollPrev | (behavior, inline, block) => void 
scrollToItem | (item, behavior, inline, block) => void
visibleItemsWithoutSeparators | ['item1', 'item2']
initComplete | boolean
items | ItemsMap class instance
scrollContainer | Ref<OuterContainer>
visibleItems | ['item1', 'item1-separator', 'item2']
wrapperClassName | 'custom-wrapper-class'

## Browser support
* Browser must support **IntersectionObserver API**, **Element.scrollIntoView**  and **requestAnimationFrame** or use polyfills.
* Only modern browsers, no IE or smart toasters

## About
My first npm project. Sorry for my english.

Any contribution and correction appreciated. Just fork repo, commit and make PR, don't forget about tests.

## Contributing
1 Fork the repo:
  * Run `yarn install` in root folder
  * Run `yarn demo` for compile library and demo project

2 Write code! Add some feature or fix bug.

3 Check that all tests passed and add tests for your code.
  * You can use `yarn test --watch` for run tests in watch mode

4 Update readme and example(if needed)

5 Make commit and Pull Request
