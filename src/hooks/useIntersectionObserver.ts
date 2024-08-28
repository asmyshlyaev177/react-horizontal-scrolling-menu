import React from 'react';

import { ItemsMap } from '../ItemsMap';
import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import { observerOptions } from '../settings';
import { type Refs, type Item } from '../types';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useIntersectionObserver({
  items,
  itemsChanged,
  refs,
  options,
  wrapperVisible,
}: Props) {
  const observer = React.useRef<IntersectionObserver>();

  const { schedule, add, addPriority, running, cleanup } = useQueue(
    items,
    wrapperVisible,
  );

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const parsedEntries = observerEntriesToItems(entries, options);

      if (wrapperVisible.current && !running.current) {
        addPriority(parsedEntries);
        schedule();
      } else if (wrapperVisible.current && running.current) {
        addPriority(parsedEntries);
      } else {
        add(parsedEntries);
      }
    },
    [options, wrapperVisible, addPriority, schedule, add, running],
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
      cleanup();
    };
  }, [ioCb, itemsChanged, options, refs, cleanup]);
}

const useQueue = (items: ItemsMap, wrapperVisible: { current: boolean }) => {
  const queue = React.useRef<Item[]>([]);
  const priorityQueue = React.useRef<Item[]>([]);
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  const running = React.useRef(false);

  const isVisible = React.useCallback(() => {
    return wrapperVisible.current;
  }, [wrapperVisible]);

  const run = React.useCallback(() => {
    if (!isVisible()) {
      clearTimeout(timer.current);
      schedule();
      return;
    }

    items.setBatch(
      filterQueue(queue.current, dedupeEntries(priorityQueue.current)),
    );
  }, [queue, priorityQueue, isVisible, items]);

  const schedule = React.useCallback(() => {
    if (running.current) {
      return;
    }
    running.current = true;
    timer.current = setTimeout(() => {
      run();
      queue.current = [];
      priorityQueue.current = [];
      running.current = false;
    }, 100);
  }, [run, priorityQueue, queue]);

  const cleanup = React.useCallback(() => {
    clearTimeout(timer.current);
    queue.current = [];
    priorityQueue.current = [];
  }, [priorityQueue, queue]);

  const add = React.useCallback(
    (entries: Item[]) => {
      clearTimeout(timer.current);
      running.current = false;
      queue.current.push(...entries);
      schedule();
    },
    [queue, running, schedule, timer],
  );

  const addPriority = React.useCallback(
    (entries: Item[]) => {
      clearTimeout(timer.current);
      running.current = false;
      priorityQueue.current.push(...entries);
      schedule();
    },
    [priorityQueue, schedule, running, timer],
  );

  return {
    schedule,
    add,
    addPriority,
    running,
    cleanup,
  };
};

const filterQueue = (queue: Item[], priorityEntries: Item[]) => {
  return dedupeEntries(queue)
    .filter((it) => !priorityEntries.find((en) => en[0] === it[0]))
    .concat(priorityEntries);
};

const dedupeEntries = (entries: Item[]) => {
  const result: Item[] = [];

  entries.reverse().forEach((en) => {
    if (!result.find((it) => it[0] === en[0])) {
      result.push(en);
    }
  });

  return result.reverse();
};

export default useIntersectionObserver;

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: Refs;
  wrapperVisible: { current: boolean };
}
