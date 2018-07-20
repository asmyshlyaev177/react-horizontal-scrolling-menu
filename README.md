# React horizontal scrolling menu

![example](/sample.gif)

[![Build Status](https://travis-ci.org/asmyshlyaev177/react-horizontal-scrolling-menu.svg?branch=master)](https://travis-ci.org/asmyshlyaev177/react-horizontal-scrolling-menu)
[![Coverage Status](https://coveralls.io/repos/github/asmyshlyaev177/react-horizontal-scrolling-menu/badge.svg?branch=master)](https://coveralls.io/github/asmyshlyaev177/react-horizontal-scrolling-menu?branch=master)

[Demo](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)

This is horizontal scrolling menu component for React.
Menu component has adaptive width, just set width for parent container.
Items width will be determinated from css styles.
**Note**: don't set margin for item wrapper, use padding instead. Can use margin for item element those you pass as props.

For navigation you can use arrows or just drag items.

Component return items position, selected item and click event from callbacks.

Possible set default position and selected item on initialization.

## Quick start

```
npm install --save react-horizontal-scrolling-menu
```
In project:
```
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
```
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
```
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu/examples
npm install
npm run start
```

## Properties and callbacks

Props | Type | Description | Required | Default Value
------------ | ------------- | ------------- | ------------- | -------------
data | Array of react components| Menu items, if empy render null (note, **component must have unique key!**) | true | []
arrowLeft | React component | React component for left arrow | false | null
arrowRight | React component | React component for right arrow |false | null
transition | Float number | How long animation last, 0 for disable | false | 0.4
alignCenter | Boolean | Try to align items by center | false | true
selected | String or Number | Initial selected item | false | 0
translate | Number | Initial offset | false | 0
dragging | Boolean | Allow drag items by mouse(and touch) | false | true
clickWhenDrag | Boolean | After drag end select item under cursor( if any) | false | false
onSelect | Function | Callback when item selected, return item key | false | null
onUpdate | Function | Callback when menu position or selected item changed, return { selected: 'item.key', translate: 0 } | false | null
onClick | Function | Callback for click on menu item, return item key |  false | null
menuClass | String | Class for component |  false | 'horizontal-menu'
arrowClass | String | Class for arrow | false | 'scroll-menu-arrow'
wrapperClass | String | Class for wrapper in component |  false | 'menu-wrapper'
innerWrapperClass | String | Class for inner wrapper | false | 'menu-wrapper--inner'
itemClass | String | Class for item wrapper | false | 'menu-item-wrapper'
itemClassActive | String | Class for active item wrapper| false | 'active'

## About
My first npm project. Sorry for my english.

Any contribution and correction appreciated. Just fork repo, commit and make PR, don't forget about tests.
