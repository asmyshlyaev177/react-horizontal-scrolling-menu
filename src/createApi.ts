import React from 'react';

import { events } from './constants';
import {
  getItemElementById,
  getItemElementByIndex,
  scrollToItem,
} from './helpers';
import { ItemsMap } from './ItemsMap';
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
  menuVisible: { current: boolean },
  transitionOptions?: {
    duration?: scrollToItemOptions['duration'];
    behavior?: scrollToItemOptions['behavior'];
    boundary?: React.RefObject<scrollToItemOptions['boundary']>;
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

      // The observer's first batch can already have been delivered: items are
      // observed in a layout effect, and WebKit runs the intersection update
      // in the first rendering step after that — before the passive effects
      // this subscription lives in. An emit with no subscriber is lost, so
      // read the map directly or the item would keep defaultValue until the
      // next scroll re-classifies it.
      const key = String(itemId);
      const current =
        key === events.first
          ? items.first()
          : key === events.last
            ? items.last()
            : items.get(key as ItemId);
      if (current) {
        setVisible(!!current.visible);
      }

      return () => {
        items.unsubscribe(itemId, cb);
      };
    }, [itemId, cb]);

    return visible;
  };

  const useLeftArrowVisible = () => {
    const isFirstItemVisible = useIsVisible('first', true);

    const [disabled, setDisabled] = React.useState(isFirstItemVisible);
    React.useEffect(() => {
      if (menuVisible.current) {
        setDisabled(isFirstItemVisible);
      }
    }, [isFirstItemVisible]);

    return disabled;
  };

  const useRightArrowVisible = () => {
    const isLastItemVisible = useIsVisible('last', false);

    const [disabled, setDisabled] = React.useState(isLastItemVisible);
    React.useEffect(() => {
      if (menuVisible.current) {
        setDisabled(isLastItemVisible);
      }
    }, [isLastItemVisible]);

    return disabled;
  };

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
    /** Live getter — a plain value would go stale on the memoised apiRef. */
    get isFirstItemVisible() {
      return !!items.first()?.visible;
    },
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
    /** Live getter — see isFirstItemVisible. */
    get isLastItemVisible() {
      return !!items.last()?.visible;
    },
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
     * Hook that return visibility of Left Arrow
     *
     * * example:
     * ```
     *  const visible = useLeftArrowVisible()
     *  // true | false
     * ```
     */
    useLeftArrowVisible,
    /**
     * Hook that return visibility of Right Arrow
     *
     * * example:
     * ```
     *  const visible = useRightArrowVisible()
     *  // true | false
     * ```
     */
    useRightArrowVisible,

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
