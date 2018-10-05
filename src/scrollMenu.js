import React from 'react';
import PropTypes from 'prop-types';

const notUndefOrNull = val => val !== undefined && val !== null;

export const defaultSetting = {
  alignCenter: true,
  arrowClass: 'scroll-menu-arrow',
  clickWhenDrag: false,
  dragging: true,
  data: [],
  firstPageOffset: 0,
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  lastPageOffset: 0,
  menuItems: [],
  menuPos: 0,
  menuWidth: 0,
  menuClass: 'horizontal-menu',
  selected: 0,
  translate: 0,
  transition: 0.4,
  wrapperClass: 'menu-wrapper',
  wheel: true,
  xPoint: 0
};

export const Arrow = ({ className, onClick, children }) => {
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
Arrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};

const defaultMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
};

const defaultWrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none' 
};

export const innerStyle = ({ translate, dragging, mounted, transition }) => {
  return {
    width: '9900px',
    transform: `translate3d(${translate}px, 0px, 0px)`,
    transition: `transform ${dragging || !mounted ? '0' : transition}s`,
    whiteSpace: 'nowrap',
    textAlign: 'left',
    userSelect: 'none'
  };
};

export class InnerWrapper extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    setRef: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    translate: PropTypes.number,
    dragging: PropTypes.bool,
    mounted: PropTypes.bool,
    transition: PropTypes.number,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    innerWrapperClass: PropTypes.string,
    itemClass: PropTypes.string,
    itemClassActive: PropTypes.string
  }

  static defaultProps = {
    data: [],
    translate: defaultSetting.translate,
    dragging: true,
    mounted: false,
    transition: defaultSetting.transition,
    selected: defaultSetting.selected
  }

  constructor(props) {
    super(props);
    this.ref = {};
  }

  setRef = (key, value) => {
    const { setRef } = this.props;
    this.ref[key] = value;
    setRef(this.ref);
  }

  render() {
    const {
      data,
      translate,
      dragging,
      mounted,
      transition,
      selected,
      innerWrapperClass,
      itemClass,
      onClick,
      itemClassActive
    } = this.props;
    const isActive = (itemId, selected) => String(itemId) === String(selected);
    const items = data
      .map(el => React.cloneElement(el, { selected: isActive(el.key, selected) }));

    return (
      <div
        className={innerWrapperClass}
        style={ innerStyle({ translate, dragging, mounted, transition }) }
        ref={inst => this.setRef('menuInner', inst)}
      >
        {items.map((Item, i) => (
          <div
            ref={inst => this.setRef(`menuitem-${i}`, inst)}
            className={`${itemClass} ${isActive(Item.key, selected) ? itemClassActive : ''}`}
            key={'menuItem-' + Item.key} 
            style={{
              display: 'inline-block'
            }}
            onClick={() => onClick(Item.key)}
          >
            {Item}
          </div>
        ))}
      </div>
    );
  }
}

export class ScrollMenu extends React.Component {

  constructor(props) {
    super(props);
    this.ref = {};
    this.initialized = false;
    this.mounted = false;
    this.needUpdate = false;
    this.allItemsWidth = 0;
    this.menuPos = 0;
    this.menuWidth = 0;
    this.wWidth = 0;
    this.firstPageOffset = 0;
    this.lastPageOffset = 0;
  }

  state = {
    dragging: false,
    xPoint: defaultSetting.xPoint,
    translate: this.props.translate,
    startDragTranslate: null,
    xDraggedDistance: null
  }

  componentDidMount() {
    this.setInitial();

    window.addEventListener('resize', this.setInitial);
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleDragStop);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { translate, dragging } = this.state;
    const {
      translate: translateNew,
      dragging: draggingNew
    } = nextState;

    const {
      translate: translateProps,
      selected: selectedProps
    } = this.props;
    const {
      translate: translatePropsNew,
      selected: selectedPropsNew
    } = nextProps;

    const translatePropsDiff = notUndefOrNull(translatePropsNew) &&
      translateProps !== translatePropsNew;
    const selectedPropsDiff = notUndefOrNull(selectedPropsNew) &&
      selectedProps !== selectedPropsNew;
    const propsDiff = translatePropsDiff || selectedPropsDiff;


    let newMenuItems = false;
    if (this.props.data !== nextProps.data) {
      newMenuItems = true;
      this.needUpdate = newMenuItems;
    }

