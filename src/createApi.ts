import {
  filterSeparators,
  scrollToItem,
  getItemElementById,
  getItemElementByIndex,
} from './helpers';
import ItemsMap from './ItemsMap';

import type {
  CustomScrollBehavior,
  ItemOrElement,
  scrollToItemOptions,
  visibleItems,
} from './types';

export default function createApi(
  items: ItemsMap,
  visibleItems: visibleItems = [],
  boundaryElement?: React.MutableRefObject<HTMLElement | null>,
  transitionOptions?: {
    duration?: number;
    ease?: (t: number) => number;
    behavior: string | Function;
  }
) {
  const visibleItemsWithoutSeparators = filterSeparators(visibleItems);

  const isFirstItemVisible = !!items.first()?.visible;
  const isLastItemVisible = !!items.last()?.visible;

  const getItemById = (id: string) =>
    items.find((value) => value[1].key === String(id))?.[1];

  const getItemByIndex = (index: number | string) =>
    items.find((el) => String(el[1].index) === String(index))?.[1];

  const isItemVisible = (id: string) => visibleItems.includes(id);

  const getPrevItem = () => items.prev(items.getVisible()?.[0]?.[1]);

  const getNextItem = () =>
    items.next(items.getVisible()?.slice?.(-1)?.[0]?.[1]);

  const isLastItem = (id: string) => items.last() === getItemById(id);

  const scrollPrev = <T>(
    behavior?: CustomScrollBehavior<T>,
    inline?: ScrollLogicalPosition,
    block?: ScrollLogicalPosition,
    {
      duration,
      ease,
      boundary = boundaryElement?.current,
    }: scrollToItemOptions = {}
  ) => {
    const _behavior = (behavior ??
      transitionOptions?.behavior) as ScrollBehavior;

    return scrollToItem(
      getPrevItem(),
      _behavior,
      inline || 'end',
      block || 'nearest',
      {
        boundary,
        duration: duration ?? transitionOptions?.duration,
        ease: ease ?? transitionOptions?.ease,
      }
    );
  };

  const scrollNext = <T>(
    behavior?: CustomScrollBehavior<T>,
    inline?: ScrollLogicalPosition,
    block?: ScrollLogicalPosition,
    {
      duration,
      ease,
      boundary = boundaryElement?.current,
    }: scrollToItemOptions = {}
  ) => {
    const _behavior = (behavior ??
      transitionOptions?.behavior) as ScrollBehavior;

    return scrollToItem(
      getNextItem(),
      _behavior,
      inline || 'start',
      block || 'nearest',
      {
        boundary,
        duration: duration ?? transitionOptions?.duration,
        ease: ease ?? transitionOptions?.ease,
      }
    );
  };

  return {
    getItemById,
    getItemElementById: (id: string | number) =>
      getItemElementById(id, boundaryElement?.current),
    getItemByIndex,
    getItemElementByIndex: (id: string | number) =>
      getItemElementByIndex(id, boundaryElement?.current),
    getNextItem,
    getPrevItem,
    isFirstItemVisible,
    isItemVisible,
    isLastItem,
    isLastItemVisible,
    scrollNext,
    scrollPrev,
    scrollToItem: <T>(
      target?: ItemOrElement,
      behavior?: CustomScrollBehavior<T>,
      inline?: ScrollLogicalPosition,
      block?: ScrollLogicalPosition,
      options?: scrollToItemOptions
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _behavior: any = behavior ?? transitionOptions?.behavior;
      return scrollToItem(target, _behavior, inline, block, {
        boundary: boundaryElement?.current,
        ...options,
        duration: options?.duration ?? transitionOptions?.duration,
        ease: options?.ease ?? transitionOptions?.ease,
      });
    },
    visibleItems,
    visibleItemsWithoutSeparators,
  };
}

export interface publicApiType extends ReturnType<typeof createApi> {
  initComplete: boolean;
  items: ItemsMap;
  scrollContainer: React.RefObject<HTMLElement | null>;
  visibleItems: visibleItems;
}
