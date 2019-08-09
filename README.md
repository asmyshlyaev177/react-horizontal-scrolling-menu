# React horizontal scrolling menu

![example](/sample.gif)

[![Build Status](https://travis-ci.org/asmyshlyaev177/react-horizontal-scrolling-menu.svg?branch=master)](https://travis-ci.org/asmyshlyaev177/react-horizontal-scrolling-menu)
[![Coverage Status](https://coveralls.io/repos/github/asmyshlyaev177/react-horizontal-scrolling-menu/badge.svg?branch=master)](https://coveralls.io/github/asmyshlyaev177/react-horizontal-scrolling-menu?branch=master)
[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
[![codebeat badge](https://codebeat.co/badges/2457d520-3d0f-4f70-b563-842d9574ebc6)](https://codebeat.co/projects/github-com-asmyshlyaev177-react-horizontal-scrolling-menu-master)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=asmyshlyaev177%40gmail%2ecom&lc=US&item_name=asmyshlyaev177&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

[Demo](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)

[Demo on Codesandbox](https://codesandbox.io/s/lpjol1opmq)

This is horizontal scrolling menu component for React.
Menu component has adaptive width, just set width for parent container.
Items width will be determinated from css styles.
**Note**: don't set margin for item wrapper, use padding instead. Can use margin for item element those you pass as props.

For navigation you can use arrows, mouse wheel or just drag items.

Component return items position, selected item and click event from callbacks.

Possible set default position and selected item on initialization.

Add star if you like project :)

## Quick start

```bash
npm install --save react-horizontal-scrolling-menu
```
In project:
```javascript
import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';

// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

```
In App.css
```scss
.menu-item {
  padding: 0 40px;
  margin: 5px 10px;
  user-select: none;
  cursor: pointer;
  border: none;
}
.menu-item-wrapper.active {
  border: 1px blue solid;
}
.menu-item.active {
  border: 1px green solid;
}

.scroll-menu-arrow {
  padding: 20px;
  cursor: pointer;
}
```
## Example
You can clone repository and run demo project from *examples* folder.
```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu/examples
npm install
npm run start
```

## Properties and callbacks

Props | Type | Description | Required | Default Value
------------ | ------------- | ------------- | ------------- | -------------
alignCenter | Boolean | Try to align items by center | false | true
alignOnResize | Boolean | Try to align items after resize window | false | true
clickWhenDrag | Boolean | After drag end select item under cursor( if any) | false | false
dragging | Boolean | Allow drag items by mouse(and touch) | false | true
wheel | Boolean | Scroll with mouse wheel | false | true
arrowLeft | React component | React component for left arrow | false | null
data | Array of react components| Menu items, if empy render null (note, **component must have unique key!**) | true | []
hideArrows | Boolean | hide arrows if items fit to one screen, (add class scroll-menu-arrow--disabled to arrows) | false | false
arrowDisabledClass | String | The class name to append when arrows are disabled | false | "scroll-menu-arrow--disabled"
hideSingleArrow | Boolean | hide left/right arrows on first/last pages | false | false
transition | Float number | How long animation last, 0 for disable | false | 0.4
selected | String or Number | Initial selected item | false | 0
translate | Number | Initial offset | false | 0
dragging | Boolean | Allow drag items by mouse(and touch) | false | true
clickWhenDrag | Boolean | After drag end select item under cursor( if any) | false | false
menuClass | String | Class for component |  false | 'horizontal-menu'
arrowClass | String | Class for arrow | false | 'scroll-menu-arrow'
wrapperClass | String | Class for wrapper in component |  false | 'menu-wrapper'
innerWrapperStyle | Object | Styles inner wrapper | false |  {whiteSpace: 'nowrap', textAlign: 'left', userSelect: 'none'}
innerWrapperClass | String | Class for inner wrapper | false | 'menu-wrapper--inner'
itemStyle | Object | Styles for item wrapper | false | {display: 'inline-block'}
itemClass | String | Class for item wrapper | false | 'menu-item-wrapper'
itemClassActive | String | Class for active item wrapper| false | 'active'
menuStyle | Object | Styles for root menu component | false | {display: 'flex', alignItems: 'center', userSelect: 'none'}
wrapperStyle | Object | Style for outer wrapper | false | {overflow: 'hidden', userSelect: 'none'}
onSelect | Function | Callback when item selected, return item key | false | null
onUpdate | Function | Callback when menu position changed, return { translate: 0 } | false | null
scrollToSelected | Boolean | Scroll to `selected` props passed on mount and when props changed | false | false
scrollBy | Number | How many menu items to scroll, 0 for all visible | false | 0
inertiaScrolling | Boolean | Use inertia for scrolling, duration depends on transition and slowdown | false | false
inertiaScrollingSlowdown | Float Number | Slow down factor for inertia scrolling | false | 0.25
useButtonRole | Boolean | Adding role="button" to every item | false | true
rtl | Boolean | Reverse the scroll direction (component should have a parent with dir="rtl" in the DOM tree | false | false

## Programmaticaly change things
You can scroll left/right via `componentRef.handleArrowClick()` and `componentRef.handleArrowClickRight()` functions.

Can get other properties in component state - `const { leftArrowVisible, rightArrowVisible, selected, translate } = componentRef.state`

Can simulate click with `componentRef.onItemClick('item4')`

Can select and scroll to item with `componentRef.scrollTo('item14')`

## Gotchas
* Menu items must have width, if items contains images and images don't loaded yeat it can be problem. Generally component will try to determine width of items, if it can't you can assign ref to component and call $ref.setInitial() manually when items have width for sure.

* Browser must support **requestAnimationFrame** or use polyfill.
* It can doesn't work in IE, and I don't care, I am not a necrophile.(if you need it you can make PR, I will merge)

## About
My first npm project. Sorry for my english.

Any contribution and correction appreciated. Just fork repo, commit and make PR, don't forget about tests.

## Contributing
1 Fork the repo:
  * Run `npm install` in root folder
  * In root folder run `npm link`
  * Go to example project folder (examples)
  * Run `npm install && npm link react-horizontal-scrolling-menu`
  * Run `npm run start` in root folder and after that in examples folders

2 Write code! Add some feature or fix bug.

3 Check that all tests passed and add tests for your code.
  * You can use `npm run test:watch` for run tests in watch mode

4 Update readme and example(if needed)

5 Make commit and Pull Request

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/19995201?v=4" width="70px;" alt="Federico D. Ferrari"/><br /><sub><b>Federico D. Ferrari</b></sub>](https://github.com/fdferrari)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fdferrari "Code") | [<img src="https://avatars0.githubusercontent.com/u/17786035?v=4" width="70px;" alt="Alex Oxrud"/><br /><sub><b>Alex Oxrud</b></sub>](https://www.alexoxrud.com)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=aoxrud-ww "Code") [📖](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=aoxrud-ww "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/3169150?v=4" width="70px;" alt="Francisco"/><br /><sub><b>Francisco</b></sub>](https://github.com/fyanezv)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fyanezv "Code") [⚠️](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fyanezv "Tests") | [<img src="https://avatars3.githubusercontent.com/u/13507950?v=4" width="70px;" alt="entkenntnis"/><br /><sub><b>entkenntnis</b></sub>](https://github.com/Entkenntnis)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=Entkenntnis "Code") [📖](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=Entkenntnis "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/5212540?v=4" width="70px;" alt="Brandon Apanui"/><br /><sub><b>Brandon Apanui</b></sub>](https://github.com/FrogOnAStool)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=FrogOnAStool "Code") | [<img src="https://avatars1.githubusercontent.com/u/13350594?v=4" width="70px;" alt="Yevhenii Melikov"/><br /><sub><b>Yevhenii Melikov</b></sub>](https://github.com/YevheniiMelikov)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=YevheniiMelikov "Code") | [<img src="https://avatars0.githubusercontent.com/u/5160933?v=4" width="70px;" alt="Burak Targaç"/><br /><sub><b>Burak Targaç</b></sub>](https://www.buraktargac.com)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=btargac "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/23221619?v=4" width="70px;" alt="Bogdan"/><br /><sub><b>Bogdan</b></sub>](https://github.com/BogdanVolna)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=BogdanVolna "Code") [⚠️](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=BogdanVolna "Tests") | [<img src="https://avatars1.githubusercontent.com/u/159949?v=4" width="70px;" alt="Rob Gordon"/><br /><sub><b>Rob Gordon</b></sub>](https://github.com/rob-gordon)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=rob-gordon "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
