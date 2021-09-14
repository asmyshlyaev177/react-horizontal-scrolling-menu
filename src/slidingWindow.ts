/* eslint-disable @typescript-eslint/no-explicit-any */
import { separatorString } from './constants';
import { visibleItems as itemsArr } from './types';
import { filterSeparators } from './helpers';

const addSeparators = (items: itemsArr): itemsArr =>
  items
    .reduce(
      (result, item) => result.concat(item).concat(`${item}${separatorString}`),
      <itemsArr>[]
    )
    .slice(0, -1);

export function prevGroup(
  allItems: itemsArr,
  visibleItems: itemsArr
): itemsArr {
  const firstIndex = allItems.findIndex((item) => item === visibleItems?.[0]);

  const count = visibleItems.length;

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
  allItems: itemsArr,
  visibleItems: itemsArr
): itemsArr {
  const lastIndex = allItems.findIndex(
    (item) => item === visibleItems.slice(-1)?.[0]
  );

  const count = visibleItems.length;

  // TODO:
  const _nextGroupLastItem = lastIndex + count + 1;

  const isEnd = _nextGroupLastItem > allItems.length - 1;

  const nextGroupLastItem = isEnd ? allItems.length - 1 : _nextGroupLastItem;
  const next = allItems.slice(
    isEnd ? nextGroupLastItem - count + 1 : lastIndex + 1,
    nextGroupLastItem
  );

  // when have next items
  if (next.length === count) {
    return next;
    // when no next group
  } else {
    return allItems.slice(allItems.length - count, allItems.length + count);
  }
}

function slidingWindow(
  allItems: itemsArr,
  visibleItems: itemsArr
): {
  prev: () => itemsArr;
  next: () => itemsArr;
} {
  const _allItems = filterSeparators(allItems);
  const _visibleItems = filterSeparators(visibleItems);

  return {
    prev: () => {
      return addSeparators(prevGroup(_allItems, _visibleItems));
    },
    next: () => {
      return addSeparators(nextGroup(_allItems, _visibleItems));
    },
  };
}

export default slidingWindow;
