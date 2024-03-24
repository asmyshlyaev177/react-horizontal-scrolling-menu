import type { visibleElements } from '../types';

export function prevGroup(
  allItems: visibleElements,
  visibleElements: visibleElements,
): visibleElements {
  const firstIndex = allItems.findIndex(
    (item) => item === visibleElements?.[0],
  );

  const count = visibleElements.length;

  const _nextGroupFirstItem = firstIndex - count;

  const isEnd = _nextGroupFirstItem < 0;

  const nextGroupFirstItem = isEnd ? 0 : _nextGroupFirstItem;
  const prev = allItems.slice(nextGroupFirstItem, isEnd ? count : firstIndex);

  // when have prev items
  if (prev.length === count) {
    return prev;
    // when no prev group
  } else {
    return allItems.slice(firstIndex, count);
  }
}

export function nextGroup(
  allItems: visibleElements,
  visibleElements: visibleElements,
): visibleElements {
  const lastIndex = allItems.findIndex(
    (item) => item === visibleElements.slice(-1)?.[0],
  );

  const count = visibleElements.length;

  const _nextGroupLastItem = lastIndex + count + 1;

  const isEnd = _nextGroupLastItem > allItems.length - 1;

  const nextGroupLastItem = isEnd ? allItems.length - 1 : _nextGroupLastItem;
  const next = allItems.slice(
    isEnd ? nextGroupLastItem - count + 1 : lastIndex + 1,
    nextGroupLastItem,
  );

  // when have next items
  if (next.length === count) {
    return next;
    // when no next group
  } else {
    return allItems.slice(allItems.length - count, allItems.length + count);
  }
}

export function slidingWindow(
  allItems: visibleElements,
  visibleElements: visibleElements,
): {
  prev: () => visibleElements;
  next: () => visibleElements;
} {
  return {
    prev: () => {
      return prevGroup(allItems, visibleElements);
    },
    next: () => {
      return nextGroup(allItems, visibleElements);
    },
  };
}
