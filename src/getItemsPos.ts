import type { visibleElements } from './types';

const getItemsPos = (items: visibleElements) => {
  const centerIndex = Math.floor(items.length / 2);
  const center = items[centerIndex];

  return {
    first: items?.[0],
    center,
    last: items.slice(-1)?.[0],
  };
};

export default getItemsPos;
