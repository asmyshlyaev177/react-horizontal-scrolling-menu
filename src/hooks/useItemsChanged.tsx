import React from 'react';

import { separatorString } from '../constants';
import { ItemsMap } from '../ItemsMap';
import type { ItemType } from '../types';
import { getItemId } from '../helpers';

const getItemsIdFromChildren = (
  children: ItemType | ItemType[] | undefined,
): string[] => React.Children.toArray(children).map(getItemId).filter(Boolean);

function useItemsChanged(
  menuItems: ItemType | ItemType[] | undefined,
  items: ItemsMap,
): string {
  const [hash, setHash] = React.useState<string>('');

  const domNodes = React.useMemo(
    () => getItemsIdFromChildren(menuItems),
    [menuItems],
  );

  React.useEffect(() => {
    const hash = domNodes.filter(Boolean).join('');

    const allItems = items.toItemsWithoutSeparators();
    const removed = allItems.filter((item) => !domNodes.includes(item));
    removed.forEach((item) => {
      const isLast = items.last()?.key === item;
      const lastSeparator = (isLast && items.prev(item)?.key) || '';

      items.delete(lastSeparator);
      items.delete(`${item}${separatorString}`);
      items.delete(item);
    });

    setHash(hash);
  }, [domNodes, items]);

  return hash;
}

export default useItemsChanged;
