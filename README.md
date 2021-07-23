# React horizontal scrolling menu

![example](/sample.gif)

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
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
yrn install react-horizontal-scrolling-menu
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

Check out Example for ifo how to implement more features.

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/19995201?v=4" width="70px;" alt="Federico D. Ferrari"/><br /><sub><b>Federico D. Ferrari</b></sub>](https://github.com/fdferrari)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fdferrari "Code") | [<img src="https://avatars0.githubusercontent.com/u/17786035?v=4" width="70px;" alt="Alex Oxrud"/><br /><sub><b>Alex Oxrud</b></sub>](https://www.alexoxrud.com)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=aoxrud-ww "Code") [📖](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=aoxrud-ww "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/3169150?v=4" width="70px;" alt="Francisco"/><br /><sub><b>Francisco</b></sub>](https://github.com/fyanezv)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fyanezv "Code") [⚠️](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fyanezv "Tests") | [<img src="https://avatars3.githubusercontent.com/u/13507950?v=4" width="70px;" alt="entkenntnis"/><br /><sub><b>entkenntnis</b></sub>](https://github.com/Entkenntnis)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=Entkenntnis "Code") [📖](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=Entkenntnis "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/5212540?v=4" width="70px;" alt="Brandon Apanui"/><br /><sub><b>Brandon Apanui</b></sub>](https://github.com/FrogOnAStool)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=FrogOnAStool "Code") | [<img src="https://avatars1.githubusercontent.com/u/13350594?v=4" width="70px;" alt="Yevhenii Melikov"/><br /><sub><b>Yevhenii Melikov</b></sub>](https://github.com/YevheniiMelikov)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=YevheniiMelikov "Code") | [<img src="https://avatars0.githubusercontent.com/u/5160933?v=4" width="70px;" alt="Burak Targaç"/><br /><sub><b>Burak Targaç</b></sub>](https://www.buraktargac.com)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=btargac "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/23221619?v=4" width="70px;" alt="Bogdan"/><br /><sub><b>Bogdan</b></sub>](https://github.com/BogdanVolna)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=BogdanVolna "Code") [⚠️](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=BogdanVolna "Tests") | [<img src="https://avatars1.githubusercontent.com/u/159949?v=4" width="70px;" alt="Rob Gordon"/><br /><sub><b>Rob Gordon</b></sub>](https://github.com/rob-gordon)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=rob-gordon "Code") | [<img src="https://avatars2.githubusercontent.com/u/1753208?v=4" width="70px;" alt="Denis Lukov"/><br /><sub><b>Denis Lukov</b></sub>](https://github.com/NeXTs)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=NeXTs "Code") | [<img src="https://avatars1.githubusercontent.com/u/7907966?v=4" width="70px;" alt="Gustavo Ribeiro"/><br /><sub><b>Gustavo Ribeiro</b></sub>](https://medium.com/@gstvribs)<br />[🐛](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues?q=author%3Agstvribs "Bug reports") [💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=gstvribs "Code") [⚠️](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=gstvribs "Tests") | [<img src="https://avatars3.githubusercontent.com/u/16056918?v=4" width="70px;" alt="Dragoș Străinu"/><br /><sub><b>Dragoș Străinu</b></sub>](https://strdr4605.github.io)<br />[📖](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=strdr4605 "Documentation") [🤔](#ideas-strdr4605 "Ideas, Planning, & Feedback") [🌍](#translation-strdr4605 "Translation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
