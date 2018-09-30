# React horizontal scrolling menu

![example](/sample.gif)

[![Build Status](https://travis-ci.org/asmyshlyaev177/react-horizontal-scrolling-menu.svg?branch=master)](https://travis-ci.org/asmyshlyaev177/react-horizontal-scrolling-menu)
[![Coverage Status](https://coveralls.io/repos/github/asmyshlyaev177/react-horizontal-scrolling-menu/badge.svg?branch=master)](https://coveralls.io/github/asmyshlyaev177/react-horizontal-scrolling-menu?branch=master)
[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
[![codebeat badge](https://codebeat.co/badges/2457d520-3d0f-4f70-b563-842d9574ebc6)](https://codebeat.co/projects/github-com-asmyshlyaev177-react-horizontal-scrolling-menu-master)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=asmyshlyaev177%40gmail%2ecom&lc=US&item_name=asmyshlyaev177&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

[Demo](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)

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
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
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

class App extends Component {
  state = {
    selected: 0
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }

  
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);

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
data | Array of react components| Menu items, if empy render null (note, **component must have unique key!**) | true | []
wheel | Boolean | Scroll with mouse wheel | false | true
arrowLeft | React component | React component for left arrow | false | null
arrowRight | React component | React component for right arrow, don't pass it for disable arrow | false | null
transition | Float number | How long animation last, 0 for disable | false | 0.4
alignCenter | Boolean | Try to align items by center | false | true
selected | String or Number | Initial selected item | false | 0
translate | Number | Initial offset | false | 0
dragging | Boolean | Allow drag items by mouse(and touch) | false | true
clickWhenDrag | Boolean | After drag end select item under cursor( if any) | false | false
onSelect | Function | Callback when item selected, return item key | false | null
onUpdate | Function | Callback when menu position changed, return { translate: 0 } | false | null
menuClass | String | Class for component |  false | 'horizontal-menu'
arrowClass | String | Class for arrow | false | 'scroll-menu-arrow'
wrapperClass | String | Class for wrapper in component |  false | 'menu-wrapper'
innerWrapperClass | String | Class for inner wrapper | false | 'menu-wrapper--inner'
itemClass | String | Class for item wrapper | false | 'menu-item-wrapper'
itemClassActive | String | Class for active item wrapper| false | 'active'
menuStyle | Object | Styles for item wrapper | false | {display: 'flex', alignItems: 'center', userSelect: 'none'}
wrapperStyle | Object | Class for active item wrapper| false | {overflow: 'hidden', userSelect: 'none'}

## Gotcha
For now component will use for menu items props passed first time. Can not change count or properties of menu items.

## About
My first npm project. Sorry for my english.

Any contribution and correction appreciated. Just fork repo, commit and make PR, don't forget about tests.

## Contributing
1 Fork the repo:
  * In root folder `run npm link`
  * Run `npm install` in root folder
  * Remove react-horizontal-scrolling-menu from package.json example project
  * Run `npm link react-horizontal-scrolling-menu && npm install`
  * Run `npm run start` in root and in examples folders
  
2 Write code! Add some feature or fix bug.

3 Check that all tests passed and add tests for your code.
  * You can use `npm run test:watch` for run tests in watch mode
  
4 Update readme and example(if needed)

5 Run `npm run build` , make commit and Pull Request

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/19995201?v=4" width="70px;"/><br /><sub><b>Federico D. Ferrari</b></sub>](https://github.com/fdferrari)<br />[💻](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commits?author=fdferrari "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
