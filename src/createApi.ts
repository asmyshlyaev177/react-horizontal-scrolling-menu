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
    getItemById,
    getItemElementById,
    getItemByIndex,
    getItemElementByIndex,
    getNextElement,
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
