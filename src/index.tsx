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

import { ItemType, Refs } from './types';

interface Props {
  LeftArrow: React.ElementType;
  RightArrow: React.ElementType;
  children: ItemType | ItemType[];
  onInit: (api: publicApiType) => void;
  onScroll: (api: publicApiType, ev: React.UIEvent) => void;
  onWheel: (api: publicApiType, ev: React.WheelEvent) => void;
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
    [options]
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

  // TODO: it fires before have any visible items
  const initComplete = useIsMounted(() => onInit(publicApi));

  const api = React.useMemo(
    () => createApi(items, visibleItems),
    [items, visibleItems]
  );

  const publicApi: publicApiType = React.useMemo(
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
    (event: React.UIEvent) => onScroll(publicApi, event),
    [onScroll, publicApi]
  );

  const onWheelHandler = React.useCallback(
    (event: React.WheelEvent) => onWheel(publicApi, event),
    [onWheel, publicApi]
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${constants.wrapperClassName} ${wrapperClassName}`}
      onWheel={onWheelHandler}
      onMouseDown={onMouseDown?.(publicApi)}
      onMouseUp={onMouseUp?.(publicApi)}
      onMouseMove={onMouseMove?.(publicApi)}
    >
      <VisibilityContext.Provider value={publicApi}>
        <LeftArrow />
        <ScrollContainer
          onScroll={scrollHandler}
          scrollRef={scrollContainerRef}
        >
          <MenuItems refs={menuItemsRefs}>{children}</MenuItems>
        </ScrollContainer>
        <RightArrow />
      </VisibilityContext.Provider>
    </div>
  );
}

export { constants, ScrollMenu, VisibilityContext };
