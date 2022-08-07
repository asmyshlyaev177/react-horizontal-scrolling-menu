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

type ComponentType = React.ReactNode | JSX.Element | React.FC;

export interface Props {
  /**
   Header component on top, can contain Arrows
   */
  Header?: ComponentType;
  /**
   Footer component on bottom, can contain Arrows
   */
  Footer?: ComponentType;
  /**
   Component for left arrow

   e.g. LeftArrow={Arrow}

   or LeftArrow={<Arrow {...props />}}
   */
  LeftArrow?: ComponentType;
  /**
   Component for right arrow

   e.g. RightArrow={Arrow}

   or RightArrow={<Arrow {...props />}}
   */
  RightArrow?: ComponentType;
  /**
    Every child should has unique `itemId` prop
   */
  children: ItemType | ItemType[];
  /**
    Duration of transition
   */
  transitionDuration?: number;
  /**
    Ease function for transition

    Example -  t => t*(2-t)

    Full list at https://gist.github.com/gre/1650294#file-easing-js
   */
  transitionEase?: (t: number) => number;
  /**
    Transition behavior can be 'smooth', 'auto' or custom function

    Example:

    (instructions) => {
      const [{ el, left }] = instructions;
      const styler = Styler(el);

      animate({
        from: el.scrollLeft,
        to: left,
        type: 'spring',
        onUpdate: (left) => styler.set('scrollLeft', left),
      });
    }
   */
  transitionBehavior?: string | Function;
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
  RTL?: boolean;
  /**
    Disable scrollIntoView polyfill
   */
  noPolyfill?: boolean;
}

/**
  See docs and examples at

  https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
 */
function ScrollMenu({
  LeftArrow: _LeftArrow,
  RightArrow: _RightArrow,
  children,
  Header: _Header,
  Footer: _Footer,
  transitionDuration = 500,
  transitionEase,
  transitionBehavior,
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
  RTL,
  noPolyfill,
}: Props): JSX.Element {
  const LeftArrow = getElementOrConstructor(_LeftArrow);
  const RightArrow = getElementOrConstructor(_RightArrow);
  const Header = getElementOrConstructor(_Header);
  const Footer = getElementOrConstructor(_Footer);

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
  const mounted = !!visibleItems.length;

  const api = React.useMemo(
    () =>
      createApi(
        items,
        visibleItems,
        scrollContainerRef,
        {
          duration: transitionDuration,
          ease: transitionEase,
          behavior: transitionBehavior!,
        },
        RTL,
        noPolyfill
      ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, visibleItems, itemsChanged, RTL, noPolyfill]
  );

  const getContext = React.useCallback(
    () => ({
      ...api,
      initComplete: mounted,
      items,
      visibleItems,
      scrollContainer: scrollContainerRef,
    }),
    [api, mounted, items, visibleItems, scrollContainerRef]
  );

  const [context, setContext] = React.useState<publicApiType>(getContext);

  const onInitCbFired = useOnInitCb({
    cb: () => onInit(context),
    condition: mounted,
  });

  useOnUpdate({
    cb: () => onUpdate(context),
    condition: onInitCbFired,
    hash: JSON.stringify(
      visibleItems
        .concat(String(context?.isFirstItemVisible))
        .concat(String(context?.isLastItemVisible))
    ),
  });

  React.useEffect(() => setContext(getContext()), [getContext]);

  apiRef.current = context;

  const scrollHandler = React.useCallback(
    (event: React.UIEvent) => onScroll(context, event),
    [onScroll, context]
  );

  const onWheelHandler = React.useCallback(
    (event: React.WheelEvent) => onWheel(context, event),
    [onWheel, context]
  );

  const wrapperClass: string = React.useMemo(
    () => `${constants.wrapperClassName} ${wrapperClassName}`,
    [wrapperClassName]
  );

  const containerClassName = React.useMemo(
    () => `${scrollContainerClassName}${RTL ? ' rtl' : ''}`,
    [RTL, scrollContainerClassName]
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={wrapperClass}
      onWheel={onWheelHandler}
      onMouseDown={onMouseDown?.(context)}
      onMouseUp={onMouseUp?.(context)}
      onMouseMove={onMouseMove?.(context)}
    >
      <VisibilityContext.Provider value={context}>
        <div className={constants.headerClassName}>{Header}</div>
        <div className={constants.innerWrapperClassName}>
          <div className={constants.arrowLeftClassName}>{LeftArrow}</div>
          <ScrollContainer
            className={containerClassName}
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
          <div className={constants.arrowRightClassName}>{RightArrow}</div>
        </div>
        <div className={constants.footerClassName}>{Footer}</div>
      </VisibilityContext.Provider>
    </div>
  );
}

export { constants, getItemsPos, slidingWindow, ScrollMenu, VisibilityContext };
