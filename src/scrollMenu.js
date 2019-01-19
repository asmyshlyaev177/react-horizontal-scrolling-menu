import React from 'react';
import PropTypes from 'prop-types';
import { notUndefOrNull, getClientRect, testPassiveEventSupport } from './utils';
import { defaultSetting, defaultProps, defaultMenuStyle, defaultWrapperStyle } from './defautSettings';
import { ArrowWrapper, InnerWrapper } from './wrapper';

export class ScrollMenu extends React.Component {

  constructor(props) {
    super(props);
    this.ref = {};
    this.mounted = false;
    this.needUpdate = false;
    this.allItemsWidth = 0;
    this.menuPos = 0;
    this.menuWidth = 0;
    this.wWidth = 0;
    this.firstPageOffset = 0;
    this.lastPageOffset = 0;
    this.lastTranslateUpdate = 0;
  }

  state = {
    dragging: false,
    xPoint: defaultSetting.xPoint,
    translate: this.props.translate || defaultSetting.translate,
    startDragTranslate: defaultSetting.startDragTranslate,
    xDraggedDistance: defaultSetting.xDraggedDistance,
    leftArrowVisible: false,
    rightArrowVisible: true
  }

  componentDidMount() {
    this.setInitial();

    window.requestAnimationFrame = window.requestAnimationFrame || function() { };

    const passiveEvents = testPassiveEventSupport();
    const optionsCapture = passiveEvents ? { passive: true, capture: true } : true;
    const optionsNoCapture = passiveEvents ? { passive: true, capture: false } : false;

    // if styles loaded before js bundle need wait for it
    window.addEventListener('load', this.onLoad, optionsNoCapture);
    window.addEventListener('resize', this.setInitial, optionsNoCapture);
    document.addEventListener('mousemove', this.handleDrag, optionsCapture);
    document.addEventListener('mouseup', this.handleDragStop, optionsCapture);
    setTimeout(() => this.onLoad(), 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { selected, translate, dragging, leftArrowVisible, rightArrowVisible } = this.state;
    const {
      selected: selectedNew,
      translate: translateNew,
      dragging: draggingNew,
      leftArrowVisible: leftArrowVisibleNew,
      rightArrowVisible: rightArrowVisibleNew
    } = nextState;

    const {
      translate: translateProps,
      selected: selectedProps
    } = this.props;
    const {
      translate: translatePropsNew,
      selected: selectedPropsNew
    } = nextProps;

    const translatePropsNotNull = notUndefOrNull(translatePropsNew);
    const translateStateDiff = translate !== translateNew;
    const translatePropsDiff = translatePropsNotNull &&
      translateProps !== translatePropsNew;
    const translateDiff = translatePropsNew !== translateNew && (translateStateDiff || translatePropsDiff);

    const selectedPropsDiff = notUndefOrNull(selectedPropsNew) &&
      selectedProps !== selectedPropsNew;
    const selectedStateDiff = selected !== selectedNew;
    const selectedDiff = selectedPropsNew !== selectedNew && (selectedPropsDiff || selectedStateDiff);

    const propsDiff = translateDiff || selectedDiff;

    const leftArrowVisibleDiff = leftArrowVisible !== leftArrowVisibleNew;
    const rightArrowVisibleDiff = rightArrowVisible !== rightArrowVisibleNew;

    let newMenuItems = false;
    if (this.props.data !== nextProps.data || this.props.data.length !== nextProps.data.length) {
      newMenuItems = true;
      this.needUpdate = true;
    }

    if (propsDiff) {
      if (selectedPropsDiff) {
        this.selected = selectedPropsNew;
      }
      
      if (typeof (translatePropsNew) === 'number' && translatePropsDiff && !newMenuItems) {
        this.setState({ translate: +translatePropsNew.toFixed(3) });
      }
    }

    return (
      newMenuItems ||
      translateDiff ||
      dragging !== draggingNew ||
      propsDiff ||
      leftArrowVisibleDiff ||
      rightArrowVisibleDiff
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.needUpdate) {
      this.needUpdate = false;
      this.onLoad();
    }

    const { translate: translateOld } = prevState;
    let { translate: translateNew, dragging } = this.state;

    if (!dragging && translateOld !== translateNew) {
      this.onUpdate({ translate: translateNew, translateOld });
    }

    const { hideSingleArrow, transition } = this.props;
    if (hideSingleArrow) {
      requestAnimationFrame(this.setSingleArrowVisibility);
      setTimeout(() => requestAnimationFrame(this.setSingleArrowVisibility), transition * 1000 + 10);
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

  checkSingleArrowVisibility = ({ translate = this.state.translate }) => {
    const { hideSingleArrow } = this.props;
    let [leftArrowVisible, rightArrowVisible] = [true, true];
    const { menuItems: items } = this;

    if (hideSingleArrow && items) {
      const visibleItems = this.getVisibleItems({ offset: translate });
      const firstItemVisible = visibleItems.includes( items[0] );
      const lastItemVisible = visibleItems.includes( items.slice(-1)[0] );
      leftArrowVisible = !firstItemVisible;
      rightArrowVisible = !lastItemVisible;
    }

    return { leftArrowVisible, rightArrowVisible };
  }

  setSingleArrowVisibility = () => {
    const { leftArrowVisible, rightArrowVisible } = this.state;
    const { leftArrowVisible: leftArrowVisibleNew, rightArrowVisible: rightArrowVisibleNew } = this.checkSingleArrowVisibility({});
    if (leftArrowVisible !== leftArrowVisibleNew || rightArrowVisible !== rightArrowVisibleNew) {
      this.setState({ leftArrowVisible: leftArrowVisibleNew, rightArrowVisible: rightArrowVisibleNew });
    }
  }

  onLoad = () => {
    this.mounted = true;
    this.setInitial();
  }

  setInitial = () => {
    const { selected, data, translate: translateProps } = this.props;
    if (!data || !data.length) return false;

    const menuItems = this.getMenuItems(data.length);
    const selectedItem = data.find(el => el.key === selected);

    const values = {
      menuItems,
      selected:  selectedItem && selectedItem !== -1
        ? selectedItem.key
        : defaultSetting.selected
    };

    for (const key in values) {
      this[key] = values[key];
    }

    const { translate: _, ...width } = this.updateWidth({ items: menuItems, offset: 0, translate: 0 });
    for (const key in width) {
      this[key] = width[key];
    }
    const translateNewRaw = this.getAlignItemsOffset();
    const translateNew = typeof (translateNewRaw) === 'number' ? +translateNewRaw.toFixed(3) : false;

    const newState = { ...this.state };

    const { leftArrowVisible, rightArrowVisible } = this.checkSingleArrowVisibility({ translate: translateNew });
    newState.leftArrowVisible = leftArrowVisible;
    newState.rightArrowVisible = rightArrowVisible;

    if (typeof (translateProps) !== 'number') {
      newState.translate = translateNew;
    }

    this.setState({ ...newState });
  };

  isScrollNeeded = ({ itemId, translate = this.state.translate }) => {
    const itemIndex = this.getItemIndexByKey(itemId);
    if (itemIndex === -1) return false;

    const { menuItems } = this;
    const visibleItems = this.getVisibleItems({ items: menuItems, offset: translate });
    const item = menuItems[itemIndex];
    return !visibleItems.includes(item);
  };

  getMenuItems = (dataLength) => {
    return Object.entries(this.ref)
      .filter(el => el[0].includes('menuitem'))
      .slice(0, dataLength)
      .filter(Boolean);
  };

  getItemsWidth = ({ items = this.menuItems}) => {
    const data = items && items.items || items;
    // TODO maybe while cycle faster, need test
    return data.map(el => el[1])
      .filter(Boolean)
      .reduce((acc, el) => acc += getClientRect(el).width, 0);
  };

  getWidth = ({ items }) => {
    const wWidth = window && window.innerWidth;
    const { x: menuPos, width: menuWidth} = getClientRect(this.ref.menuWrapper);
    const allItemsWidth = this.getItemsWidth({ items });
    return { wWidth, menuPos, menuWidth, allItemsWidth };
  }

  updateWidth = ({ items = this.menuItems, ...args }) => {
    const { alignCenter } = this.props;
    const width = this.getWidth({ items });
    return { ...width, ...(alignCenter ? this.getPagesOffsets({ items, ...width, ...args }) : {}) };
  }

  getPagesOffsets = ({
    items = this.menuItems,
    allItemsWidth = this.allItemsWidth,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth,
    translate = this.state.translate,
    offset = this.state.translate
  }) => {
    const { alignCenter } = this.props;
    const visibleItemsStart = this.getVisibleItems({ offset, items, wWidth, menuPos, menuWidth });
    const firstPageOffset = +this.getCenterOffset({ items: visibleItemsStart, menuWidth }).toFixed(3);
    const visibleItemsEnd = this.getVisibleItems({
      items,
      offset: -allItemsWidth + menuWidth,
      wWidth,
      menuPos,
      menuWidth
    });
    const lastPageOffset = +this.getCenterOffset({ items: visibleItemsEnd, menuWidth }).toFixed(3);
    const trans = translate === 0 && alignCenter ? firstPageOffset : translate;
    this.firstPageOffset = firstPageOffset;
    this.lastPageOffset = lastPageOffset;
    return { firstPageOffset, lastPageOffset, translate: +trans.toFixed(3) };
  };

  onItemClick = id => {
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
    translate = this.state.translate
  }) => {
    const data = items.items || items;

    return data.filter(el => {
      const { width: elWidth } = getClientRect(el[1]);
      const id = this.getItemInd(items, el);
      const x = this.getOffsetToItemByIndex({ index: id, menuItems: items, translate });

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

  getOffsetToItemByKey = (key) => {
    let { translate } = this.state;

    if (!key) return translate;

    const itemIndex = this.getItemIndexByKey(key);
    if (itemIndex === -1) return translate;

    const { menuPos } = this;
    const { alignCenter } = this.props;

    translate = this.getOffsetToItemByIndex({ index: itemIndex });

    const visibleItemsWithNewTranslate = this.getVisibleItems({ offset: -translate });
    const offset = alignCenter
      ? this.getCenterOffset({ items: visibleItemsWithNewTranslate })
      : defaultSetting.translate;

    translate = -(translate - menuPos - offset);

    if (this.itBeforeStart(translate)) {
      translate = this.getOffsetAtStart();
    } 
    if (this.itAfterEnd(translate)) {
      translate = this.getOffsetAtEnd();
    }
    return +translate.toFixed(3);
  }

  getItemIndexByKey = (itemKey) => {
    if (!itemKey) return -1;
    return this.props.data.findIndex(el => el.key === itemKey);
  }

  getOffsetToItemByIndex = ({
    index,
    menuItems = this.menuItems,
    translate = this.state.translate
  }) => {
    if (!menuItems.length) return 0;
    const ind = index >= menuItems.length ? menuItems.length - 1 : index;
    const { x } = getClientRect(menuItems[ind][1]);
    const position = +x - translate;
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

    const offsetToItem = this.getOffsetToItemByIndex({ index: nextItemIndex, menuItems: items});
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

    const offsetToItem = this.getOffsetToItemByIndex({ index: prevItemIndex, menuItems: items});
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
    const { menuWidth, allItemsWidth, menuItems, firstPageOffset, lastPageOffset } = this;
    const { alignCenter } = this.props;
    const { translate } = this.state;

    if (allItemsWidth < menuWidth) {
      return this.handleArrowClick(!alignCenter);
    }

    const visibleItems = (this.getVisibleItems({}) || []);
    const left = visibleItems.includes(menuItems[0]);
    const right = visibleItems.includes(menuItems.slice(-1)[0]);

    // center is visible, do nothing
    if (!left && !right) return +translate.toFixed(3);

    // left edge visible
    if (left) {
      const transl = alignCenter ? firstPageOffset : defaultSetting.translate;
      return +transl.toFixed(3);
    } else {
      const offset = allItemsWidth - menuWidth;
      const transl = alignCenter ? -offset - lastPageOffset : -offset;
      return +transl.toFixed(3);
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
    return +offset.toFixed(3);
  };

  handleWheel = e => {
    const { wheel } = this.props;
    if (!wheel) return false;
    if (e.deltaY < 0) {
      this.handleArrowClick();
    } else {
      this.handleArrowClick(false);
    }
  }

  handleArrowClickRight = () => {
    this.handleArrowClick(false);
  }

  getOffsetAtStart = () => {
    const { firstPageOffset } = this;
    const { alignCenter } = this.props;
    return alignCenter ? firstPageOffset : defaultSetting.translate;
  }

  getOffsetAtEnd = () => {
    const { alignCenter } = this.props;
    const { allItemsWidth, menuWidth, lastPageOffset } = this;
    const offset = allItemsWidth - menuWidth;
    return alignCenter ? -offset - lastPageOffset : -offset;
  }

  handleArrowClick = (left = true) => {
    const { alignCenter } = this.props;
    const {
      allItemsWidth,
      menuWidth
    } = this;

    if (!alignCenter && !left && menuWidth > allItemsWidth) {
      return false;
    }

    const offset = this.getOffset(left);
    let transl = -offset;

    if (left && this.itBeforeStart(transl)) {
      transl = this.getOffsetAtStart();
    }
    if (!left && this.itAfterEnd(transl)) {
      transl = this.getOffsetAtEnd();
    }

    const newTranslate = +transl.toFixed(3);

    this.setState(
      {
        translate: newTranslate,
        xPoint: defaultSetting.xPoint,
        startDragTranslate: null,
        xDraggedDistance: null
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

  handleDragStart = ev => {
    // 1 left button, 2 right button
    if (ev && ev.buttons === 2) return false;
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

    const newTranslate = +result.toFixed(3);

    this.setState(
      {
        xPoint: point,
        translate: newTranslate,
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
    } = this;
    let {
      dragging,
      xPoint = this.getPoint(e),
      translate,
      startDragTranslate
    } = this.state;
    const { dragging: draggingEnable, alignCenter } = this.props;
    if (!draggingEnable || !dragging) return false;

    let newTranslate = translate;

    if (this.itBeforeStart(translate)) {
      newTranslate = alignCenter ? firstPageOffset : defaultSetting.translate;
      xPoint = defaultSetting.xPoint;
    }
    if (this.itAfterEnd(translate)) {
      const offset = allItemsWidth - menuWidth;
      newTranslate = alignCenter ? -offset - lastPageOffset : -offset;
      xPoint = defaultSetting.xPoint;
    }

    if (!alignCenter && menuWidth >= allItemsWidth) {
      newTranslate = defaultSetting.translate;
      xPoint = defaultSetting.xPoint;
    }

    newTranslate = +newTranslate.toFixed(3);

    this.setState(
      {
        dragging: false,
        xPoint,
        translate: newTranslate
      }, () => this.onUpdate({ translate: newTranslate, translateOld: startDragTranslate })
    );
  }

  isArrowsVisible = () => {
    const { allItemsWidth, menuWidth, props: {hideArrows} } = this;
    const hide = Boolean(hideArrows && allItemsWidth <= menuWidth);
    return !hide;
  };

  onUpdate = ({ translate = this.state.translate, translateOld = this.state.translate }) => {
    const { onUpdate } = this.props;
    const { lastTranslateUpdate } = this;
    if (onUpdate && translate !== translateOld && translate !== lastTranslateUpdate) {
      this.lastTranslateUpdate = translate;
      onUpdate({ translate });
    }
  }

  render() {
    const {
      arrowClass,
      arrowDisabledClass,
      arrowLeft,
      arrowRight,
      data,
      innerWrapperClass,
      itemClass,
      itemClassActive,
      hideArrows,
      menuStyle,
      menuClass,
      transition,
      wrapperClass,
      wrapperStyle,
      forwardClick
    } = this.props;
    const { translate, dragging, leftArrowVisible, rightArrowVisible } = this.state;
    const { selected, mounted } = this;

    if (!data || !data.length) return null;

    const arrowsVisible = mounted ? this.isArrowsVisible() : true;

    const menuStyles = { ...defaultMenuStyle, ...menuStyle };
    const wrapperStyles = { ...defaultWrapperStyle, ...wrapperStyle };

    return (
      <div
        className={menuClass}
        style={ menuStyles }
        onWheel={this.handleWheel}
      >

        {arrowLeft && 
          <ArrowWrapper
            className={arrowClass}
            isDisabled={!arrowsVisible || !leftArrowVisible}
            hideArrows={hideArrows}
            onClick={this.handleArrowClick}
            disabledClass={arrowDisabledClass}
            forwardClick={forwardClick}
          >
            {arrowLeft}
          </ArrowWrapper>
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
            forwardClick={forwardClick}
          />
        </div>

        {arrowRight &&
          <ArrowWrapper
            className={arrowClass}
            isDisabled={!arrowsVisible || !rightArrowVisible}
            hideArrows={hideArrows}
            onClick={this.handleArrowClickRight}
            disabledClass={arrowDisabledClass}
            forwardClick={forwardClick}
          >
            {arrowRight}
          </ArrowWrapper>
        }

      </div>
    );
  }}

export const propTypes = {
  alignCenter: PropTypes.bool,
  arrowClass: PropTypes.string,
  arrowDisabledClass: PropTypes.string,
  arrowLeft: PropTypes.object,
  arrowRight: PropTypes.object,
  clickWhenDrag: PropTypes.bool,
  data: PropTypes.array.isRequired,
  dragging: PropTypes.bool,
  innerWrapperClass: PropTypes.string,
  itemClass: PropTypes.string,
  itemClassActive: PropTypes.string,
  hideArrows: PropTypes.bool,
  hideSingleArrow: PropTypes.bool,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  translate: PropTypes.number,
  transition: PropTypes.number,
  onUpdate: PropTypes.func,
  menuClass: PropTypes.string,
  menuStyle: PropTypes.object,
  scrollToSelected: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  wheel: PropTypes.bool,
  wrapperClass: PropTypes.string,
  forwardClick: PropTypes.bool
};
ScrollMenu.defaultProps = defaultProps;
ScrollMenu.propTypes = propTypes;

export default ScrollMenu;
