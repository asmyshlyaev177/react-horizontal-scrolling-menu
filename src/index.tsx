import React from 'react';

import './styles.css';

import ScrollContainer from './components/ScrollContainer';
import MenuItems from './components/MenuItems';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useItemsChanged from './hooks/useItemsChanged';
import createApi, { publicApiType } from './createApi';
import ItemsMap from './ItemsMap';
import { observerOptions as defaultObserverOptions } from './settings';

import * as constants from './constants';

import useOnInitCb from './hooks/useOnInitCb';
import useOnUpdate from './hooks/useOnUpdate';

import { VisibilityContext } from './context';

import type { ItemType, Refs } from './types';
import { getElementOrConstructor } from './helpers';

import slidingWindow from './slidingWindow';
import getItemsPos from './getItemsPos';

type ArrowType = React.FC | React.ReactNode;
export interface Props {
  /**
   Component for left arrow

   e.g. LeftArrow={Arrow}

   or LeftArrow={<Arrow {...props />}}
   */
  LeftArrow?: ArrowType;
  /**
   Component for right arrow

   e.g. RightArrow={Arrow}

   or RightArrow={<Arrow {...props />}}
   */
  RightArrow?: ArrowType;
  /**
    Every child should has unique `itemId` prop
   */
  children: ItemType | ItemType[];
  /**
   Callback that fire once on init
   */
  onInit?: (api: publicApiType) => void;
  /**
   Callback that fire every time when visibility of items change
   */
  onUpdate?: (api: publicApiType) => void;
  /**
   Callback that fire on scroll event
   */
  onScroll?: (api: publicApiType, ev: React.UIEvent) => void;
  /**
   Handler for mouse wheel
   */
  onWheel?: (api: publicApiType, ev: React.WheelEvent) => void;
  /**
    Options for intersection observer
   */
  options?: Partial<typeof defaultObserverOptions>;
  onMouseDown?: (arg0: publicApiType) => React.MouseEventHandler;
  onMouseUp?: (arg0: publicApiType) => React.MouseEventHandler;
  onMouseMove?: (arg0: publicApiType) => React.MouseEventHandler;
  /**
    For add custom className for item 
   */
  itemClassName?: string;
  /**
    For add custom className for item separator 
   */
  separatorClassName?: string;
  /**
    For add custom className for scroll container 
   */
  scrollContainerClassName?: string;
  /**
    For add custom className for wrapper
   */
  wrapperClassName?: string;
  /**
    Ref object for access VisibilityContextApi outside of context

    e.g. apiRef.current.scrollToItem(...)
   */
  apiRef?: React.MutableRefObject<publicApiType>;
}

/**
  See docs and examples at
  
  https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
 */
function ScrollMenu({
  LeftArrow: _LeftArrow,
  RightArrow: _RightArrow,
  children,
  onInit = (): void => void 0,
  onUpdate = (): void => void 0,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onScroll = (): void => void 0,
  onWheel = (): void => void 0,
  options = defaultObserverOptions,
  scrollContainerClassName = '',
  itemClassName = '',
  separatorClassName = '',
  wrapperClassName = '',
  apiRef = { current: {} as publicApiType },
}: Props): JSX.Element {
  const LeftArrow = getElementOrConstructor(_LeftArrow);
  const RightArrow = getElementOrConstructor(_RightArrow);

  const scrollContainerRef = React.useRef(null);
  const [menuItemsRefs] = React.useState<Refs>({});

  const observerOptions = React.useMemo(
    () => ({
      ...defaultObserverOptions,
      ...options,
      root: scrollContainerRef.current,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options, scrollContainerRef.current]
  );

  const items = React.useRef(new ItemsMap()).current;

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(children, items);

  const { visibleItems } = useIntersectionObserver({
    items,
    itemsChanged,
    options: observerOptions,
    refs: menuItemsRefs,
  });

  const publicApi = React.useRef<publicApiType>({} as publicApiType);

  const mounted = !!visibleItems.length;

  const onInitCbFired = useOnInitCb({
    cb: () => onInit(publicApi.current),
    condition: mounted,
  });

  useOnUpdate({
    cb: () => onUpdate(publicApi.current),
    condition: onInitCbFired,
    visibleItems,
  });

  const api = React.useMemo(
    () => createApi(items, visibleItems),
    [items, visibleItems]
  );
  publicApi.current = React.useMemo(
    () => ({
      ...api,
      initComplete: mounted,
      items,
      scrollContainer: scrollContainerRef,
    }),
    [api, mounted, items]
  );

  apiRef.current = publicApi.current;

  const scrollHandler = React.useCallback(
    (event: React.UIEvent) => onScroll(publicApi.current, event),
    [onScroll, publicApi]
  );

  const onWheelHandler = React.useCallback(
    (event: React.WheelEvent) => onWheel(publicApi.current, event),
    [onWheel, publicApi]
  );

  const wrapperClass: string = React.useMemo(
    () => `${constants.wrapperClassName} ${wrapperClassName}`,
    [wrapperClassName]
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={wrapperClass}
      onWheel={onWheelHandler}
      onMouseDown={onMouseDown?.(publicApi.current)}
      onMouseUp={onMouseUp?.(publicApi.current)}
      onMouseMove={onMouseMove?.(publicApi.current)}
    >
      <VisibilityContext.Provider value={publicApi.current}>
        {LeftArrow}
        <ScrollContainer
          className={scrollContainerClassName}
          onScroll={scrollHandler}
          scrollRef={scrollContainerRef}
        >
          <MenuItems
            refs={menuItemsRefs}
            itemClassName={itemClassName}
            separatorClassName={separatorClassName}
          >
            {children}
          </MenuItems>
        </ScrollContainer>
        {RightArrow}
      </VisibilityContext.Provider>
    </div>
  );
}

export { constants, getItemsPos, slidingWindow, ScrollMenu, VisibilityContext };
