import React from 'react';

import { emptyStr } from '../constants';
import { ItemsMap } from '../ItemsMap';
import type { ItemId, ItemType } from '../types';
import { getItemId } from '../helpers';

const getItemsIdFromChildren = (
  children: ItemType | ItemType[] | undefined,
): ItemId[] => React.Children.toArray(children).map(getItemId).filter(Boolean);

function useItemsChanged(
  menuItems: ItemType | ItemType[] | undefined,
  items: ItemsMap,
): string {
  const [hash, setHash] = React.useState<string>(emptyStr);

  const domNodes = React.useMemo(
    () => getItemsIdFromChildren(menuItems),
    [menuItems],
  );

  React.useEffect(() => {
    const hash = domNodes.filter(Boolean).join(emptyStr);

    const allItems = items.toItems();
    const removed = allItems.filter((item) => !domNodes.includes(item));
    removed.forEach((item) => {
      items.delete(item);
    });

    setHash(hash);
  }, [domNodes, items]);

  return hash;
}

export default useItemsChanged;
