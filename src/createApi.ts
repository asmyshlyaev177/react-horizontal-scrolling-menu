import React from 'react';

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
  transitionOptions?: {
    duration?: scrollToItemOptions['duration'];
    behavior?: scrollToItemOptions['behavior'];
    boundary?: React.MutableRefObject<scrollToItemOptions['boundary']>;
  },
  noPolyfill?: boolean,
) {
  const useIsVisible = (itemId: ItemId, defaultValue: boolean = false) => {
    const [visible, setVisible] = React.useState(defaultValue);

    React.useEffect(() => {
      const cb = (newVal?: IOItem) => {
        // TODO: where is better to use raf when value set or when events fired?
        setVisible(!!newVal?.visible);
      };
      items.subscribe(itemId, cb);

      return () => {
        items.unsubscribe(itemId, cb);
      };
    }, [itemId]);

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
      .getVisibleElements()
      .map((el) => el[0])
      .includes(String(id));

  const getPrevItem = () => {
    const first = items.getVisible()?.[0]?.[1];
    return first ? items.prev(first) : undefined;
  };

  const getPrevElement = () => {
    const first = items.getVisibleElements()?.[0]?.[1];
    return first ? items.prev(first, true) : undefined;
  };

  const getNextItem = () => {
    const last = items.getVisible().findLast(() => true)?.[1];
    return last ? items.next(last) : undefined;
  };

  const getNextElement = () => {
    const last = items.getVisibleElements().findLast(() => true)?.[1];
    return last ? items.next(last, true) : undefined;
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
      getPrevItem(),
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
      getNextItem(),
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
    useIsVisible,
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
}
