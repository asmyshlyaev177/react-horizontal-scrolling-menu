import { separatorString } from '../constants';
import type { visibleElements } from '../types';
import { filterSeparators } from '../helpers';

const addSeparators = (items: visibleElements): visibleElements =>
  items
    .reduce(
      (result, item) => result.concat(item).concat(`${item}${separatorString}`),
      <visibleElements>[],
    )
    .slice(0, -1);

export function prevGroup(
  allItems: visibleElements,
  visibleElementsWithSeparators: visibleElements,
): visibleElements {
  const firstIndex = allItems.findIndex(
    (item) => item === visibleElementsWithSeparators?.[0],
  );

  const count = visibleElementsWithSeparators.length;

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
  visibleElementsWithSeparators: visibleElements,
): visibleElements {
  const lastIndex = allItems.findIndex(
    (item) => item === visibleElementsWithSeparators.slice(-1)?.[0],
  );

  const count = visibleElementsWithSeparators.length;

  // TODO:
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
  visibleElementsWithSeparators: visibleElements,
): {
  prev: () => visibleElements;
  next: () => visibleElements;
} {
  const _allItems = filterSeparators(allItems);
  const visibleElements = filterSeparators(visibleElementsWithSeparators);

  return {
    prev: () => {
      return addSeparators(prevGroup(_allItems, visibleElements));
    },
    next: () => {
      return addSeparators(nextGroup(_allItems, visibleElements));
    },
  };
}
