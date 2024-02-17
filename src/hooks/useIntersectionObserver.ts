import React from 'react';

import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import type { Refs } from '../types';
import { observerOptions } from '../settings';
import { ItemsMap } from '../ItemsMap';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: Refs;
}

function useIntersectionObserver({
  items,
  itemsChanged,
  refs,
  options,
}: Props) {
  const observer: { current?: IntersectionObserver } = React.useRef();

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      items.setBatch(observerEntriesToItems(entries, options));
    },
    [items, options],
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
