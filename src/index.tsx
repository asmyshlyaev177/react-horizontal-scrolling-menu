import './styles.css';

import React from 'react';

import MenuItems from './components/MenuItems';
import ScrollContainer from './components/ScrollContainer';
import * as constants from './constants';
import { VisibilityContext } from './context';
import createApi, { type publicApiType } from './createApi';
import getItemsPos from './getItemsPos';
import { getElementOrConstructor, isRefObject } from './helpers';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useItemsChanged from './hooks/useItemsChanged';
import { useMenuVisible } from './hooks/useMenuVisible';
import { useOnCb } from './hooks/useOnCb';
import { ItemsMap } from './ItemsMap';
import { observerOptions as defaultObserverOptions } from './settings';
import { slidingWindow } from './slidingWindow';
import type {
  ItemChild,
  ItemId,
  Refs,
  RefType,
  ScrollBehaviorArg,
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
  children: ItemChild | ItemChild[];
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

    It receives the scroll container element itself, so it can also read or
    set scrollLeft before paint (see the InfiniteLoop example)

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
    Accessible name for the scroll container.

    The container always carries a tab stop, so a keyboard can scroll it with
    no item focusable. A label additionally makes it a `region` a screen reader
    announces by name ("Categories, region") — use your visible heading's
    wording, in your own language.
   */
  scrollContainerLabel?: string;
  /**
    For add custom className for wrapper
   */
  wrapperClassName?: string;
  /**
    Ref object for access VisibilityContextApi outside of context

    e.g. apiRef.current?.scrollToItem(...)
   */
  // Accepts every useRef shape; the legacy MutableRefObject is assignable too.
  apiRef?:
    React.RefObject<publicApiType | null> | React.RefCallback<publicApiType>;
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
  scrollContainerLabel,
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
  // A ref rather than a plain object: items publish their nodes into this map
  // from their ref callbacks, and mutating ref contents outside render is the
  // sanctioned escape hatch. The registry stays owned here — items get
  // `registerItemRef` rather than the map itself, so nothing mutates a prop.
  const menuItemsRefs = React.useRef<Refs>({});

  const registerItemRef = React.useCallback(
    (index: number, node: HTMLElement | null) => {
      menuItemsRefs.current[String(index)] = { current: node };
    },
    [],
  );

  // `root` is resolved from `scrollContainerRef` inside useIntersectionObserver's
  // layout effect. Reading `.current` here would both be unsafe during render and
  // capture `null`, because this memo only recomputes when `options` changes.
  const observerOptions = React.useMemo(
    () => ({
      ...defaultObserverOptions,
      ...options,
    }),
    [options],
  );

  // Lazy useState rather than `useRef(new ItemsMap()).current`: that read the ref
  // during render and allocated a throwaway ItemsMap on every render.
  const [items] = React.useState(() => new ItemsMap());

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
      root: scrollContainerRef,
    }),
    [items, itemsChanged, menuItemsRefs, observerOptions],
  );
  useIntersectionObserver(ioOptions);

  // `menuVisible` and `boundary` are ref objects that createApi stores and reads
  // at call time, not during render. They are part of publicApiType, so this
  // cannot be avoided without a breaking API change.
  /* eslint-disable react-hooks/refs */
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
  /* eslint-enable react-hooks/refs */

  /* eslint-disable react-hooks/refs -- publicApiType carries the
     scrollContainer/menuVisible refs by contract */
  const getContext = React.useCallback(
    // Descriptor copy, not spread — a spread would freeze the visibility getters.
    () =>
      Object.assign(
        Object.defineProperties({}, Object.getOwnPropertyDescriptors(api)),
        { items, scrollContainer: scrollContainerRef, menuVisible },
      ) as publicApiType,
    [api, items, scrollContainerRef, menuVisible],
  );

  // `context` is derived entirely from `getContext`, so it is memoised rather
  // than mirrored into state and resynced from an effect. The old form rendered
  // once with a stale context before the effect corrected it.
  const context = React.useMemo<publicApiType>(
    () => getContext(),
    [getContext],
  );
  /* eslint-enable react-hooks/refs */

  useOnCb({ context, onInit, onUpdate });

  // Publishing into a caller-supplied ref is the documented contract of the
  // `apiRef` prop, so this mutation is deliberate.
  /* eslint-disable react-hooks/immutability */
  React.useEffect(() => {
    if (isRefObject(apiRef)) {
      apiRef.current = context;
    } else {
      apiRef(context);
    }
  }, [context, apiRef]);
  /* eslint-enable react-hooks/immutability */

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

  // Pointer props are handler factories: they take the context during render.
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
            label={scrollContainerLabel}
            onScroll={scrollHandler}
            scrollRef={scrollContainerRef}
            containerRef={containerRef}
          >
            <MenuItems
              registerRef={registerItemRef}
              itemClassName={itemClassName}
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

export { constants, getItemsPos, ScrollMenu, slidingWindow, VisibilityContext };
export type { ItemId, publicApiType };