    if (propsDiff) {
      if (selectedPropsDiff) {
        this.selected = selectedPropsNew;
      }
      
      if (translatePropsDiff && !newMenuItems) {
        this.setState({ translate: translatePropsNew });
      }
    }

    return (
      newMenuItems ||
      translate !== translateNew ||
      dragging !== draggingNew ||
      propsDiff
    );
  }

  componentDidUpdate() {
    this.setMounted();
    if (this.needUpdate) {
      this.needUpdate = false;
      this.setInitial();
      // TODO
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setInitial);
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragStop);
  }

  setRef = ref => {
    this.ref = ref;
  }

  setWrapperRef = ref => {
    this.ref.menuWrapper = ref;
  }

  setInitial = () => {
    const { selected, data } = this.props;
    const { translate } = this.state;
    if (!data || !data.length) return false;

    const menuItems = this.getMenuItems(data.length);
    const selectedItem = data.find(el => el.key === selected);

    const values = {
      initialized: true,
      menuItems,
      selected:  selectedItem && selectedItem !== -1
        ? selectedItem.key
        : defaultSetting.selected
    };

    for (const key in values) {
      this[key] = values[key];
    }

    const { translate: _, ...width } = this.updateWidth({ items: menuItems });
    for (const key in width) {
      this[key] = width[key];
    }
    const translateNew = this.getAlignItemsOffset();
    if (translate !== translateNew && typeof (translateNew) === 'number') {
      this.setState(
        { translate: translateNew },
        () => this.onUpdate({ translate: translateNew })
      );
    }
  };

  getMenuItems = (dataLength) => {
    return Object.entries(this.ref)
      .filter(el => el[0].includes('menuitem'))
      .slice(0, dataLength)
      .filter(Boolean);
  };

  setMounted = () => {
    const { initialized, mounted } = this;
    if (!initialized) {
      this.initialized = true;
    } else if (!mounted) {
      this.mounted = true;
    }
  }

  getItemsWidth = ({ items = this.menuItems}) => {
    const data = items && items.items || items;
    return data.map(el => el[1])
      .filter(Boolean)
      .reduce((acc, el) => acc += el.getBoundingClientRect().width, 0);
  };

  getWidth = ({ items }) => {
    const wWidth = window && window.innerWidth;
    const { x: menuPos, width: menuWidth } = this.ref.menuWrapper.getBoundingClientRect();
    const allItemsWidth = this.getItemsWidth({ items });
    return { wWidth, menuPos, menuWidth, allItemsWidth };
  }

  updateWidth = ({ items = this.menuItems }) => {
    const { alignCenter } = this.props;
    const width = this.getWidth({ items });
    return { ...width, ...(alignCenter ? this.getPagesOffsets({ items, ...width }) : {}) };
  }

  getPagesOffsets = ({
    items = this.menuItems,
    allItemsWidth = this.allItemsWidth,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth,
    translate = this.state.translate
  }) => {
    const { alignCenter } = this.props;
    const visibleItemsStart = this.getVisibleItems({ items, wWidth, menuPos, menuWidth });
    const firstPageOffset = this.getCenterOffset({ items: visibleItemsStart, menuWidth });
    const visibleItemsEnd = this.getVisibleItems({
      items,
      offset: -allItemsWidth + menuWidth,
      wWidth,
      menuPos,
      menuWidth
    });
    const lastPageOffset = this.getCenterOffset({ items: visibleItemsEnd, menuWidth });
    const trans = translate === 0 && alignCenter ? firstPageOffset : translate;
    this.firstPageOffset = firstPageOffset;
    this.lastPageOffset = lastPageOffset;
    return { firstPageOffset, lastPageOffset, translate: trans };
  };

  onItemClick = id => {
    // debugger;
    const { clickWhenDrag, onSelect } = this.props;
    const {  xDraggedDistance } = this.state;

    const afterScroll = xDraggedDistance > 5;

    if (afterScroll && !clickWhenDrag) return false;

    this.selected = id;
    if (onSelect) onSelect(id);
  }

  getVisibleItems = ({
    items = this.menuItems,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth,
    offset = this.state.translate,
    firstPageOffset = this.firstPageOffset,
    translate = this.state.translate
  }) => {
    const data = items.items || items;
    return data.filter(el => {
      const { width: elWidth } = el[1].getBoundingClientRect();
      const id = this.getItemInd(items, el);
      const x = this.getOffsetToItem({ itemId: id, menuItems: items, translate, firstPageOffset });
      return this.elemVisible({ x, elWidth, wWidth, menuPos, menuWidth, offset });
    });
  };

  elemVisible = ({
    x,
    offset = 0,
    elWidth,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth
  }) => {
    const leftEdge = menuPos - 1;
    const rightEdge = wWidth - (wWidth - (menuPos + menuWidth)) + 1;
    const pos = x + offset;
    const posWithWidth = pos + elWidth;
    return pos >= leftEdge && posWithWidth <= rightEdge;
  }

  getItemInd = (menuItems, item) => {
    if (!menuItems || !item) return 0;
    return menuItems.findIndex(el => el[0] === item[0]);
  };

  getNextItemInd = (left, visibleItems) => {
    const { menuItems } = this;
    if (left) {
      if (!visibleItems.length) return 0;
    } else {
      if (!visibleItems.length) return menuItems.length;
    }
    const ind = left
      ? this.getItemInd(menuItems, visibleItems[0]) - 1
      : this.getItemInd(menuItems, visibleItems.slice(-1)[0]) + 1;
    return ind < 0 ? 0 : ind;
  };

  getOffsetToItem = ({
    itemId,
    menuItems = this.menuItems,
    translate = this.state.translate
  }) => {
    if (!menuItems.length) return 0;
    const id = itemId >= menuItems.length ? menuItems.length - 1 : itemId;
    const { x } = menuItems[id][1].getBoundingClientRect();
    const position = x - translate;
    return position;
  };

  getScrollRightOffset = (visibleItems, items) => {
    const { alignCenter } = this.props;
    const { menuPos, lastPageOffset } = this;

    const nextItem = this.getNextItem(
      visibleItems && visibleItems.slice(-1)[0]
        ? visibleItems.slice(-1)[0][0]
        : items.slice(-1)[0][0]
    ); 
    const nextItemIndex = items.findIndex(el => el[0] === nextItem[0]);

    const offsetToItem = this.getOffsetToItem({ itemId: nextItemIndex, menuItems: items});
    const offsetToItemOnStart = offsetToItem - menuPos;

    const nextVisibleItems = this.getVisibleItems({
      items,
      offset: -offsetToItemOnStart
    });

    if (nextVisibleItems.includes(items.slice(-1)[0])) {
      return alignCenter ? offsetToItemOnStart + lastPageOffset : offsetToItemOnStart;
    }

    const centerOffset = () => this.getCenterOffset({ items: nextVisibleItems });
 
    const newOffset = alignCenter
      ? offsetToItemOnStart - centerOffset()
      : offsetToItemOnStart;
    return newOffset;
  }

  getScrollLeftOffset = (visibleItems, items) => {
    const { alignCenter } = this.props;
    const { menuPos, menuWidth, firstPageOffset } = this;

    const prevItem = this.getPrevItem(
      visibleItems && visibleItems[0]
        ? visibleItems[0][0]
        : items[0][0]
    ); 
    const prevItemIndex = items.findIndex(el => el[0] === prevItem[0]);

    const offsetToItem = this.getOffsetToItem({ itemId: prevItemIndex, menuItems: items});
    const itemWidth = this.getItemsWidth({ items: [prevItem] });
    const offsetToItemOnEnd = offsetToItem - menuPos - (menuWidth - itemWidth);

    const nextVisibleItems = this.getVisibleItems({
      items,
      offset: -offsetToItemOnEnd
    });

    if (nextVisibleItems.includes(items[0])) {
      return alignCenter ? -firstPageOffset : 0;
    }

    const centerOffset = () => this.getCenterOffset({ items: nextVisibleItems });
 
    const newOffset = alignCenter
      ? offsetToItemOnEnd + centerOffset()
      : offsetToItemOnEnd;
    return newOffset;
  }

  getAlignItemsOffset = () => {
    const { menuWidth, allItemsWidth, firstPageOffset, lastPageOffset, menuItems } = this;
    const { alignCenter } = this.props;
    const { translate } = this.state;

    if (allItemsWidth < menuWidth) return this.handleArrowClick(!alignCenter);

    const visibleItems = (this.getVisibleItems({}) || []);
    const left = visibleItems.includes(menuItems[0]);
    const right = visibleItems.includes(menuItems.slice(-1)[0]);

    // center is visible, do nothing
    if (!left && !right) return translate;

    // left edge visible
    if (left) {
      const transl = alignCenter ? firstPageOffset : defaultSetting.translate;
      return transl;
    } else {
      const offset = allItemsWidth - menuWidth;
      const transl = alignCenter ? -offset - lastPageOffset : -offset;
      return transl;
    }
  }

  getNextItem = key => {
    const { menuItems } = this;
    const itemIndex = menuItems.findIndex(el => el[0] === key);
    const nextItemIndex = itemIndex + 1;
    const nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
    return nextItem;
  }

  getPrevItem = key => {
    const { menuItems } = this;
    const itemIndex = menuItems.findIndex(el => el[0] === key);
    const prevItemIndex = itemIndex - 1;
    const prevItem = menuItems[prevItemIndex] || menuItems[0];
    return prevItem;
  }

  getOffset = left => {
    const { menuItems: items } = this;
    const visibleItems = this.getVisibleItems({ items });
    const newOffset = left
      ? this.getScrollLeftOffset(visibleItems, items)
      : this.getScrollRightOffset(visibleItems, items);

    return newOffset;
  }

  getCenterOffset = ({
    items = this.menuItems,
    menuWidth = this.menuWidth
  }) => {
    if (!items.length) {
      return 0;
    }
    const itemsWidth = this.getItemsWidth({ items });
    const offset = (menuWidth - itemsWidth) / 2;
    return offset;
  };

  handleWheel = e => {
    const { wheel } = this.props;
    if (!wheel) return false;
    e.stopPropagation();
    e.preventDefault();
    if (e.deltaY < 0) {
      this.handleArrowClick();
    } else {
      this.handleArrowClick(false);
    }
  }

  handleArrowClickRight = () => {
    this.handleArrowClick(false);
  }

  handleArrowClick = (left = true) => {
    const { alignCenter } = this.props;
    const {
      allItemsWidth,
      menuWidth,
      firstPageOffset,
      lastPageOffset
    } = this;
    const { translate } = this.state;

    if (!alignCenter && !left && menuWidth >= allItemsWidth) {
      return false;
    }

    const offset = this.getOffset(left);
    let transl = -offset;

    if (left && this.itBeforeStart(transl)) {
      transl = alignCenter ? firstPageOffset : defaultSetting.translate;
    }
    if (!left && this.itAfterEnd(transl)) {
      const offset = allItemsWidth - menuWidth;
      transl = alignCenter ? -offset - lastPageOffset : -offset;
    }

    this.setState(
      {
        translate: transl,
        xPoint: defaultSetting.xPoint,
        startDragTranslate: null,
        xDraggedDistance: null
      },
      () => {
        if (translate !== transl) {
          this.onUpdate({});
        }
      }
    );
  }

  itBeforeStart = trans => {
    const { alignCenter } = this.props;
    const { firstPageOffset } = this;
    return alignCenter
      ? trans > firstPageOffset
      : trans > defaultSetting.translate;
  };
  itAfterEnd = trans => {
    const { alignCenter } = this.props;
    const { menuWidth, allItemsWidth, lastPageOffset } = this;
    return alignCenter
      ? trans < defaultSetting.translate && Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset
      : trans < defaultSetting.translate && Math.abs(trans) > allItemsWidth - menuWidth;
  };

  getPoint = e => {
    return e.touches && e.touches.length
      ? e.touches[0].clientX
      : e.clientX;
  };

  handleDragStart = () => {
    const { dragging: draggingEnable } = this.props;
    if (!draggingEnable) return false;
    const { translate: startDragTranslate } = this.state;
    this.setState({ dragging: true, xPoint: 0, startDragTranslate, xDraggedDistance: 0 });
  }

  handleDrag = e => {
    const { dragging: draggingEnable } = this.props;
    const { translate, dragging, xPoint, xDraggedDistance } = this.state;
    if (!draggingEnable || !dragging) return false;

    const point = this.getPoint(e);
    const diff = xPoint === defaultSetting.xPoint ? defaultSetting.xPoint : xPoint - point;
    let result = translate - diff;

    // don't let scroll over start and end
    if (this.itBeforeStart(result)) {
      result = result - Math.abs(diff) / 2;
    }
    if (this.itAfterEnd(result)) {
      result = result + Math.abs(diff) / 2;
    }

    this.setState(
      {
        xPoint: point,
        translate: result || defaultSetting.translate,
        xDraggedDistance: xDraggedDistance + Math.abs(diff) 
      }
    );
  };

  handleDragStop = e => {
    const {
      allItemsWidth,
      menuWidth,
      firstPageOffset,
      lastPageOffset,
      startDragTranslate
    } = this;
    let {
      dragging,
      xPoint = this.getPoint(e),
      translate,
    } = this.state;
    const { dragging: draggingEnable, alignCenter } = this.props;
    if (!draggingEnable || !dragging) return false;

    let newTranslate = translate;

    if (this.itBeforeStart(translate)) {
      newTranslate = alignCenter ? firstPageOffset : 0;
      xPoint = defaultSetting.xPoint;
    }
    if (this.itAfterEnd(translate)) {
      const offset = allItemsWidth - menuWidth;
      newTranslate = alignCenter ? -offset - lastPageOffset : -offset;
      xPoint = defaultSetting.xPoint;
    }

    if (!alignCenter && menuWidth >= allItemsWidth) {
      newTranslate = 0;
      xPoint = defaultSetting.xPoint;
    }

    this.setState(
      {
        dragging: false,
        xPoint,
        translate: newTranslate
      },
      () => {
        if (startDragTranslate !== newTranslate) {
          this.onUpdate({});
        }
      }
    );
  }

  onUpdate = ({ translate = this.state.translate }) => {
    const { onUpdate } = this.props;
    if (onUpdate) {
      onUpdate({ translate });
    }
  }

  render() {
    const {
      data,
      arrowLeft,
      arrowRight,
      transition,
      arrowClass,
      menuClass,
      wrapperClass,
      innerWrapperClass,
      itemClass,
      itemClassActive,
      menuStyle,
      wrapperStyle
    } = this.props;
    const { translate, dragging } = this.state;
    const { selected, mounted } = this;

    if (!data || !data.length) return null;

    const menuStyles = { ...defaultMenuStyle, ...menuStyle };
    const wrapperStyles = { ...defaultWrapperStyle, ...wrapperStyle };

    return (
      <div
        className={menuClass}
        style={ menuStyles }
        onWheel={this.handleWheel}
      >

        {arrowLeft && 
          <Arrow
            className={arrowClass}
            onClick={this.handleArrowClick}
          >
            {arrowLeft}
          </Arrow>
        }

        <div
          className={wrapperClass}
          style={ wrapperStyles }
          ref={this.setWrapperRef}
          onMouseDown={this.handleDragStart}
          onTouchStart={this.handleDragStart}
          onTouchEnd={this.handleDragStop}
          onMouseMove={this.handleDrag}
          onTouchMove={this.handleDrag}
        >

          <InnerWrapper
            data={data}
            translate={translate}
            dragging={dragging}
            mounted={mounted}
            transition={transition}
            selected={selected}
            setRef={this.setRef}
            onClick={this.onItemClick}
            innerWrapperClass={innerWrapperClass}
            itemClass={itemClass}
            itemClassActive={itemClassActive}
          />
        </div>

        {arrowRight &&
          <Arrow
            className={arrowClass}
            onClick={this.handleArrowClickRight}
          >
            {arrowRight}
          </Arrow>
        }

      </div>
    );
  }}

