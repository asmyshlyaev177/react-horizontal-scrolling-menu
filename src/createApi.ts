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
  boundaryElement?: React.MutableRefObject<HTMLElement | null>
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
    behavior: CustomScrollBehavior<T> = 'smooth',
    inline: ScrollLogicalPosition = 'end',
    block: ScrollLogicalPosition = 'nearest',
    {
      duration,
      ease,
      boundary = boundaryElement?.current,
    }: scrollToItemOptions = {}
  ) =>
    scrollToItem(getPrevItem(), behavior, inline, block, {
      boundary,
      duration,
      ease,
    });

  const scrollNext = <T>(
    behavior: CustomScrollBehavior<T> = 'smooth',
    inline: ScrollLogicalPosition = 'start',
    block: ScrollLogicalPosition = 'nearest',
    {
      duration,
      ease,
      boundary = boundaryElement?.current,
    }: scrollToItemOptions = {}
  ) => {
    return scrollToItem(getNextItem(), behavior, inline, block, {
      boundary,
      duration,
      ease,
    });
  };

  return {
    getItemById,
    getItemElementById,
    getItemByIndex,
    getItemElementByIndex,
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
    ) =>
      scrollToItem(target, behavior, inline, block, {
        boundary: boundaryElement?.current,
        ...options,
      }),
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
