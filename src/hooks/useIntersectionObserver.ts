import React from 'react';

import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import { Item, Refs, visibleItems } from '../types';
import { observerOptions } from '../settings';
import ItemsMap from '../ItemsMap';

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: Refs;
}

// TODO: tests
function useIntersection({ items, itemsChanged, refs, options }: Props) {
  const observer: { current?: IntersectionObserver } = React.useRef();

  const [visibleItems, setVisibleItems] = React.useState<visibleItems>([]);

  const throttleTimer: { current: NodeJS.Timeout } = React.useRef(
    setTimeout(() => false)
  );

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const newItems = observerEntriesToItems(entries, options);
      items.set(newItems);

      clearTimeout(throttleTimer.current);
      throttleTimer.current = setTimeout(
        () =>
          window &&
          window.requestAnimationFrame(() => {
            setVisibleItems((currentVisible) => {
              const newVisibleItems = items
                .getVisible()
                .map((el: Item) => el[1].key);
              if (
                JSON.stringify(currentVisible) !==
                JSON.stringify(newVisibleItems)
              ) {
                return newVisibleItems;
              }
              return currentVisible;
            });
          }),
        options.throttle
      );
    },
    [items, options]
  );

  React.useLayoutEffect(() => {
    const elements = getNodesFromRefs(refs);
    observer.current = new IntersectionObserver(ioCb, options);
    elements.forEach((elem) => observer.current?.observe(elem!));

    return () => {
      clearTimeout(throttleTimer.current);
      observer.current?.disconnect();
      observer.current = undefined;
    };
  }, [ioCb, itemsChanged, options, refs]);

  return { visibleItems };
}

export default useIntersection;
