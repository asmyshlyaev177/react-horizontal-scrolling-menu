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

  const { schedule, add, addPriority, cleanup } = useQueue(
    items,
    wrapperVisible,
  );

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const parsedEntries = observerEntriesToItems(entries, options);

      if (wrapperVisible.current) {
        addPriority(parsedEntries);
      } else {
        add(parsedEntries);
      }
      schedule();
    },
    [options, wrapperVisible, addPriority, schedule, add],
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

  const cancel = React.useCallback(() => {
    clearTimeout(timer.current);
    running.current = false;
  }, [timer, running]);

  const run = React.useCallback(() => {
    if (!isVisible()) {
      cancel();
      schedule();
      return;
    }

    items.setBatch(
      filterQueue(queue.current, dedupeEntries(priorityQueue.current)),
    );
  }, [cancel, queue, priorityQueue, isVisible, items]);

  const schedule = React.useCallback(() => {
    if (running.current) {
      return;
    }
    running.current = true;
    timer.current = setTimeout(
      () => {
        run();
        queue.current = [];
        priorityQueue.current = [];
        running.current = false;
      },
      isVisible() ? 0 : 100,
    );
  }, [run, priorityQueue, queue, isVisible]);

  const cleanup = React.useCallback(() => {
    cancel();
    queue.current = [];
    priorityQueue.current = [];
  }, [priorityQueue, queue, cancel]);

  const add = React.useCallback(
    (entries: Item[]) => {
      cancel();
      queue.current.push(...entries);
      schedule();
    },
    [queue, schedule, cancel],
  );

  const addPriority = React.useCallback(
    (entries: Item[]) => {
      cancel();
      priorityQueue.current.push(...entries);
      schedule();
    },
    [priorityQueue, schedule, cancel],
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
