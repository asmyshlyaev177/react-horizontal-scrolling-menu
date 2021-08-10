import React from 'react';

import './styles.css';

import ScrollContainer from './components/ScrollContainer';
import MenuItems from './components/MenuItems';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useItemsChanged from './hooks/useItemsChanged';
import useIsMounted from './hooks/useIsMounted';
import createApi, { publicApiType } from './createApi';
import ItemsMap from './ItemsMap';
import { observerOptions as defaultObserverOptions } from './settings';

import * as constants from './constants';

import { VisibilityContext } from './context';

import type { ItemType, Refs } from './types';

interface Props {
  LeftArrow?: React.FC;
  RightArrow?: React.FC;
  children: ItemType | ItemType[];
  onInit?: (api: publicApiType) => void;
  onScroll?: (api: publicApiType, ev: React.UIEvent) => void;
  onWheel?: (api: publicApiType, ev: React.WheelEvent) => void;
  options?: Partial<typeof defaultObserverOptions>;
  onMouseDown?: (arg0: publicApiType) => React.MouseEventHandler;
  onMouseUp?: (arg0: publicApiType) => React.MouseEventHandler;
  onMouseMove?: (arg0: publicApiType) => React.MouseEventHandler;
  wrapperClassName?: string;
}

function ScrollMenu({
  LeftArrow,
  RightArrow,
  children,
  onInit = (): void => void 0,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onScroll = (): void => void 0,
  onWheel = (): void => void 0,
  options = defaultObserverOptions,
  wrapperClassName = '',
}: Props): JSX.Element {
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

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(children, menuItemsRefs);

  const items = React.useRef(new ItemsMap()).current;
  const { visibleItems } = useIntersectionObserver({
    items,
    itemsChanged,
    options: observerOptions,
    refs: menuItemsRefs,
  });

  const publicApi = React.useRef<publicApiType>({} as publicApiType);

  const onInitFired = useIsMounted(() => onInit(publicApi.current));

  const initComplete = Boolean(onInitFired && !!visibleItems.length);

  const api = React.useMemo(
    () => createApi(items, visibleItems),
    [items, visibleItems]
  );

  publicApi.current = React.useMemo(
    () => ({
      ...api,
      initComplete,
      items,
      scrollContainer: scrollContainerRef,
      visibleItems,
    }),
    [api, initComplete, items, visibleItems]
  );

  const scrollHandler = React.useCallback(
    (event: React.UIEvent) => onScroll(publicApi.current, event),
    [onScroll, publicApi]
  );

  const onWheelHandler = React.useCallback(
    (event: React.WheelEvent) => onWheel(publicApi.current, event),
    [onWheel, publicApi]
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${constants.wrapperClassName} ${wrapperClassName}`}
      onWheel={onWheelHandler}
      onMouseDown={onMouseDown?.(publicApi.current)}
      onMouseUp={onMouseUp?.(publicApi.current)}
      onMouseMove={onMouseMove?.(publicApi.current)}
    >
      <VisibilityContext.Provider value={publicApi.current}>
        {LeftArrow ? <LeftArrow /> : null}
        <ScrollContainer
          onScroll={scrollHandler}
          scrollRef={scrollContainerRef}
        >
          <MenuItems refs={menuItemsRefs}>{children}</MenuItems>
        </ScrollContainer>
        {RightArrow ? <RightArrow /> : null}
      </VisibilityContext.Provider>
    </div>
  );
}

export { constants, ScrollMenu, VisibilityContext };
