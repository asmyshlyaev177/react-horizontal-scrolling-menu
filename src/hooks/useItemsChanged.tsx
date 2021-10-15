import React from 'react';

import { id as itemId } from '../constants';
import ItemsMap from '../ItemsMap';
import type { ItemType } from '../types';

const getItemsIdFromChildren = (
  children: ItemType | ItemType[] | undefined
): string[] =>
  React.Children.toArray(children)
    .map((c) => (c as JSX.Element)?.props?.[itemId])
    .filter(Boolean);

function useItemsChanged(
  menuItems: ItemType | ItemType[] | undefined,
  items: ItemsMap
): string {
  const [hash, setHash] = React.useState<string>('');

  const domNodes = React.useMemo(
    () => getItemsIdFromChildren(menuItems),
    [menuItems]
  );

  React.useEffect(() => {
    setHash(domNodes.filter(Boolean).join(''));
  }, [domNodes]);

  React.useEffect(() => {
    const allItems = items.toItemsWithoutSeparators();
    const removed = allItems.filter((item) => !domNodes.includes(item));

    removed.forEach((item) => items.delete(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  return hash;
}

export default useItemsChanged;
