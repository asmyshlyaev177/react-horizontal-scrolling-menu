import { visibleElements } from './types';
import { separatorString } from './constants';

export const omitEdgeSeparators = (items: visibleElements) =>
  items.filter((item, ind, arr) => {
    const isFirst = ind === 0;
    const isLast = ind === arr.length - 1;
    const itemIsSeparator = new RegExp(separatorString).test(item);

    return !((isFirst || isLast) && itemIsSeparator);
  });

const getItemsPos = (items: visibleElements) => {
  const normalizedItems = omitEdgeSeparators(items);

  const centerIndex = Math.floor(normalizedItems.length / 2);
  const center = normalizedItems[centerIndex];

  return {
    first: normalizedItems?.[0],
    center,
    last: normalizedItems.slice(-1)?.[0],
  };
};

export default getItemsPos;
