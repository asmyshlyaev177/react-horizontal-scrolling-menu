import React from 'react';

import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import { ItemsMap } from '../ItemsMap';
import { observerOptions } from '../settings';
import type { Refs } from '../types';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: { current: Refs };
  root: { current: Element | null };
}

function useIntersectionObserver({
  items,
  itemsChanged,
  refs,
  options,
  root,
}: Props) {
  const observer: { current?: IntersectionObserver } = React.useRef<
    IntersectionObserver | undefined
  >(undefined);

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      items.setBatch(observerEntriesToItems(entries, options));
    },
    [items, options],
  );

  useIsomorphicLayoutEffect(() => {
    const elements = getNodesFromRefs(refs.current);
    // Resolved here rather than during render: `root.current` is only populated
    // once the scroll container has mounted, and reading a ref during render is
    // unsafe under the React Compiler.
    const observerInstance =
      observer.current ||
      new IntersectionObserver(ioCb, { ...options, root: root.current });
    observer.current = observerInstance;
    elements.forEach((elem) => observerInstance.observe(elem));

    return () => {
      observerInstance.disconnect();
      observer.current = undefined;
    };
  }, [ioCb, itemsChanged, options, refs, root]);
}

export default useIntersectionObserver;
