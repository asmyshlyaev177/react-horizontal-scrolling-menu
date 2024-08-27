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
    [items, options, wrapperVisible, addPriority, schedule, add, running],
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

  const getItems = React.useCallback(
    (ref: typeof queue | typeof priorityQueue) => {
      return ref.current;
    },
    [],
  );

  const isVisible = React.useCallback(() => {
    return wrapperVisible.current;
  }, [running]);

  const run = React.useCallback(() => {
    if (!isVisible()) {
      clearTimeout(timer.current);
      schedule();
      return;
    }

    items.setBatch(
      filterQueue(getItems(queue), dedupeEntries(getItems(priorityQueue))),
    );
  }, [queue, priorityQueue, getItems, isVisible, items]);

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
    }, 200);
  }, [items, run]);

  const cleanup = React.useCallback(() => {
    queue.current = [];
    priorityQueue.current = [];
    clearTimeout(timer.current);
  }, []);

  const add = React.useCallback((entries: Item[]) => {
    clearTimeout(timer.current);
    running.current = false;
    schedule();
    queue.current.push(...entries);
  }, []);

  const addPriority = React.useCallback((entries: Item[]) => {
    clearTimeout(timer.current);
    running.current = false;
    schedule();
    priorityQueue.current.push(...entries);
  }, []);

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
