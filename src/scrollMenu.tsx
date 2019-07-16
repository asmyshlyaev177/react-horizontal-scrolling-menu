import * as React from 'react';
import { WheelEvent } from 'react';

import {
  defaultMenuStyle,
  defaultProps,
  defaultWrapperStyle,
} from './defautSettings';
import { MenuItem, MenuItems, MenuProps, Ref, RefObject, Void } from './types';
import {
  getClientRect,
  notUndefOrNull,
  testPassiveEventSupport,
  translateIsValid,
} from './utils';
import { ArrowWrapper, InnerWrapper } from './wrapper';

interface MenuState {
  dragging: boolean;
  xPoint: number;
  translate: number;
  startDragTranslate: number;
  xDraggedDistance: number;
  firstItemVisible: boolean;
  lastItemVisible: boolean;
  leftArrowVisible: boolean;
  rightArrowVisible: boolean;
}

interface DragHistoryEntry {
  time: number;
  position: number;
}

export class ScrollMenu extends React.Component<MenuProps, MenuState> {
  public static defaultProps: MenuProps = defaultProps;

  private ref: RefObject;
  private menuWrapper: Ref;
  private menuInner: Ref;
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

  /** timers for setTimeout if RAF not supported */
  private onLoadTimer: any;
  private rafTimer: any;
  private resizeTimer: any;
  private frameId: any;

  private data: JSX.Element[] | null;

  private dragHistory: DragHistoryEntry[];

  constructor(props: MenuProps) {
    super(props);
    this.ref = {};
    this.menuWrapper = null;
    this.menuInner = null;
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
    this.selected = String(props.selected) || '';

    this.onLoadTimer = 0;
    this.rafTimer = 0;
    this.resizeTimer = 0;
    this.frameId = 0;

    this.data = null;
    this.dragHistory = [];
  }

  public state = {
    dragging: false,
    firstItemVisible: true,
    lastItemVisible: false,
    leftArrowVisible: false,
    rightArrowVisible: true,
    startDragTranslate: 0,
    translate: this.props.translate,
    xDraggedDistance: 0,
    xPoint: 0,
  };

  public componentDidCatch(err: any, info: any): Void {
    // tslint:disable-next-line:no-console
    console.log('ScrollMenu catched error: ', err, info);
  }

  public componentDidMount(): Void {
    this.setInitial();

    window.requestAnimationFrame =
      window.requestAnimationFrame || (() => false);

    const passiveEvents = testPassiveEventSupport();
    const optionsCapture = passiveEvents
      ? { passive: true, capture: true }
      : true;
    const optionsNoCapture = passiveEvents
      ? { passive: true, capture: false }
      : false;

    window.addEventListener('load', this.onLoad, optionsNoCapture);
    window.addEventListener('resize', this.resizeHandler, optionsNoCapture);
    document.addEventListener('mousemove', this.handleDrag, optionsCapture);
    document.addEventListener('mouseup', this.handleDragStop, optionsCapture);

    // if styles loaded before js bundle need wait for it
    this.onLoadTimer = setTimeout(() => (this.onLoad(), this.forceUpdate()), 0);
  }

  public shouldComponentUpdate(
    nextProps: MenuProps,
    nextState: MenuState,
  ): boolean {
    // TODO: need refactor all this or remove
    // it's too complicated already
    const {
      translate,
      dragging,
      firstItemVisible,
      lastItemVisible,
    } = this.state;
    const {
      translate: translateNew,
      dragging: draggingNew,
      firstItemVisible: firstItemVisibleNew,
      lastItemVisible: lastItemVisibleNew,
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
      translatePropsNew !== translateNew ||
      (translateStateDiff || translatePropsDiff);

    const selectedPropsDiff =
      notUndefOrNull(selectedPropsNew) && selectedProps !== selectedPropsNew;
    const selectedDiff =
      selectedPropsDiff || this.selected !== selectedPropsNew;

    const propsDiff = translateDiff || selectedDiff;

    const firstItemVisibleDiff = firstItemVisible !== firstItemVisibleNew;
    const lastItemVisibleDiff = lastItemVisible !== lastItemVisibleNew;

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
      this.setState({ translate: +translateResult });
    }

    return (
      newMenuItems ||
      translateDiff ||
      dragging !== draggingNew ||
      propsDiff ||
      firstItemVisibleDiff ||
      lastItemVisibleDiff
    );
  }

