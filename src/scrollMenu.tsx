import React, { WheelEvent }  from 'react';

import {
  translateIsValid,
  validateTranslate,
  formatTranslate,
  notUndefOrNull,
  getClientRect,
  testPassiveEventSupport,
} from './utils';
import {
  defaultProps,
  defaultMenuStyle,
  defaultWrapperStyle,
} from './defautSettings';
import { MenuProps, Ref, RefObject, Void, MenuItem, MenuItems } from './types';
import {ArrowWrapper, InnerWrapper} from './wrapper';

interface MenuState {
  dragging: boolean,
  xPoint: number,
  translate: number,
  startDragTranslate: number,
  xDraggedDistance: number,
  leftArrowVisible: boolean,
  rightArrowVisible: boolean,
};

export class ScrollMenu extends React.Component<MenuProps, MenuState> {
  static defaultProps: MenuProps = defaultProps;

  private ref: RefObject;
  private mounted: boolean;
  private needUpdate: boolean;
  private allItemsWidth: number;
  private menuPos: number;
  private menuWidth: number;
  private wWidth: number;
  private firstPageOffset: number;
  private lastPageOffset: number;
  private lastTranslateUpdate: number;
  private menuItems: MenuItems;
  private selected: string;

  private onLoadTimer: any;
  private rafTimer: any;

  constructor(props: MenuProps) {
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
    this.menuItems = [];
    this.selected = '';

    this.onLoadTimer = 0;
    this.rafTimer = 0;
  }

  state = {
    dragging: false,
    xPoint: 0,
    translate: this.props.translate,
    startDragTranslate: 0,
    xDraggedDistance: 0,
    leftArrowVisible: false,
    rightArrowVisible: true,
  };

  componentDidMount(): Void {
    this.setInitial();

    window.requestAnimationFrame =
      window.requestAnimationFrame || function() {};

    const passiveEvents = testPassiveEventSupport();
    const optionsCapture = passiveEvents
      ? {passive: true, capture: true}
      : true;
    const optionsNoCapture = passiveEvents
      ? {passive: true, capture: false}
      : false;

    // if styles loaded before js bundle need wait for it
    window.addEventListener('load', this.onLoad, optionsNoCapture);
    window.addEventListener('resize', this.setInitial, optionsNoCapture);
    document.addEventListener('mousemove', this.handleDrag, optionsCapture);
    document.addEventListener('mouseup', this.handleDragStop, optionsCapture);

    this.onLoadTimer = setTimeout(() => (this.onLoad(), this.forceUpdate()), 0);
  }

