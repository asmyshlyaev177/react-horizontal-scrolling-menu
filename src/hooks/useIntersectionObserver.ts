import React from 'react';

import { ItemsMap } from '../ItemsMap';
import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import { observerOptions } from '../settings';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

import type { Refs } from '../types';

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: Refs;
  wrapperVisible: { current: boolean };
}

function useIntersectionObserver({
  items,
  itemsChanged,
  refs,
  options,
  wrapperVisible,
}: Props) {
  const observer = React.useRef<IntersectionObserver>();

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (wrapperVisible.current) {
        items.setBatch(observerEntriesToItems(entries, options));
      }
    },
    [items, options, wrapperVisible],
  );

  useIsomorphicLayoutEffect(() => {
    const elements = getNodesFromRefs(refs);
    const observerInstance =
      observer.current || new IntersectionObserver(ioCb, options);
    observer.current = observerInstance;
    elements.forEach((elem) => observerInstance.observe(elem));

    return () => {
      observerInstance.disconnect();
      observer.current = undefined;
    };
  }, [ioCb, itemsChanged, options, refs]);
}

export default useIntersectionObserver;
