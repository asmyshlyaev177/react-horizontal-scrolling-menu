import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' },
  { name: 'item14' },
  { name: 'item15' },
  { name: 'item16' },
  { name: 'item17' },
  { name: 'item18' },
  { name: 'item19' },
  { name: 'item20' },
  { name: 'item21' },
  { name: 'item22' },
  { name: 'item23' },
  { name: 'item24' },
  { name: 'item25' }
];

const MenuItem = ({ text, selected }) => {
  return (
    <div
      className={`menu-item ${selected ? 'active' : ''}`}
    >
      {text}
    </div>
  );
};

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
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class App extends Component {

  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: 'item1',
    translate: 0,
    transition: 0.4,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  }

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  }

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const {
      alignCenter: alignCenterNew
    } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew = !isNaN(val) && val <= list.length && val >= 0
      ? +ev.target.value
      : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew});
    }
  }

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  }

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      dragging,
      hideArrows,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: '5px 10px'
    };
    const valueStyle = {
      margin: '5px 10px',
      display: 'inline-block'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React horizontal scrolling menu</h1>
        </header>
        <p className="App-intro">
          Horizontal scrolling menu example.
          Click arrow or drag items.
        </p>

        <ScrollMenu
          ref={el => this.menu = el}
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          transition={+transition}
          onUpdate={this.onUpdate}
          onSelect={this.onSelect}
          selected={selected}
          translate={translate}
          alignCenter={alignCenter}
          dragging={dragging}
          clickWhenDrag={clickWhenDrag}
          wheel={wheel}
        />

        <form className="properties">
          <label style={ checkboxStyle }>
            Align center
            <input
              name="alignCenter"
              type="checkbox"
              checked={alignCenter}
              onChange={() => this.setState({ alignCenter: !alignCenter })}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Dragging
            <input
              name="dragging"
              type="checkbox"
              checked={dragging}
              onChange={() => this.setState({ dragging: !dragging })}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Click when drag end
            <input
              name="clickWhenDrag"
              type="checkbox"
              checked={clickWhenDrag}
              onChange={() => this.setState({ clickWhenDrag: !clickWhenDrag })}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Use mouse wheel
            <input
              name="wheel"
              type="checkbox"
              checked={wheel}
              onChange={() => this.setState({ wheel: !wheel })}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Hide arrows if items width less than menu width
            <input
              name="hideArrows"
              type="checkbox"
              checked={hideArrows}
              onChange={() => this.setState({ hideArrows: !hideArrows })}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Hide left/right arrows if first/last item visible
            <input
              name="hideSingleArrow"
              type="checkbox"
              checked={hideSingleArrow}
              onChange={() => this.setState({ hideSingleArrow: !hideSingleArrow })}
            /> 
          </label>
          <br />
          <div style={ valueStyle }>Translate: {(translate).toFixed(2)}</div>
          <label style={ valueStyle }>
            Selected:
            <input
              style={{ margin: '0 5px' }}
              name="selected"
              type="text"
              value={selected}
              onChange={this.setSelected}
            />
          </label>
          <label style={ valueStyle }>
            Transition duration:
            <input
              style={{ margin: '0 5px' }}
              name="transition"
              type="number"
              value={transition || 0}
              min={0}
              max={10}
              onChange={ev => this.setState({ transition: !isNaN(ev.target.value) ? +ev.target.value : 0})} />
          </label>
          <label style={ valueStyle }>
            Items count:
            <input
              style={{ margin: '0 5px' }}
              name="itemsCount"
              type="number"
              value={itemsCount}
              min={0}
              max={list.length}
              onChange={this.setItemsCount}
            />
          </label>
        </form>
        <hr />
        <div>
          <a
            /* eslint-disable react/jsx-no-target-blank */
            target="_blank"
            rel="noopener"
            href="https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu">
            Project on GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default App;
