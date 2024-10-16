import React from 'react';

import './styles.css';

import { ItemsMap } from './ItemsMap';
import MenuItems from './components/MenuItems';
import ScrollContainer from './components/ScrollContainer';
import * as constants from './constants';
import { VisibilityContext } from './context';
import createApi, { type publicApiType } from './createApi';
import getItemsPos from './getItemsPos';
import { getElementOrConstructor, isMutableRef } from './helpers';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useItemsChanged from './hooks/useItemsChanged';
import { useMenuVisible } from './hooks/useMenuVisible';
import { useOnCb } from './hooks/useOnCb';
import { observerOptions as defaultObserverOptions } from './settings';
import { slidingWindow } from './slidingWindow';

import type {
  ItemType,
  Refs,
  ScrollBehaviorArg,
  ItemId,
  RefType,
} from './types';

type ComponentType = React.ReactNode | React.JSX.Element | React.FC;

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
    Transition behavior can be 'smooth', 'auto' or custom function

    Example:

    (instructions) => {
      const [{ el, left }] = instructions;
      const styler = Styler(el);

      animate({
        from: el.scrollLeft,
        to: left,
        ease: easingFunctions.easeInOutCubic,
        duration: 500,
        onUpdate: (left) => styler.set('scrollLeft', left),
      });
    }
   */
  transitionBehavior?: ScrollBehaviorArg;
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
  onMouseLeave?: (arg0: publicApiType) => React.MouseEventHandler;
  onMouseUp?: (arg0: publicApiType) => React.MouseEventHandler;
  onMouseMove?: (arg0: publicApiType) => React.MouseEventHandler;
  onTouchMove?: (arg0: publicApiType) => React.TouchEventHandler;
  onTouchStart?: (arg0: publicApiType) => React.TouchEventHandler;
  onTouchEnd?: (arg0: publicApiType) => React.TouchEventHandler;
  /**
    Ref object that will be passed to ScrollContainer, immediate parent of items

    Usable for animations with formkit/auto-animate
   */
  containerRef?: RefType<Element | null>;
  /**
    For add custom className for item
   */
  itemClassName?: string;
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
  apiRef?:
    | React.MutableRefObject<publicApiType>
    | React.RefCallback<publicApiType>;
  RTL?: boolean;
  /**
    Disable scrollIntoView polyfill
   */
  // TODO: true by default
  noPolyfill?: boolean;
}

const apiRefDefault = { current: {} as publicApiType };
const cbDefault = (): void => void 0;

/**
  See docs and examples at

  https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
 */
// eslint-disable-next-line max-lines-per-function
function ScrollMenu({
  LeftArrow: _LeftArrow,
  RightArrow: _RightArrow,
  children,
  Header: _Header,
  Footer: _Footer,
  transitionDuration = 500,
  transitionBehavior,
  onInit = cbDefault,
  onUpdate = cbDefault,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
  onMouseMove,
  onScroll = cbDefault,
  onTouchMove,
  onTouchStart,
  onTouchEnd,
  onWheel = cbDefault,
  options = defaultObserverOptions,
  scrollContainerClassName = constants.emptyStr,
  containerRef = constants.emptyRef,
  itemClassName = constants.emptyStr,
  wrapperClassName = constants.emptyStr,
  apiRef = apiRefDefault,
  RTL,
  noPolyfill = true,
}: Props): React.JSX.Element {
  const LeftArrow = getElementOrConstructor(_LeftArrow);
  const RightArrow = getElementOrConstructor(_RightArrow);
  const Header = getElementOrConstructor(_Header);
  const Footer = getElementOrConstructor(_Footer);

  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [menuItemsRefs] = React.useState<Refs>({});

  const observerOptions = React.useMemo(
    () => ({
      ...defaultObserverOptions,
      ...options,
      root: scrollContainerRef.current,
    }),
    [options],
  );

  const items = React.useRef(new ItemsMap()).current;

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(children, items);

  const menuVisible = useMenuVisible(
    scrollContainerRef,
    observerOptions.ratio + 0.05 < 1 ? observerOptions.ratio + 0.05 : 0.95,
  );
  const ioOptions = React.useMemo(
    () => ({
      items,
      itemsChanged,
      options: observerOptions,
      refs: menuItemsRefs,
    }),
    [items, itemsChanged, menuItemsRefs, observerOptions],
  );
  useIntersectionObserver(ioOptions);

  const api = React.useMemo(
    () =>
      createApi(
        items,
        menuVisible,
        {
          duration: transitionDuration,
          behavior: transitionBehavior,
          boundary: scrollContainerRef,
        },
        noPolyfill,
      ),
    [items, transitionDuration, transitionBehavior, noPolyfill, menuVisible],
  );

  const getContext = React.useCallback(
    () => ({
      ...api,
      items,
      scrollContainer: scrollContainerRef,
      menuVisible,
    }),
    [api, items, scrollContainerRef, menuVisible],
  );

  const [context, setContext] = React.useState<publicApiType>(() =>
    getContext(),
  );

  useOnCb({ context, onInit, onUpdate });

  React.useEffect(() => setContext(getContext()), [getContext]);

  React.useEffect(() => {
    if (isMutableRef(apiRef)) {
      apiRef.current = context;
    } else {
      apiRef(context);
    }
  }, [context, apiRef]);

  const scrollHandler = React.useCallback(
    (event: React.UIEvent) => onScroll(context, event),
    [onScroll, context],
  );

  const onWheelHandler = React.useCallback(
    (event: React.WheelEvent) => onWheel(context, event),
    [onWheel, context],
  );

  const wrapperClass: string = React.useMemo(
    () => `${constants.wrapperClassName} ${wrapperClassName}`,
    [wrapperClassName],
  );

  const containerClassName = React.useMemo(
    () => `${scrollContainerClassName}${RTL ? ' rtl' : constants.emptyStr}`,
    [RTL, scrollContainerClassName],
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={wrapperClass}
      onWheel={onWheelHandler}
      onMouseDown={onMouseDown?.(context)}
      onMouseLeave={onMouseLeave?.(context)}
      onMouseUp={onMouseUp?.(context)}
      onMouseMove={onMouseMove?.(context)}
      onTouchStart={onTouchStart?.(context)}
      onTouchMove={onTouchMove?.(context)}
      onTouchEnd={onTouchEnd?.(context)}
    >
      <VisibilityContext.Provider value={context}>
        <div className={constants.headerClassName}>{Header}</div>
        <div className={constants.innerWrapperClassName}>
          <div className={constants.arrowLeftClassName}>{LeftArrow}</div>
          <ScrollContainer
            className={containerClassName}
            onScroll={scrollHandler}
            scrollRef={scrollContainerRef}
            containerRef={containerRef}
          >
            <MenuItems refs={menuItemsRefs} itemClassName={itemClassName}>
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
export type { publicApiType, ItemId };