  shouldComponentUpdate(nextProps: MenuProps, nextState: MenuState): boolean {
    const {
      translate,
      dragging,
      leftArrowVisible,
      rightArrowVisible,
    } = this.state;
    const {
      translate: translateNew,
      dragging: draggingNew,
      leftArrowVisible: leftArrowVisibleNew,
      rightArrowVisible: rightArrowVisibleNew,
    } = nextState;

    const {
      translate: translateProps,
      selected: selectedProps,
      scrollToSelected,
    } = this.props;
    const {
      translate: translatePropsNew,
      selected: selectedPropsNew,
    } = nextProps;

    const translatePropsNotNull = notUndefOrNull(translatePropsNew);
    const translateStateDiff = translate !== translateNew;
    const translatePropsDiff =
      translatePropsNotNull && translateProps !== translatePropsNew;
    const translateDiff =
      translatePropsNew !== translateNew &&
      (translateStateDiff || translatePropsDiff);

    const selectedPropsDiff =
      notUndefOrNull(selectedPropsNew) && selectedProps !== selectedPropsNew;
    const selectedDiff = selectedPropsDiff;

    const propsDiff = translateDiff || selectedDiff;

    const leftArrowVisibleDiff = leftArrowVisible !== leftArrowVisibleNew;
    const rightArrowVisibleDiff = rightArrowVisible !== rightArrowVisibleNew;

    let translateResult = translateNew;

    const newMenuItems =
      this.props.data !== nextProps.data ||
      this.props.data.length !== nextProps.data.length;
    const newTranslateProps =
      translateIsValid(translatePropsNew) &&
      translatePropsDiff &&
      !newMenuItems;

    if (newMenuItems || (scrollToSelected && selectedPropsDiff)) {
      this.needUpdate = true;
    }

    if (propsDiff) {
      if (selectedPropsDiff) {
        this.selected = selectedPropsNew;
      }

      if (newTranslateProps) {
        translateResult = translatePropsNew;
      }
    }

    if (newTranslateProps) {
      this.setState({translate: formatTranslate(translateResult)});
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

  componentDidUpdate(prevProps: MenuProps, prevState: MenuState): Void {
    if (this.needUpdate) {
      this.needUpdate = false;
      this.onLoad();
    }

    const {translate: translateOld} = prevState;
    let {translate: translateNew, dragging} = this.state;

    if (!dragging && translateOld !== translateNew) {
      this.onUpdate({translate: translateNew, translateOld});
    }

    const {hideSingleArrow, transition} = this.props;
    if (hideSingleArrow) {
      requestAnimationFrame(this.setSingleArrowVisibility);
      this.rafTimer = setTimeout(
        () => requestAnimationFrame(this.setSingleArrowVisibility),
        transition * 1000 + 10,
      );
    }
  }

  componentWillUnmount(): Void {
    clearTimeout(this.rafTimer);
    clearTimeout(this.onLoadTimer);

    window.removeEventListener('resize', this.setInitial);
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragStop);
  }

  setRef = (ref: RefObject): Void => {
    this.ref = ref;
  };

  setWrapperRef = (ref: Ref): Void => {
    this.ref.menuWrapper = ref;
  };

  checkSingleArrowVisibility = ({translate = this.state.translate} : {translate?: number})
  : {leftArrowVisible: boolean, rightArrowVisible: boolean} => {
    const {hideSingleArrow} = this.props;
    let [leftArrowVisible, rightArrowVisible] = [true, true];
    const {menuItems: items} = this;

    if (hideSingleArrow && items) {
      const visibleItems = this.getVisibleItems({offset: translate});
      const firstItemVisible = visibleItems.includes(items[0]);
      const lastItemVisible = visibleItems.includes(items.slice(-1)[0]);
      leftArrowVisible = !firstItemVisible;
      rightArrowVisible = !lastItemVisible;
    }

    return {leftArrowVisible, rightArrowVisible};
  };

  setSingleArrowVisibility = (): Void => {
    const {leftArrowVisible, rightArrowVisible} = this.state;
    const {
      leftArrowVisible: leftArrowVisibleNew,
      rightArrowVisible: rightArrowVisibleNew,
    } = this.checkSingleArrowVisibility({});
    if (
      leftArrowVisible !== leftArrowVisibleNew ||
      rightArrowVisible !== rightArrowVisibleNew
    ) {
      this.setState({
        leftArrowVisible: leftArrowVisibleNew,
        rightArrowVisible: rightArrowVisibleNew,
      });
    }
  };

  onLoad = (): Void => {
    this.setInitial();
    this.mounted = true;
  };

  setInitial = (): Void => {
    const {
      selected,
      data,
      translate: translateProps,
      scrollToSelected,
    } = this.props;
    const { translate: translateState } = this.state;
    if (!data || !data.length) return false;
    let translateNew = translateProps;

    const menuItems = this.getMenuItems(data.length);
    const selectedItem = data.find(el => el.key === selected);

    const values = {
      menuItems,
      selected:
        selectedItem
          ? selectedItem.key
          : defaultProps.selected,
    };

    for (const key in values) {
      this[key] = values[key];
    }

    // align item on initial load
    // eslint-disable-next-line no-unused-vars
    const {translate: _, ...width} = this.updateWidth({
      items: menuItems,
      offset: 0,
      translate: 0,
    });
    for (const key in width) {
      this[key] = width[key];
    }

    const newState = {...this.state};

    if (!translateIsValid(translateNew) && !translateIsValid(translateState)) {
      translateNew = formatTranslate(this.getAlignItemsOffset());
      newState.translate = translateNew;
    }

    // check arrows
    const {
      leftArrowVisible,
      rightArrowVisible,
    } = this.checkSingleArrowVisibility({translate: translateNew});
    newState.leftArrowVisible = leftArrowVisible;
    newState.rightArrowVisible = rightArrowVisible;

    // scrollToSelected
    if (scrollToSelected) {
      const needScroll = this.isScrollNeeded({
        itemId: selected,
        translate: newState.translate,
      });
      if (needScroll) {
        newState.translate = formatTranslate(
          this.getOffsetToItemByKey(selected),
        );
      }
    }

    this.setState({...newState});
  };

  isScrollNeeded = ({itemId, translate = this.state.translate}
    : {
      itemId: string,
      translate?: number
    }): boolean => {
    const itemIndex = this.getItemIndexByKey(itemId);
    if (itemIndex === -1) return false;

    const {menuItems} = this;
    const visibleItems = this.getVisibleItems({
      items: menuItems,
      offset: translate,
    });
    const item = menuItems[itemIndex];
    return !visibleItems.includes(item);
  };

  scrollTo = (itemKey: string): Void => {
    const {translate} = this.state;
    const newTranslate = this.getOffsetToItemByKey(itemKey);
    this.selected = itemKey;
    if (translate === newTranslate) return false;

    this.setState({translate: newTranslate});
  };

  getMenuItems = (dataLength: number): MenuItems => {
    return Object.entries(this.ref)
      .filter(el => el[0].includes('menuitem'))
      .slice(0, dataLength)
      .filter(Boolean);
  };

  getItemsWidth = ({items = this.menuItems} : {items?: MenuItems}): number => {
    return items
      .map(el => el[1])
      .filter(Boolean)
      .reduce((acc, el) => (acc += getClientRect(el).width), 0);
  };

  getWidth = ({items} : {items: MenuItems}) : {wWidth: number, menuPos: number, menuWidth: number, allItemsWidth: number} => {
    const wWidth = window && window.innerWidth;
    const {x: menuPos, width: menuWidth} = getClientRect(this.ref.menuWrapper);
    const allItemsWidth = this.getItemsWidth({items});
    return {wWidth, menuPos, menuWidth, allItemsWidth};
  };

  updateWidth = ({items = this.menuItems, ...args}) : {
    wWidth: number,
    menuPos: number,
    menuWidth: number,
    allItemsWidth: number,
    firstPageOffset?: number,
    lastPageOffset?: number,
    translate?: number
  } => {
    const {alignCenter} = this.props;
    const width = this.getWidth({items});
    return {
      ...width,
      ...(alignCenter ? this.getPagesOffsets({items, ...width, ...args}) : {}),
    };
  };

  getPagesOffsets = ({
    items = this.menuItems,
    allItemsWidth = this.allItemsWidth,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth,
    translate = this.state.translate,
    offset = this.state.translate,
  }) : {
    firstPageOffset: number,
    lastPageOffset: number,
    translate: number,
  } => {
    const {alignCenter} = this.props;
    const visibleItemsStart = this.getVisibleItems({
      offset,
      items,
      wWidth,
      menuPos,
      menuWidth,
    });
    const firstPageOffset = formatTranslate(
      this.getCenterOffset({
        items: visibleItemsStart,
        menuWidth,
      }),
    );
    const visibleItemsEnd = this.getVisibleItems({
      items,
      offset: -allItemsWidth + menuWidth,
      wWidth,
      menuPos,
      menuWidth,
    });
    const lastPageOffset = formatTranslate(
      this.getCenterOffset({
        items: visibleItemsEnd,
        menuWidth,
      }),
    );
    const trans = translate === 0 && alignCenter ? firstPageOffset : translate;
    this.firstPageOffset = firstPageOffset;
    this.lastPageOffset = lastPageOffset;
    return {firstPageOffset, lastPageOffset, translate: formatTranslate(trans)};
  };

  onItemClick = (id: string): Void => {
    const {clickWhenDrag, onSelect} = this.props;
    const {xDraggedDistance} = this.state;

    const afterScroll = xDraggedDistance > 5;

    if (afterScroll && !clickWhenDrag) return false;

    this.selected = id;
    if (onSelect) onSelect(id);
  };

  getVisibleItems = ({
    items = this.menuItems,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth,
    offset = this.state.translate,
    translate = this.state.translate || defaultProps.translate,
  }): MenuItems => {
    return items.filter(el => {
      const {width: elWidth} = getClientRect(el[1]);
      const id = this.getItemInd(items, el);
      const x = this.getOffsetToItemByIndex({
        index: id,
        menuItems: items,
        translate,
      });

      return this.elemVisible({x, elWidth, wWidth, menuPos, menuWidth, offset});
    });
  };

  elemVisible = ({
    x,
    offset = 0,
    elWidth,
    wWidth = this.wWidth,
    menuPos = this.menuPos,
    menuWidth = this.menuWidth,
  }): boolean => {
    const leftEdge = menuPos - 1;
    const rightEdge = wWidth - (wWidth - (menuPos + menuWidth)) + 1;
    const pos = x + offset;
    const posWithWidth = pos + elWidth;
    return pos >= leftEdge && posWithWidth <= rightEdge;
  };

  getItemInd = (menuItems: MenuItems, item: MenuItem): number => {
    if (!menuItems || !item) return 0;
    return menuItems.findIndex(el => el[0] === item[0]);
  };

  getNextItemInd = (left: boolean, visibleItems: MenuItems): number => {
    const {menuItems} = this;
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

  getOffsetToItemByKey = (key: string): number => {
    let {translate} = this.state;

    if (!key) return translate;

    const itemIndex = this.getItemIndexByKey(key);
    if (itemIndex === -1) return translate;

    const {menuPos} = this;
    const {alignCenter} = this.props;

    translate = this.getOffsetToItemByIndex({index: itemIndex});

    const visibleItemsWithNewTranslate = this.getVisibleItems({
      offset: -translate,
    });
    const offset = alignCenter
      ? this.getCenterOffset({items: visibleItemsWithNewTranslate})
      : defaultProps.translate;

    translate = -(translate - menuPos - offset);

    if (this.itBeforeStart(translate)) {
      translate = this.getOffsetAtStart();
    }
    if (this.itAfterEnd(translate)) {
      translate = this.getOffsetAtEnd();
    }
    return formatTranslate(translate);
  };

  getItemIndexByKey = (itemKey: string): number => {
    if (!itemKey) return -1;
    return this.props.data.findIndex(el => el.key === itemKey);
  };

  getOffsetToItemByIndex = ({
    index,
    menuItems = this.menuItems,
    translate = this.state.translate,
  }): number => {
    if (!menuItems.length) return 0;
    const ind = index >= menuItems.length ? menuItems.length - 1 : index;
    const {x} = getClientRect(menuItems[ind][1]);
    const position = +x - translate;
    return position;
  };

  getScrollRightOffset = (visibleItems: MenuItems, items: MenuItems): number => {
    const {alignCenter} = this.props;
    const {menuPos, lastPageOffset} = this;

    const nextItem = this.getNextItem(
      visibleItems && visibleItems.slice(-1)[0]
        ? visibleItems.slice(-1)[0][0]
        : items.slice(-1)[0][0],
    );
    const nextItemIndex = items.findIndex(el => el[0] === nextItem[0]);

    const offsetToItem = this.getOffsetToItemByIndex({
      index: nextItemIndex,
      menuItems: items,
    });
    const offsetToItemOnStart = offsetToItem - menuPos;

    const nextVisibleItems = this.getVisibleItems({
      items,
      offset: -offsetToItemOnStart,
    });

    if (nextVisibleItems.includes(items.slice(-1)[0])) {
      return alignCenter
        ? offsetToItemOnStart + lastPageOffset
        : offsetToItemOnStart;
    }

    const centerOffset = () => this.getCenterOffset({items: nextVisibleItems});

    const newOffset = alignCenter
      ? offsetToItemOnStart - centerOffset()
      : offsetToItemOnStart;
    return newOffset;
  };

  getScrollLeftOffset = (visibleItems: MenuItems, items: MenuItems): number => {
    const {alignCenter} = this.props;
    const {menuPos, menuWidth, firstPageOffset} = this;

    const prevItem = this.getPrevItem(
      visibleItems && visibleItems[0] ? visibleItems[0][0] : items[0][0],
    );
    const prevItemIndex = items.findIndex(el => el[0] === prevItem[0]);

    const offsetToItem = this.getOffsetToItemByIndex({
      index: prevItemIndex,
      menuItems: items,
    });
    const itemWidth = this.getItemsWidth({items: [prevItem]});
    const offsetToItemOnEnd = offsetToItem - menuPos - (menuWidth - itemWidth);

    const nextVisibleItems = this.getVisibleItems({
      items,
      offset: -offsetToItemOnEnd,
    });

    if (nextVisibleItems.includes(items[0])) {
      return alignCenter ? -firstPageOffset : 0;
    }

    const centerOffset = () => this.getCenterOffset({items: nextVisibleItems});

    const newOffset = alignCenter
      ? offsetToItemOnEnd + centerOffset()
      : offsetToItemOnEnd;
    return newOffset;
  };

  getAlignItemsOffset = (): number => {
    const {
      menuWidth,
      allItemsWidth,
      menuItems,
      firstPageOffset,
      lastPageOffset,
      mounted,
    } = this;
    const {alignCenter} = this.props;
    const {translate} = this.state;

    if (mounted && allItemsWidth < menuWidth) {
      this.handleArrowClick(!alignCenter);
      return validateTranslate(translate, defaultProps.translate)
    }

    const visibleItems = this.getVisibleItems({}) || [];
    const left = visibleItems.includes(menuItems[0]);
    const right = visibleItems.includes(menuItems.slice(-1)[0]);

    // center is visible, do nothing
    if (!left && !right) return validateTranslate(translate, defaultProps.translate);

    // left edge visible
    if (left) {
      const transl = alignCenter ? firstPageOffset : defaultProps.translate;
      return formatTranslate(transl);
    } else {
      const offset = allItemsWidth - menuWidth;
      const transl = alignCenter ? -offset - lastPageOffset : -offset;
      return formatTranslate(transl);
    }
  };

  getNextItem = (key: string): MenuItem => {
    const {menuItems} = this;
    const itemIndex = menuItems.findIndex(el => el[0] === key);
    const nextItemIndex = itemIndex + 1;
    const nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
    return nextItem;
  };

  getPrevItem = (key: string): MenuItem => {
    const {menuItems} = this;
    const itemIndex = menuItems.findIndex(el => el[0] === key);
    const prevItemIndex = itemIndex - 1;
    const prevItem = menuItems[prevItemIndex] || menuItems[0];
    return prevItem;
  };

  getOffset = (left: boolean): number => {
    const {menuItems: items} = this;
    const visibleItems = this.getVisibleItems({items});
    const newOffset = left
      ? this.getScrollLeftOffset(visibleItems, items)
      : this.getScrollRightOffset(visibleItems, items);
    return newOffset;
  };

  getCenterOffset = (
    {items = this.menuItems, menuWidth = this.menuWidth}
    : {items?: MenuItems, menuWidth?: number}): number => {
    if (!items.length) {
      return 0;
    }
    const itemsWidth = this.getItemsWidth({items});
    const offset = (menuWidth - itemsWidth) / 2;
    return formatTranslate(offset);
  };

  handleWheel = (e: WheelEvent): Void => {
    const {wheel} = this.props;
    if (!wheel) return false;
    if (e.deltaY < 0) {
      this.handleArrowClick();
    } else {
      this.handleArrowClick(false);
    }
  };

  getOffsetAtStart = (): number => {
    const {firstPageOffset} = this;
    const {alignCenter} = this.props;
    return alignCenter ? firstPageOffset : defaultProps.translate;
  };

  getOffsetAtEnd = (): number => {
    const {alignCenter} = this.props;
    const {allItemsWidth, menuWidth, lastPageOffset} = this;
    const offset = allItemsWidth - menuWidth;
    return alignCenter ? -offset - lastPageOffset : -offset;
  };


  handleArrowClickRight = (): Void => {
    this.handleArrowClick(false);
  };

  handleArrowClick = (left = true): Void => {
    const {alignCenter} = this.props;
    const {allItemsWidth, menuWidth} = this;

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

    const newTranslate = formatTranslate(transl);

    this.setState({
      translate: newTranslate,
      xPoint: defaultProps.xPoint,
      startDragTranslate: 0,
      xDraggedDistance: 0,
    });
  };

  itBeforeStart = (trans: number): boolean => {
    const {alignCenter} = this.props;
    const {firstPageOffset} = this;
    return alignCenter
      ? trans > firstPageOffset
      : trans > defaultProps.translate;
  };
  itAfterEnd = (trans: number): boolean => {
    const {alignCenter} = this.props;
    const {menuWidth, allItemsWidth, lastPageOffset} = this;
    return alignCenter
      ? trans < defaultProps.translate &&
          Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset
      : trans < defaultProps.translate &&
          Math.abs(trans) > allItemsWidth - menuWidth;
  };

  getPoint = (ev: React.MouseEvent|React.TouchEvent|Event): number => {
    if ('touches' in ev) {
      return ev.touches[0].clientX;
    } else if ('clientX' in ev) {
      return ev.clientX;
    } else {
      return 0;
    };
  };

  handleDragStart = (ev: React.MouseEvent|React.TouchEvent): Void => {
    // 1 left button, 2 right button
    if (ev && 'buttons' in ev && ev.buttons === 2) return false;
    const {dragging: draggingEnable} = this.props;
    if (!draggingEnable) return false;
    const {translate: startDragTranslate} = this.state;
    this.setState({
      dragging: true,
      xPoint: 0,
      startDragTranslate,
      xDraggedDistance: 0,
    });
  };

  handleDrag = (e: React.MouseEvent|React.TouchEvent|Event): Void => {
    const {dragging: draggingEnable} = this.props;
    const {translate, dragging, xPoint, xDraggedDistance} = this.state;
    if (!draggingEnable || !dragging) return false;

    const point = this.getPoint(e);
    const diff =
      xPoint === defaultProps.xPoint ? defaultProps.xPoint : xPoint - point;
    let result = translate - diff;

    // don't let scroll over start and end
    if (this.itBeforeStart(result)) {
      result = result - Math.abs(diff) / 2;
    }
    if (this.itAfterEnd(result)) {
      result = result + Math.abs(diff) / 2;
    }

    const newTranslate = formatTranslate(result);

    this.setState({
      xPoint: point,
      translate: newTranslate,
      xDraggedDistance: xDraggedDistance + Math.abs(diff),
    });
  };

  handleDragStop = (e: React.MouseEvent|React.TouchEvent|Event): Void => {
    const {allItemsWidth, menuWidth, firstPageOffset, lastPageOffset} = this;
    let {
      dragging,
      xPoint = this.getPoint(e),
      translate,
      startDragTranslate,
    } = this.state;
    const {dragging: draggingEnable, alignCenter} = this.props;
    if (!draggingEnable || !dragging) return false;

    let newTranslate = translate;

    if (this.itBeforeStart(translate)) {
      newTranslate = alignCenter ? firstPageOffset : defaultProps.translate;
      xPoint = defaultProps.xPoint;
    }
    if (this.itAfterEnd(translate)) {
      const offset = allItemsWidth - menuWidth;
      newTranslate = alignCenter ? -offset - lastPageOffset : -offset;
      xPoint = defaultProps.xPoint;
    }

    if (!alignCenter && menuWidth >= allItemsWidth) {
      newTranslate = defaultProps.translate;
      xPoint = defaultProps.xPoint;
    }

    newTranslate = formatTranslate(newTranslate);

    this.setState(
      {
        dragging: false,
        xPoint,
        translate: newTranslate,
      },
      () =>
        this.onUpdate({
          translate: newTranslate,
          translateOld: startDragTranslate,
        }),
    );
  };

  isArrowsVisible = (): boolean => {
    const {
      allItemsWidth,
      menuWidth,
      props: {hideArrows},
    } = this;
    const hide = Boolean(hideArrows && allItemsWidth <= menuWidth);
    return !hide;
  };

  onUpdate = ({
    translate = this.state.translate,
    translateOld = this.state.translate,
  } : {
    translate?: number,
    translateOld?: number
  }): Void => {
    const {onUpdate} = this.props;
    const {lastTranslateUpdate} = this;
    if (
      onUpdate &&
      translate !== translateOld &&
      translate !== lastTranslateUpdate
    ) {
      this.lastTranslateUpdate = translate;
      onUpdate({translate});
    }
  };

  public render() {
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
      forwardClick,
    } = this.props;
    const {
      translate,
      dragging,
      leftArrowVisible,
      rightArrowVisible,
    } = this.state;
    const {selected, mounted} = this;

    if (!data || !data.length) return null;

    const arrowsVisible = mounted ? this.isArrowsVisible() : true;

    const menuStyles = {...defaultMenuStyle, ...menuStyle};
    const wrapperStyles = {...defaultWrapperStyle, ...wrapperStyle};

    return (
      <div className={menuClass} style={menuStyles} onWheel={this.handleWheel}>
        {arrowLeft && (
          <ArrowWrapper
            className={arrowClass}
            isDisabled={!arrowsVisible || !leftArrowVisible}
            hideArrows={hideArrows}
            onClick={this.handleArrowClick}
            disabledClass={arrowDisabledClass}
            forwardClick={forwardClick}>
            {arrowLeft}
          </ArrowWrapper>
        )}

        <div
          className={wrapperClass}
          style={wrapperStyles}
          ref={this.setWrapperRef}
          onMouseDown={this.handleDragStart}
          onTouchStart={this.handleDragStart}
          onTouchEnd={this.handleDragStop}
          onMouseMove={this.handleDrag}
          onTouchMove={this.handleDrag}>
          <InnerWrapper
            data={data}
            translate={translate}
            dragging={dragging}
            mounted={mounted}
            transition={mounted ? transition : 0}
            selected={selected}
            setRef={this.setRef}
            onClick={this.onItemClick}
            innerWrapperClass={innerWrapperClass}
            itemClass={itemClass}
            itemClassActive={itemClassActive}
            forwardClick={forwardClick}
          />
        </div>

        {arrowRight && (
          <ArrowWrapper
            className={arrowClass}
            isDisabled={!arrowsVisible || !rightArrowVisible}
            hideArrows={hideArrows}
            onClick={this.handleArrowClickRight}
            disabledClass={arrowDisabledClass}
            forwardClick={forwardClick}>
            {arrowRight}
          </ArrowWrapper>
        )}
      </div>
    );
  }
}

export default ScrollMenu;
