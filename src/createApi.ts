import React from 'react';

import { ItemsMap } from './ItemsMap';
import {
  getItemElementById,
  getItemElementByIndex,
  scrollToItem,
} from './helpers';

import type {
  IOItem,
  ItemId,
  ItemOrElement,
  ScrollBehaviorArg,
  scrollToItemOptions,
} from './types';

type ScrollOptions = Omit<scrollToItemOptions, 'behavior'>;

// eslint-disable-next-line max-lines-per-function
export default function createApi(
  items: ItemsMap,
  transitionOptions?: {
    duration?: scrollToItemOptions['duration'];
    behavior?: scrollToItemOptions['behavior'];
    boundary?: React.MutableRefObject<scrollToItemOptions['boundary']>;
  },
  noPolyfill?: boolean,
) {
  const useIsVisible = (itemId: ItemId, defaultValue: boolean = false) => {
    const [visible, setVisible] = React.useState(defaultValue);
    const cb = React.useCallback((newVal?: IOItem) => {
      setVisible(!!newVal?.visible);
    }, []);

    React.useEffect(() => {
      items.subscribe(itemId, cb);

      return () => {
        items.unsubscribe(itemId, cb);
      };
    }, [itemId, cb]);

    return visible;
  };

  const isFirstItemVisible = !!items.first()?.visible;
  const isLastItemVisible = !!items.last()?.visible;

  const getItemById = (id: ItemId) =>
    items.find((value) => value[1].key === String(id))?.[1];

  const getItemByIndex = (index: number | string) =>
    items.find((el) => String(el[1].index) === String(index))?.[1];

  const isItemVisible = (id: ItemId) =>
    items
      .getVisible()
      .map((el) => el[0])
      .includes(String(id));

  const getPrevElement = () => {
    const first = items.getVisible()?.[0]?.[1];
    return first ? items.prev(first) : undefined;
  };

  const getNextElement = () => {
    const last = items.getVisible().findLast(() => true)?.[1];
    return last ? items.next(last) : undefined;
  };

  const isLastItem = (id: ItemId) => items.last() === getItemById(id);

  const defaultBoundary = transitionOptions?.boundary?.current;

  const scrollPrev = (
    behavior?: ScrollBehaviorArg,
    inline?: ScrollLogicalPosition,
    block?: ScrollLogicalPosition,
    { duration, boundary = defaultBoundary }: ScrollOptions = {},
    // eslint-disable-next-line max-params
  ) => {
    const _behavior = behavior ?? transitionOptions?.behavior;

    return scrollToItem(
      getPrevElement(),
      _behavior,
      inline || 'end',
      block || 'nearest',
      {
        boundary,
        duration: duration ?? transitionOptions?.duration,
      },
      noPolyfill,
    );
  };

  const scrollNext = (
    behavior?: ScrollBehaviorArg,
    inline?: ScrollLogicalPosition,
    block?: ScrollLogicalPosition,
    { duration, boundary = defaultBoundary }: ScrollOptions = {},
    // eslint-disable-next-line max-params
  ) => {
    const _behavior = behavior ?? transitionOptions?.behavior;

    return scrollToItem(
      getNextElement(),
      _behavior,
      inline || 'start',
      block || 'nearest',
      {
        boundary,
        duration: duration ?? transitionOptions?.duration,
      },
      noPolyfill,
    );
  };

  return {
    /**
     * Get an item by id
     *
     * * example:
     * ```
     *  const item = getItemById('test1')
     *  // { index: '1', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * ```
     */
    getItemById,
    /**
     * Get an item node by id
     *
     * * example:
     * ```
     *  const item = getItemElementById('test1')
     *  // DomNode
     * ```
     */
    getItemElementById,
    /**
     * Get an item by index
     *
     * * example:
     * ```
     *  const item = getItemByIndex('1')
     *  // { index: '1', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * ```
     */
    getItemByIndex,
    /**
     * Get an item node by index
     *
     * * example:
     * ```
     *  const item = getItemElementById('1')
     *  // DomNode
     * ```
     */
    getItemElementByIndex,
    /**
     * Get a next item after last currently visible
     *
     * * example:
     * ```
     *  const next = getNextElement()
     *  // { index: '5', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * ```
     */
    getNextElement,
    /**
     * Get an item before first currently visible
     *
     * * example:
     * ```
     *  const prev = getPrevElement()
     *  // { index: '1', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * ```
     */
    getPrevElement,
    isFirstItemVisible,
    /**
     * Return item visibility
     *
     * * example:
     * ```
     *  const visible = isItemVisible('item1')
     *  // true || false
     * ```
     */
    isItemVisible,
    /**
     * Return if item is a last item
     *
     * * example:
     * ```
     *  const isLast = isLastItem('item100')
     *  // true || false
     * ```
     */
    isLastItem,
    isLastItemVisible,
    /**
     * Scroll to next group of items
     *
     * * example:
     * ```
     *  scrollNext(
     *   'auto' | 'instant' | 'smooth',
     *   'center' | 'end' | 'nearest' | 'start',
     *   'center' | 'end' | 'nearest' | 'start'
     * )
     * ```
     */
    scrollNext,
    /**
     * Scroll to previous group of items
     *
     * * example:
     * ```
     *  scrollPrev(
     *   'auto' | 'instant' | 'smooth',
     *   'center' | 'end' | 'nearest' | 'start',
     *   'center' | 'end' | 'nearest' | 'start'
     * )
     * ```
     */
    scrollPrev,
    /**
     * Hook to subscribe to visibility updates
     *
     * * example:
     * ```
     *  const visible = useIsVisible('first' | 'last' | 'itemId1' )
     *  // true | false
     * ```
     */
    useIsVisible,
    /**
     * Scroll to some item
     *
     * * example:
     * ```
     *  scrollToItem(
     *   itemInstance || 'itemId',
     *   'auto' | 'instant' | 'smooth',
     *   'center' | 'end' | 'nearest' | 'start',
     *   'center' | 'end' | 'nearest' | 'start'
     * )
     * ```
     */
    // eslint-disable-next-line max-params
    scrollToItem: (
      target?: ItemOrElement,
      behavior?: ScrollBehaviorArg,
      inline?: ScrollLogicalPosition,
      block?: ScrollLogicalPosition,
      options?: scrollToItemOptions,
    ) => {
      const _behavior = behavior ?? transitionOptions?.behavior;
      return scrollToItem(
        target,
        _behavior,
        inline,
        block,
        {
          boundary: defaultBoundary,
          ...options,
          duration: options?.duration ?? transitionOptions?.duration,
        },
        noPolyfill,
      );
    },
  };
}

export interface publicApiType extends ReturnType<typeof createApi> {
  items: ItemsMap;
  scrollContainer: React.RefObject<HTMLElement | null>;
  menuVisible: { current: boolean };
}