  public componentDidUpdate(prevProps: MenuProps, prevState: MenuState): Void {
    // update if have new menu items or selected value
    if (this.needUpdate) {
      this.needUpdate = false;
      this.onLoad();
    }

    const { translate: translateOld } = prevState;
    const { translate, dragging } = this.state;

    if (!dragging && translateOld !== translate) {
      this.onUpdate({ translate, translateOld });
    }

    const { hideSingleArrow, transition } = this.props;
    if (hideSingleArrow) {
      cancelAnimationFrame(this.frameId);
      clearTimeout(this.rafTimer);
      this.frameId = requestAnimationFrame(this.setFirstLastItemVisibility);
      this.rafTimer = setTimeout(
        () => {
          cancelAnimationFrame(this.frameId);
          this.frameId = requestAnimationFrame(this.setFirstLastItemVisibility);
        },
        transition * 1000 + 10,
      );
    }
  }

  public componentWillUnmount(): Void {
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragStop);
    clearTimeout(this.rafTimer);
    clearTimeout(this.onLoadTimer);
    clearTimeout(this.resizeTimer);
    cancelAnimationFrame(this.frameId);
  }

  /** set ref for MenuItems */
  public setRef = (ref: RefObject): Void => {
    const [key, value] = Object.entries(ref)[0];
    if (value.elem) {
      this.ref[key] = value;
    }
  }

  public setMenuInnerRef = (ref: Ref): Void => {
    this.menuInner = ref;
  }

  /** set ref for wrapper */
  public setWrapperRef = (ref: Ref): Void => {
    this.menuWrapper = ref;
  }

  /** check if first and last items visible */
  public checkFirstLastItemVisibility = ({
    translate = this.state.translate,
  }: {
    translate?: number;
  }): { firstItemVisible: boolean; lastItemVisible: boolean } => {
    const { menuItems } = this;

    let firstItemVisible = true;
    let lastItemVisible = false;
    if (menuItems) {
      const visibleItems = this.getVisibleItems({ offset: translate });
      firstItemVisible = visibleItems.includes(menuItems[0]);
      lastItemVisible = visibleItems.includes(menuItems.slice(-1)[0]);
    }

    return { firstItemVisible, lastItemVisible };
  }

  /** check first and last items and setState */
  public setFirstLastItemVisibility = (): Void => {
    const {
      firstItemVisible: firstItemVisibleOld,
      lastItemVisible: lastItemVisibleOld,
    } = this.state;
    const {
      firstItemVisible,
      lastItemVisible,
    } = this.checkFirstLastItemVisibility({});
    if (
      firstItemVisibleOld !== firstItemVisible ||
      lastItemVisibleOld !== lastItemVisible
    ) {
      const leftArrowVisible = !firstItemVisible;
      const rightArrowVisible = !lastItemVisible;
      this.setState({
        firstItemVisible,
        lastItemVisible,
        leftArrowVisible,
        rightArrowVisible,
      });
    }
  }

  public onLoad = (): Void => {
    this.setInitial();
    this.mounted = true;
  }

  /** kinda debounce */
  public resizeHandler = (): Void => {
    const { alignOnResize } = this.props;
    if (!alignOnResize) {
      return false;
    }

    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => this.resize(), 250);
  }

  /** Set values on resize */
  public resize = (): Void => {
    const { alignCenter } = this.props;
    this.updateWidth({});
    const visibleItems = this.getVisibleItems({});

    const offset = this.getOffsetToItemByIndex({
      index: (visibleItems[0] && visibleItems[0][1].index) || 0,
    });

    const align = alignCenter
      ? this.getCenterOffset({ items: visibleItems })
      : 0;
    this.setState({ translate: -offset + align });
  }

  /** set initial values and for updates */
  public setInitial = (): Void => {
    const {
      selected,
      data,
      translate: translateProp,
      scrollToSelected,
      alignCenter,
    } = this.props;
    const { translate: translateState } = this.state;
    if (!data || !data.length) {
      return false;
    }

    if (!this.menuItems.length || data !== this.data) {
      this.menuItems = this.getMenuItems();
      this.data = data;
    }

    // align item on initial load
    this.updateWidth({});

    const newState = { ...this.state };

    // set translate on first load
    const firstMountAndDefaultTranslate =
      !this.mounted && translateProp === defaultProps.translate;
    if (
      firstMountAndDefaultTranslate ||
      (!translateIsValid(translateProp) && !translateIsValid(translateState))
    ) {
      newState.translate = alignCenter
        ? this.firstPageOffset
        : defaultProps.translate;
    }

    // check arrows
    const {
      firstItemVisible,
      lastItemVisible,
    } = this.checkFirstLastItemVisibility({ translate: translateProp });
    newState.firstItemVisible = firstItemVisible;
    newState.lastItemVisible = lastItemVisible;
    newState.leftArrowVisible = !firstItemVisible;
    newState.rightArrowVisible = !lastItemVisible;

    // scrollToSelected
    if (scrollToSelected) {
      const needScroll = this.isScrollNeeded({
        itemId: selected,
        translate: newState.translate,
      });
      if (needScroll) {
        newState.translate = this.getOffsetToItemByKey(selected);
      }
    }

    this.setState({ ...newState });
  }

  /** check if selected item visible on screen or need scroll to it */
  public isScrollNeeded = ({
    itemId,
    translate = this.state.translate,
  }: {
    itemId: string;
    translate?: number;
  }): boolean => {
    const item = this.getItemByKey(itemId);

    const visibleItems = this.getVisibleItems({
      offset: translate,
    });
    return !visibleItems.includes(item);
  }

  /** external api, scroll to item by it key */
  public scrollTo = (itemKey: string): Void => {
    const { translate } = this.state;
    const newTranslate = this.getOffsetToItemByKey(itemKey);
    this.selected = itemKey;
    if (translate === newTranslate) {
      return false;
    }

    this.setState({ translate: newTranslate });
  }

  /** get MenuItems from refs */
  public getMenuItems = (): MenuItems =>
    Object.entries(this.ref).slice(0, this.props.data.length || 0)

  /** get width of all menu items */
  public getItemsWidth = ({
    items = this.menuItems,
  }: {
    items?: MenuItems;
  }): number => {
    return items
      .map(el => el[1].elem)
      .filter(Boolean)
      .reduce((acc, el) => (acc += getClientRect(el).width), 0);
  }

  /** get width of items, window and pos of menu */
  public getWidth = ({
    items,
  }: {
    items: MenuItems;
  }): {
    wWidth: number;
    menuPos: number;
    menuWidth: number;
    allItemsWidth: number;
  } => {
    const wWidth = window && window.innerWidth;
    const { x: menuPos, width: menuWidth } = getClientRect(this.menuWrapper);
    const allItemsWidth = this.getItemsWidth({ items });
    return { wWidth, menuPos, menuWidth, allItemsWidth };
  }

  /** values from 2 functions above */
  public updateWidth = ({
    items = this.menuItems,
  }: {
    items?: MenuItems;
  }): Void => {
    const { wWidth, menuPos, menuWidth, allItemsWidth } = this.getWidth({
      items,
    });
    const { firstPageOffset, lastPageOffset } = this.getPagesOffsets({
      allItemsWidth,
      items,
      menuWidth,
    });

    this.menuPos = menuPos;
    this.wWidth = wWidth;
    this.allItemsWidth = allItemsWidth;
    this.menuWidth = menuWidth;
    this.firstPageOffset = firstPageOffset;
    this.lastPageOffset = lastPageOffset;
  }

  /** get firstPageOffset */
  public getFirstPageOffset = ({
    items = this.menuItems,
    offset = this.state.translate,
    menuWidth = this.menuWidth,
  }: {
    items: MenuItems;
    offset: number;
    menuWidth: number;
  }): number => {
    const visibleItemsStart = this.getVisibleItems({
      items,
      menuWidth,
      offset,
    });
    const firstPageOffset = this.getCenterOffset({
      items: visibleItemsStart,
      menuWidth,
    });
    return firstPageOffset;
  }

  /** get lastPageOffset */
  public getLastPageOffset = ({
    items = this.menuItems,
    allItemsWidth = this.allItemsWidth,
    menuWidth = this.menuWidth,
  }: {
    items: MenuItems;
    allItemsWidth: number;
    menuWidth: number;
  }): number => {
    const { rtl } = this.props;
    const visibleItemsEnd = this.getVisibleItems({
      items,
      menuWidth,
      offset: rtl ? allItemsWidth - menuWidth : -allItemsWidth + menuWidth,
    });
    const lastPageOffset = this.getCenterOffset({
      items: visibleItemsEnd,
      menuWidth,
    });

    return lastPageOffset;
  }

  /** get offsets to first and last item */
  public getPagesOffsets = ({
    items = this.menuItems,
    allItemsWidth = this.allItemsWidth,
    menuWidth = this.menuWidth,
    offset = this.state.translate,
  }): {
    firstPageOffset: number;
    lastPageOffset: number;
  } => {
    const firstPageOffset = this.getFirstPageOffset({
      items,
      menuWidth,
      offset,
    });
    const lastPageOffset = this.getLastPageOffset({
      allItemsWidth,
      items,
      menuWidth,
    });

    return {
      firstPageOffset,
      lastPageOffset,
    };
  }

  /** item click handler */
  public onItemClick = (id: string): Void => {
    const { clickWhenDrag, onSelect } = this.props;
    const { xDraggedDistance } = this.state;

    const afterScroll = xDraggedDistance > 5;

    if (afterScroll && !clickWhenDrag) {
      return false;
    }

    this.selected = id;
    if (onSelect) {
      onSelect(id);
    }
  }

  /** get item visible with current/provided translate */
  public getVisibleItems = ({
    items = this.menuItems,
    menuWidth = this.menuWidth,
    offset = this.state.translate,
    translate = this.state.translate || defaultProps.translate,
  }): MenuItems => {
    return items.filter(el => {
      const { width: elWidth } = getClientRect(el[1].elem);
      const id = this.getItemInd(items, el);
      const x = this.getOffsetToItemByIndex({
        index: id,
        menuItems: items,
        translate,
      });

      return this.elemVisible({
        elWidth,
        menuWidth,
        offset,
        x,
      });
    });
  }

  /** check if single menu item visible by it's position and width */
  public elemVisible = ({
    x,
    offset = 0,
    elWidth,
    menuWidth = this.menuWidth,
  }: {
    x: number;
    offset: number;
    elWidth: number;
    menuWidth?: number;
  }): boolean => {
    const { rtl } = this.props;
    const leftEdge = rtl ? -(menuWidth + 1) : -1;
    const rightEdge = rtl ? 1 : menuWidth + 1;
    const pos = rtl ? -(x + offset) : x + offset;
    const posWithWidth = rtl ? pos - elWidth : pos + elWidth;

    if (rtl) {
      return posWithWidth >= leftEdge && pos <= rightEdge;
    }

    return pos >= leftEdge && posWithWidth <= rightEdge;
  }

  /** get index of item */
  public getItemInd = (
    menuItems: MenuItems = this.menuItems,
    item: MenuItem,
  ): number => {
    if (!menuItems || !item) {
      return 0;
    }
    return menuItems.findIndex(el => el[0] === item[0]);
  }

  /** get next item in data */
  public getNextItemInd = (left: boolean, visibleItems: MenuItems): number => {
    const { menuItems } = this;
    if (left) {
      if (!visibleItems.length) {
        return 0;
      }
    } else {
      if (!visibleItems.length) {
        return menuItems.length;
      }
    }
    const ind = left
      ? this.getItemInd(menuItems, visibleItems[0]) - 1
      : this.getItemInd(menuItems, visibleItems.slice(-1)[0]) + 1;
    return ind < 0 ? 0 : ind;
  }

  /** get offset from start to item by it's key */
  public getOffsetToItemByKey = (key: string): number => {
    let { translate } = this.state;

    const itemIndex = this.getItemIndexByKey(key);
    if (itemIndex === -1) {
      return translate;
    }

    const { alignCenter, rtl } = this.props;

    translate = this.getOffsetToItemByIndex({ index: itemIndex });

    const visibleItemsWithNewTranslate = this.getVisibleItems({
      offset: -translate,
    });
    const offset = alignCenter
      ? this.getCenterOffset({ items: visibleItemsWithNewTranslate })
      : defaultProps.translate;

    translate = -(translate - (rtl ? -offset : offset));

    if (this.itBeforeStart(translate)) {
      translate = this.getOffsetAtStart();
    } else if (this.itAfterEnd(translate)) {
      translate = this.getOffsetAtEnd();
    }
    return translate;
  }

  /** get item from key */
  public getItemByKey = (key: string | number): MenuItem => {
    return (
      this.menuItems.find(el => el[1].key === key) || [
        '',
        { key: 'n', elem: null, index: -1 },
      ]
    );
  }

  /** get index of item from it's key */
  public getItemIndexByKey = (itemKey: string): number => {
    if (!itemKey) {
      return -1;
    }
    return this.menuItems.findIndex(el => el[1].key === itemKey);
  }

  /** offset from start to item */
  public getOffsetToItemByIndex = ({
    index,
    menuItems = this.menuItems,
    translate = this.state.translate,
  }: {
    index: number;
    menuItems?: MenuItems;
    translate?: number;
  }): number => {
    if (!menuItems.length) {
      return 0;
    }
    const ind = index >= menuItems.length ? menuItems.length - 1 : index;
    const { x, x2 } = getClientRect(menuItems[ind][1].elem);
    const { rtl } = this.props;

    const position = rtl ? this.menuPos + this.menuWidth - translate - x2 : +x - translate - this.menuPos;

    return position;
  }

  /** get new offset value when scroll right */
  public getScrollRightOffset = (
    visibleItems: MenuItems,
    items: MenuItems = this.menuItems,
  ): number => {
    const { scrollBy, rtl } = this.props;

    const nextItemIndex = scrollBy
      ? visibleItems[0][1].index + scrollBy
      : rtl ? this.getPrevItem(
        ((visibleItems[0] && visibleItems[0][1]) || items[0][1]).key,
      )[1].index : this.getNextItem(
        ((visibleItems.slice(-1)[0] && visibleItems.slice(-1)) ||
          items.slice(-1))[0][1].key,
      )[1].index;

    const newOffset = -this.getOffsetToItemByIndex({
      index: nextItemIndex,
      menuItems: items,
    });

    return rtl ? -newOffset : newOffset;
  }

  /** get new offset value when scroll left */
  public getScrollLeftOffset = (
    visibleItems: MenuItems,
    items: MenuItems = this.menuItems,
  ): number => {
    const { scrollBy, rtl } = this.props;

    const prevItem = rtl ? this.getNextItem(
      ((visibleItems.slice(-1)[0] && visibleItems.slice(-1)) ||
        items.slice(-1))[0][1].key,
    ) : this.getPrevItem(
      ((visibleItems[0] && visibleItems[0][1]) || items[0][1]).key,
    );
    const prevItemIndex =
      prevItem[1].index - (scrollBy ? scrollBy - 1 : visibleItems.length);

    const newOffset = -this.getOffsetToItemByIndex({
      index: prevItemIndex < 0 ? 0 : prevItemIndex,
      menuItems: items,
    });

    return rtl ? -newOffset : newOffset;
  }

  /** get next item by key */
  public getNextItem = (key: string): MenuItem => {
    const { menuItems } = this;
    const itemIndex = menuItems.findIndex(el => el[1].key === key);
    const nextItemIndex = itemIndex + 1;
    const nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
    return nextItem;
  }

  /** get prev item by key */
  public getPrevItem = (key: string): MenuItem => {
    const { menuItems } = this;
    const itemIndex = menuItems.findIndex(el => el[1].key === key);
    const prevItemIndex = itemIndex - 1;
    const prevItem = menuItems[prevItemIndex] || menuItems[0];
    return prevItem;
  }

  /** get new offset value when scroll left/right */
  public getOffset = (
    left: boolean,
    items: MenuItems = this.menuItems,
  ): number => {
    const { rtl } =  this.props;

    left = rtl ? !left : left;
    const visibleItems = this.getVisibleItems({ items });
    const newOffset = left
      ? this.getScrollLeftOffset(visibleItems, items)
      : this.getScrollRightOffset(visibleItems, items);

    return rtl ? -newOffset : newOffset;
  }

  /** offset from 0 to first menu item when scroll,
   * need pass items visible on screen
   */
  public getCenterOffset = ({
    items = this.menuItems,
    menuWidth = this.menuWidth,
  }: {
    items?: MenuItems;
    menuWidth?: number;
  }): number => {
    if (!items.length) {
      return 0;
    }
    const itemsWidth = this.getItemsWidth({ items });

    return (menuWidth - itemsWidth) / 2;
  }

  /** mouse wheel handler */
  // TODO: gestureEvents
  public handleWheel = (e: WheelEvent): Void => {
    const { wheel } = this.props;
    if (!wheel) {
      return false;
    }
    if (e.deltaY < 0) {
      this.handleArrowClick();
    } else {
      this.handleArrowClick(false);
    }
  }

  /** offset at start */
  public getOffsetAtStart = (): number => {
    const { firstPageOffset } = this;
    const { alignCenter } = this.props;

    return alignCenter ? firstPageOffset : defaultProps.translate;
  }

  /** offset at end */
  public getOffsetAtEnd = (): number => {
    const { alignCenter } = this.props;
    const { allItemsWidth, menuWidth, lastPageOffset } = this;
    const offset = allItemsWidth - menuWidth;

    return alignCenter ? -offset - lastPageOffset : -offset;
  }

  /** click right arrow */
  public handleArrowClickRight = (): Void => {
    this.handleArrowClick(false);
  }

  /** click arrow/scroll */
  public handleArrowClick = (left = true): Void => {
    const { alignCenter, rtl } = this.props;
    const { allItemsWidth, menuWidth } = this;

    if (!alignCenter && !left && allItemsWidth < menuWidth) {
      return false;
    }
    let newTranslate = 0;

    const visibleItems = this.getVisibleItems({});
    const firstItemVisible = visibleItems[0] && visibleItems[0][1].index === 0;
    const lastItemVisible =
      visibleItems.slice(-1)[0] &&
      visibleItems.slice(-1)[0][1].index === this.menuItems.length - 1;

    const transl = this.getOffset(left);

    if (left && (firstItemVisible || this.itBeforeStart(transl))) {
      newTranslate = this.getOffsetAtStart();
    } else if (!left && (lastItemVisible || this.itAfterEnd(transl))) {
      newTranslate = this.getOffsetAtEnd();
    } else {
      // tslint:disable-next-line:no-shadowed-variable
      const visibleItems = () => this.getVisibleItems({ offset: transl });
      const centerOffset = alignCenter
        ? this.getCenterOffset({ items: visibleItems() })
        : 0;

      newTranslate = transl + centerOffset;
      if (rtl) {
        // TODO: continue here
        newTranslate = -this.menuPos - this.menuWidth - newTranslate;
      }
    }

    this.setState({
      startDragTranslate: 0,
      translate: newTranslate,
      xDraggedDistance: 0,
      xPoint: defaultProps.xPoint,
    });
  }

  /** check if position before first element */
  public itBeforeStart = (trans: number): boolean => {
    const { alignCenter } = this.props;
    const { menuWidth, allItemsWidth, firstPageOffset } = this;
    if (allItemsWidth < menuWidth) {
      return true;
    }
    return alignCenter
      ? trans > firstPageOffset
      : trans > defaultProps.translate;
  }
  /** check if position after last element */
  public itAfterEnd = (trans: number): boolean => {
    const { alignCenter } = this.props;
    const { menuWidth, allItemsWidth, lastPageOffset } = this;
    if (allItemsWidth < menuWidth) {
      return true;
    }

    return alignCenter
      ? trans < defaultProps.translate &&
          Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset
      : trans < defaultProps.translate &&
          Math.abs(trans) > allItemsWidth - menuWidth;
  }

  /** get coords from mouse event */
  public getPoint = (
    ev: React.MouseEvent | React.TouchEvent | Event,
  ): number => {
    if ('touches' in ev) {
      return ev.touches[0].clientX;
    } else if ('clientX' in ev) {
      return ev.clientX;
    } else {
      return 0;
    }
  }

  /** event handler when start drag and mouse down  */
  public handleDragStart = (ev: React.MouseEvent | React.TouchEvent): Void => {
    // 1 left button, 2 right button
    if (ev && 'buttons' in ev && ev.buttons === 2) {
      return false;
    }
    const { dragging: draggingEnable } = this.props;
    if (!draggingEnable) {
      return false;
    }
    const { translate: startDragTranslate } = this.state;

    // record drag events
    this.dragHistory = [{ time: Date.now(), position: startDragTranslate }];

    this.setState({
      dragging: true,
      startDragTranslate,
      xDraggedDistance: 0,
      xPoint: 0,
    });
  }

  /** drag event handler */
  public handleDrag = (
    e: React.MouseEvent | React.TouchEvent | Event,
  ): Void => {
    const { dragging: draggingEnable, rtl } = this.props;
    const { translate, dragging, xPoint, xDraggedDistance } = this.state;
    if (!draggingEnable || !dragging) {
      return false;
    }

    const point = this.getPoint(e);
    const diff =
      xPoint === defaultProps.xPoint ? defaultProps.xPoint : xPoint - point;
    let result = translate - (rtl ? -diff : diff);

    // don't let scroll over start and end
    if (this.itBeforeStart(result)) {
      result = result - Math.abs(diff) / 2;
    } else if (this.itAfterEnd(result)) {
      result = result + Math.abs(diff) / 2;
    }

    if (diff !== 0) {
      this.dragHistory.push({ time: Date.now(), position: result });
    }

    const newTranslate = result;

    this.setState({
      translate: newTranslate,
      xDraggedDistance: xDraggedDistance + Math.abs(diff),
      xPoint: point,
    });
  }

  /** event handler when drag and mouse up  */
  public handleDragStop = (
    e: React.MouseEvent | React.TouchEvent | Event,
  ): Void => {
    const { allItemsWidth, menuWidth } = this;
    let { translate, xPoint = this.getPoint(e) } = this.state;
    const { dragging, startDragTranslate } = this.state;
    const { dragging: draggingEnable, alignCenter } = this.props;
    if (!draggingEnable || !dragging) {
      return false;
    }

    // calculate inertia
    if (this.props.inertiaScrolling) {
      const currentTime = Date.now();
      const recentEntries = this.dragHistory.filter(
        entry => currentTime - entry.time < 150,
      );
      if (recentEntries.length > 2) {
        const first = recentEntries[0];
        const last = recentEntries[recentEntries.length - 1];
        let speed = (last.position - first.position) / (last.time - first.time);
        speed *= this.props.inertiaScrollingSlowdown;
        translate += speed * (this.props.transition * 1000);
      }
    }

    let newTranslate = translate;

    if (this.itBeforeStart(translate)) {
      newTranslate = this.getOffsetAtStart();
      xPoint = defaultProps.xPoint;
    } else if (this.itAfterEnd(translate)) {
      newTranslate = this.getOffsetAtEnd();
      xPoint = defaultProps.xPoint;
    }

    if (!alignCenter && allItemsWidth <= menuWidth) {
      newTranslate = defaultProps.translate;
      xPoint = defaultProps.xPoint;
    }

    this.setState(
      {
        dragging: false,
        translate: newTranslate,
        xPoint,
      },
      () =>
        this.onUpdate({
          translate: newTranslate,
          translateOld: startDragTranslate,
        }),
    );
  }

  /** check if no need show arrows */
  public isArrowsVisible = (): boolean => {
    const {
      allItemsWidth,
      menuWidth,
      props: { hideArrows },
    } = this;
    const hide = Boolean(hideArrows && allItemsWidth <= menuWidth);
    return !hide;
  }

  /** cb for position update */
  public onUpdate = ({
    translate = this.state.translate,
    translateOld = this.state.translate,
  }: {
    translate?: number;
    translateOld?: number;
  }): Void => {
    const { onUpdate } = this.props;
    const { lastTranslateUpdate } = this;
    if (translate !== translateOld && translate !== lastTranslateUpdate) {
      this.lastTranslateUpdate = translate;

      if (typeof onUpdate === 'function') {
        onUpdate({ translate });
      }
    }
  }

  public render(): React.ReactNode | null {
    const {
      arrowClass,
      arrowDisabledClass,
      arrowLeft,
      arrowRight,
      data,
      inertiaScrolling,
      innerWrapperStyle,
      innerWrapperClass,
      itemStyle,
      itemClass,
      itemClassActive,
      menuStyle,
      menuClass,
      transition,
      useButtonRole,
      wrapperClass,
      wrapperStyle,
      rtl,
    } = this.props;
    const {
      translate,
      dragging,
      leftArrowVisible,
      rightArrowVisible,
    } = this.state;
    const { selected, mounted } = this;

    if (!data || !data.length) {
      return null;
    }

    const arrowsVisible = mounted ? this.isArrowsVisible() : true;

    const menuStyles = { ...defaultMenuStyle, ...menuStyle };
    const wrapperStyles = { ...defaultWrapperStyle, ...wrapperStyle };
    const itemWrapperStyle = { ...defaultProps.itemStyle, ...itemStyle };

    // update default text alignment for rtl
    if (rtl) {
      innerWrapperStyle.textAlign = 'right';
    }

    const arrowProps = {
      className: arrowClass,
      disabledClass: arrowDisabledClass,
    };

    return (
      <div className={menuClass} style={menuStyles} onWheel={this.handleWheel}>
        {arrowLeft && (
          <ArrowWrapper
            {...arrowProps}
            isDisabled={!arrowsVisible || !leftArrowVisible}
            onClick={this.handleArrowClick}
          >
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
          onTouchMove={this.handleDrag}
        >
          <InnerWrapper
            data={data}
            translate={translate}
            dragging={dragging}
            mounted={mounted}
            transition={mounted ? transition : 0}
            selected={selected}
            setRef={this.setRef}
            setMenuInnerRef={this.setMenuInnerRef}
            onClick={this.onItemClick}
            innerWrapperStyle={innerWrapperStyle}
            innerWrapperClass={innerWrapperClass}
            itemStyle={itemWrapperStyle}
            itemClass={itemClass}
            itemClassActive={itemClassActive}
            inertiaScrolling={inertiaScrolling}
            useButtonRole={useButtonRole}
            rtl={rtl}
          />
        </div>

        {arrowRight && (
          <ArrowWrapper
            {...arrowProps}
            isDisabled={!arrowsVisible || !rightArrowVisible}
            onClick={this.handleArrowClickRight}
          >
            {arrowRight}
          </ArrowWrapper>
        )}
      </div>
    );
  }
}

export default ScrollMenu;