export const defaultProps = {
  data: defaultSetting.data,
  translate: defaultSetting.translate,
  selected: defaultSetting.selected,
  transition: defaultSetting.transition,
  dragging: defaultSetting.dragging,
  clickWhenDrag: defaultSetting.clickWhenDrag,
  alignCenter: defaultSetting.alignCenter,
  wrapperClass: defaultSetting.wrapperClass,
  innerWrapperClass: defaultSetting.innerWrapperClass,
  itemClass: defaultSetting.itemClass,
  itemClassActive: defaultSetting.itemClassActive,
  arrowClass: defaultSetting.arrowClass,
  menuClass: defaultSetting.menuClass,
  wheel: defaultSetting.wheel
};

export const propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  translate: PropTypes.number,
  transition: PropTypes.number,
  arrowLeft: PropTypes.object,
  arrowRight: PropTypes.object,
  alignCenter: PropTypes.bool,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
  onUpdate: PropTypes.func,
  dragging: PropTypes.bool,
  clickWhenDrag: PropTypes.bool,
  wheel: PropTypes.bool,
  wrapperClass: PropTypes.string,
  innerWrapperClass: PropTypes.string,
  itemClass: PropTypes.string,
  itemClassActive: PropTypes.string,
  arrowClass: PropTypes.string,
  menuClass: PropTypes.string,
  menuStyle: PropTypes.object,
  wrapperStyle: PropTypes.object
};
ScrollMenu.defaultProps = defaultProps;
ScrollMenu.propTypes = propTypes;

export default ScrollMenu;
