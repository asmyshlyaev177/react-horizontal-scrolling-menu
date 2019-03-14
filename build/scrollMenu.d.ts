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
    private menuWrapper;
    private menuInner;
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
    private resizeTimer;
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
    setMenuInnerRef: (ref: Ref) => void;
    setWrapperRef: (ref: Ref) => Void;
    checkSingleArrowVisibility: ({ translate, }: {
        translate?: number | undefined;
    }) => {
        leftArrowVisible: boolean;
        rightArrowVisible: boolean;
    };
    setSingleArrowVisibility: () => Void;
    onLoad: () => Void;
    resizeHandler: () => Void;
    resize: () => Void;
    setInitial: () => Void;
    isScrollNeeded: ({ itemId, translate, }: {
        itemId: string;
        translate?: number | undefined;
    }) => boolean;
    scrollTo: (itemKey: string) => Void;
    getMenuItems: () => [string, {
        key: string;
        elem: Ref;
    }][];
    getItemsWidth: ({ items, }: {
        items?: [string, {
            key: string;
            elem: Ref;
        }][] | undefined;
    }) => number;
    getWidth: ({ items, }: {
        items: [string, {
            key: string;
            elem: Ref;
        }][];
    }) => {
        wWidth: number;
        menuPos: number;
        menuWidth: number;
        allItemsWidth: number;
    };
    updateWidth: ({ items, }: {
        items?: [string, {
            key: string;
            elem: Ref;
        }][] | undefined;
    }) => {
        wWidth: number;
        menuPos: number;
        menuWidth: number;
        allItemsWidth: number;
        firstPageOffset: number;
        lastPageOffset: number;
    };
    getFirstPageOffset: ({ items, offset, wWidth, menuPos, menuWidth, }: {
        items: [string, {
            key: string;
            elem: Ref;
        }][];
        offset: number;
        wWidth: number;
        menuPos: number;
        menuWidth: number;
    }) => number;
    getLastPageOffset: ({ items, allItemsWidth, wWidth, menuPos, menuWidth, }: {
        items: [string, {
            key: string;
            elem: Ref;
        }][];
        allItemsWidth: number;
        wWidth: number;
        menuPos: number;
        menuWidth: number;
    }) => number;
    getPagesOffsets: ({ items, allItemsWidth, wWidth, menuPos, menuWidth, offset, }: {
        items?: [string, {
            key: string;
            elem: Ref;
        }][] | undefined;
        allItemsWidth?: number | undefined;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
        offset?: number | undefined;
    }) => {
        firstPageOffset: number;
        lastPageOffset: number;
    };
    onItemClick: (id: string) => Void;
    getVisibleItems: ({ items, wWidth, menuPos, menuWidth, offset, translate, }: {
        items?: [string, {
            key: string;
            elem: Ref;
        }][] | undefined;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
        offset?: number | undefined;
        translate?: number | undefined;
    }) => [string, {
        key: string;
        elem: Ref;
    }][];
    elemVisible: ({ x, offset, elWidth, wWidth, menuPos, menuWidth, }: {
        x: number;
        offset: number;
        elWidth: number;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
    }) => boolean;
    getItemInd: (menuItems: [string, {
        key: string;
        elem: Ref;
    }][] | undefined, item: [string, {
        key: string;
        elem: Ref;
    }]) => number;
    getNextItemInd: (left: boolean, visibleItems: [string, {
        key: string;
        elem: Ref;
    }][]) => number;
    getOffsetToItemByKey: (key: string) => number;
    getItemByKey: (key: string) => [string, {
        key: string;
        elem: Ref;
    }];
    getItemIndexByKey: (itemKey: string) => number;
    getOffsetToItemByIndex: ({ index, menuItems, translate, }: {
        index: number;
        menuItems?: [string, {
            key: string;
            elem: Ref;
        }][] | undefined;
        translate?: number | undefined;
    }) => number;
    getScrollRightOffset: (visibleItems: [string, {
        key: string;
        elem: Ref;
    }][], items: [string, {
        key: string;
        elem: Ref;
    }][]) => number;
    getScrollLeftOffset: (visibleItems: [string, {
        key: string;
        elem: Ref;
    }][], items: [string, {
        key: string;
        elem: Ref;
    }][]) => number;
    getNextItem: (key: string) => [string, {
        key: string;
        elem: Ref;
    }];
    getPrevItem: (key: string) => [string, {
        key: string;
        elem: Ref;
    }];
    getOffset: (left: boolean) => number;
    getCenterOffset: ({ items, menuWidth, }: {
        items?: [string, {
            key: string;
            elem: Ref;
        }][] | undefined;
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
    render(): React.ReactNode | null;
}
export default ScrollMenu;
//# sourceMappingURL=scrollMenu.d.ts.map