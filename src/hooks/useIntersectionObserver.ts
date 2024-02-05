import React from 'react';

import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import type { Item, Refs, visibleElements } from '../types';
import { observerOptions } from '../settings';
import ItemsMap from '../ItemsMap';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: Refs;
}

function useIntersection({ items, itemsChanged, refs, options }: Props) {
  const observer: { current?: IntersectionObserver } = React.useRef();

  const [visibleElementsWithSeparators, setVisibleElementsWithSeparators] =
    React.useState<visibleElements>([]);

  const throttleTimer: { current: number } = React.useRef(
    +setTimeout(() => void 0, 0),
  );

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      items.set(observerEntriesToItems(entries, options));

      clearTimeout(throttleTimer.current);
      throttleTimer.current = +setTimeout(
        () =>
          requestAnimationFrame(() => {
            setVisibleElementsWithSeparators((currentVisible) => {
              const newVisibleElements = items
                .getVisible()
                .map((el: Item) => el[1].key);
              if (
                JSON.stringify(currentVisible) !==
                JSON.stringify(newVisibleElements)
              ) {
                return newVisibleElements;
              }
              return currentVisible;
            });
          }),
        options.throttle,
      );
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
      clearTimeout(throttleTimer.current);
      observerInstance.disconnect();
      observer.current = undefined;
    };
  }, [ioCb, itemsChanged, options, refs]);

  return visibleElementsWithSeparators;
}
export default useIntersection;
