import React from 'react';

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
  visibleElements,
} from './types';

export default function createApi(
  items: ItemsMap,
  visibleElementsWithSeparators: visibleElements = [],
  boundaryElement?: React.MutableRefObject<HTMLElement | null>,
  transitionOptions?: {
    duration?: number;
    ease?: (t: number) => number;
    behavior: CustomScrollBehavior<unknown>;
  },
  RTL?: boolean,
  noPolyfill?: boolean
) {
  const visibleElements = filterSeparators(visibleElementsWithSeparators);

  const isFirstItemVisible = !!items.first()?.visible;
  const isLastItemVisible = !!items.last()?.visible;

  const getItemById = (id: string) =>
    items.find((value) => value[1].key === String(id))?.[1];

  const getItemByIndex = (index: number | string) =>
    items.find((el) => String(el[1].index) === String(index))?.[1];

  const isItemVisible = (id: string) => visibleElements.includes(String(id));

  const getPrevItem = () => items.prev(items.getVisible()?.[0]?.[1]);

  const getPrevElement = () =>
    items.prev(items.getVisibleElements()?.[0]?.[1], true);

  const getNextItem = () =>
    items.next(items.getVisible()?.slice?.(-1)?.[0]?.[1]);

  const getNextElement = () =>
    items.next(items.getVisibleElements()?.slice?.(-1)?.[0]?.[1], true);

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
      },
      RTL || noPolyfill
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
      },
      RTL || noPolyfill
    );
  };

  return {
    getItemById,
    getItemElementById,
    getItemByIndex,
    getItemElementByIndex,
    getNextItem,
    getNextElement,
    getPrevItem,
    getPrevElement,
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
      const _behavior = behavior ?? transitionOptions?.behavior;
      return scrollToItem(
        target,
        _behavior,
        inline,
        block,
        {
          boundary: boundaryElement?.current,
          ...options,
          duration: options?.duration ?? transitionOptions?.duration,
          ease: options?.ease ?? transitionOptions?.ease,
        },
        noPolyfill
      );
    },
    visibleElements,
    visibleElementsWithSeparators,

    visibleItems: visibleElementsWithSeparators,
    visibleItemsWithoutSeparators: visibleElements,
  };
}

export interface publicApiType extends ReturnType<typeof createApi> {
  initComplete: boolean;
  items: ItemsMap;
  scrollContainer: React.RefObject<HTMLElement | null>;

  visibleElements: visibleElements;
  visibleElementsWithSeparators: visibleElements;
  /**
    Deprecated, use visibleElementsWithSeparators
   */
  visibleItems: visibleElements;
  /**
    Deprecated, use visibleElements
   */
  visibleItemsWithoutSeparators: visibleElements;
}
