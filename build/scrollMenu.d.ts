import React from 'react';
import { MenuProps, Ref, RefObject, Void } from './types';
interface MenuState {
    dragging: boolean;
    xPoint: number;
    translate: number;
    startDragTranslate: number;
    xDraggedDistance: number;
    leftArrowVisible: boolean;
    rightArrowVisible: boolean;
}
export declare class ScrollMenu extends React.Component<MenuProps, MenuState> {
    static defaultProps: MenuProps;
    private ref;
    private mounted;
    private needUpdate;
    private allItemsWidth;
    private menuPos;
    private menuWidth;
    private wWidth;
    private firstPageOffset;
    private lastPageOffset;
    private lastTranslateUpdate;
    private menuItems;
    private selected;
    private onLoadTimer;
    private rafTimer;
    constructor(props: MenuProps);
    state: {
        dragging: boolean;
        xPoint: number;
        translate: number;
        startDragTranslate: number;
        xDraggedDistance: number;
        leftArrowVisible: boolean;
        rightArrowVisible: boolean;
    };
    componentDidMount(): Void;
    shouldComponentUpdate(nextProps: MenuProps, nextState: MenuState): boolean;
    componentDidUpdate(prevProps: MenuProps, prevState: MenuState): Void;
    componentWillUnmount(): Void;
    setRef: (ref: RefObject) => Void;
    setWrapperRef: (ref: Ref) => Void;
    checkSingleArrowVisibility: ({ translate }: {
        translate?: number | undefined;
    }) => {
        leftArrowVisible: boolean;
        rightArrowVisible: boolean;
    };
    setSingleArrowVisibility: () => Void;
    onLoad: () => Void;
    setInitial: () => Void;
    isScrollNeeded: ({ itemId, translate }: {
        itemId: string;
        translate?: number | undefined;
    }) => boolean;
    scrollTo: (itemKey: string) => Void;
    getMenuItems: (dataLength: number) => [string, Ref][];
    getItemsWidth: ({ items }: {
        items?: [string, Ref][] | undefined;
    }) => number;
    getWidth: ({ items }: {
        items: [string, Ref][];
    }) => {
        wWidth: number;
        menuPos: number;
        menuWidth: number;
        allItemsWidth: number;
    };
    updateWidth: ({ items, ...args }: {
        [x: string]: any;
        items?: [string, Ref][] | undefined;
    }) => {
        wWidth: number;
        menuPos: number;
        menuWidth: number;
        allItemsWidth: number;
        firstPageOffset?: number | undefined;
        lastPageOffset?: number | undefined;
        translate?: number | undefined;
    };
    getPagesOffsets: ({ items, allItemsWidth, wWidth, menuPos, menuWidth, translate, offset, }: {
        items?: [string, Ref][] | undefined;
        allItemsWidth?: number | undefined;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
        translate?: number | undefined;
        offset?: number | undefined;
    }) => {
        firstPageOffset: number;
        lastPageOffset: number;
        translate: number;
    };
    onItemClick: (id: string) => Void;
    getVisibleItems: ({ items, wWidth, menuPos, menuWidth, offset, translate, }: {
        items?: [string, Ref][] | undefined;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
        offset?: number | undefined;
        translate?: number | undefined;
    }) => [string, Ref][];
    elemVisible: ({ x, offset, elWidth, wWidth, menuPos, menuWidth, }: {
        x: any;
        offset?: number | undefined;
        elWidth: any;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
    }) => boolean;
    getItemInd: (menuItems: [string, Ref][], item: [string, Ref]) => number;
    getNextItemInd: (left: boolean, visibleItems: [string, Ref][]) => number;
    getOffsetToItemByKey: (key: string) => number;
    getItemIndexByKey: (itemKey: string) => number;
    getOffsetToItemByIndex: ({ index, menuItems, translate, }: {
        index: any;
        menuItems?: [string, Ref][] | undefined;
        translate?: number | undefined;
    }) => number;
    getScrollRightOffset: (visibleItems: [string, Ref][], items: [string, Ref][]) => number;
    getScrollLeftOffset: (visibleItems: [string, Ref][], items: [string, Ref][]) => number;
    getAlignItemsOffset: () => number;
    getNextItem: (key: string) => [string, Ref];
    getPrevItem: (key: string) => [string, Ref];
    getOffset: (left: boolean) => number;
    getCenterOffset: ({ items, menuWidth }: {
        items?: [string, Ref][] | undefined;
        menuWidth?: number | undefined;
    }) => number;
    handleWheel: (e: React.WheelEvent<Element>) => Void;
    getOffsetAtStart: () => number;
    getOffsetAtEnd: () => number;
    handleArrowClickRight: () => Void;
    handleArrowClick: (left?: boolean) => Void;
    itBeforeStart: (trans: number) => boolean;
    itAfterEnd: (trans: number) => boolean;
    getPoint: (ev: Event | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => number;
    handleDragStart: (ev: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => Void;
    handleDrag: (e: Event | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => Void;
    handleDragStop: (e: Event | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => Void;
    isArrowsVisible: () => boolean;
    onUpdate: ({ translate, translateOld, }: {
        translate?: number | undefined;
        translateOld?: number | undefined;
    }) => Void;
    render(): JSX.Element | null;
}
export default ScrollMenu;
//# sourceMappingURL=scrollMenu.d.ts.map