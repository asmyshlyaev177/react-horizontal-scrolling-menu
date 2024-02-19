import React from 'react';

import {
  getItemElementById,
  getItemElementByIndex,
  scrollToItem,
} from './helpers';
import { ItemsMap } from './ItemsMap';

import type {
  IOItem,
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
    ease?: scrollToItemOptions['ease'];
    behavior?: scrollToItemOptions['behavior'];
    boundary?: React.MutableRefObject<scrollToItemOptions['boundary']>;
  },
  noPolyfill?: boolean,
) {
  const useIsVisible = (itemId: string, defaultValue: boolean = false) => {
    // TODO: useDeferredValue only for React 18?
    const [visible, setVisible] = React.useState(defaultValue);

    React.useEffect(() => {
      const cb = (newVal?: IOItem) => {
        setVisible(!!newVal?.visible);
      };
      items.subscribe(itemId, cb);

      return () => {
        items.unsubscribe(cb);
      };
    }, [itemId]);

    return visible;
  };

  const isFirstItemVisible = !!items.first()?.visible;
  const isLastItemVisible = !!items.last()?.visible;

  const getItemById = (id: string) =>
    items.find((value) => value[1].key === String(id))?.[1];

  const getItemByIndex = (index: number | string) =>
    items.find((el) => String(el[1].index) === String(index))?.[1];

  const isItemVisible = (id: string) =>
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

  const isLastItem = (id: string) => items.last() === getItemById(id);

  const defaultBoundary = transitionOptions?.boundary?.current;

  const scrollPrev = (
    behavior?: ScrollBehaviorArg,
    inline?: ScrollLogicalPosition,
    block?: ScrollLogicalPosition,
    { duration, ease, boundary = defaultBoundary }: ScrollOptions = {},
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
        ease: ease ?? transitionOptions?.ease,
      },
      noPolyfill,
    );
  };

  const scrollNext = (
    behavior?: ScrollBehaviorArg,
    inline?: ScrollLogicalPosition,
    block?: ScrollLogicalPosition,
    { duration, ease, boundary = defaultBoundary }: ScrollOptions = {},
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
        ease: ease ?? transitionOptions?.ease,
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
          ease: options?.ease ?? transitionOptions?.ease,
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
