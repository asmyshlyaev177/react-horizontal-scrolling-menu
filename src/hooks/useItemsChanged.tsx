import React from 'react';

import { id as itemId } from '../constants';
import type { ItemType } from '../types';

function useItemsChanged(
  menuItems: ItemType | ItemType[],
  refs: object
): string {
  const [hash, setHash] = React.useState<string>('');

  React.useLayoutEffect(() => {
    const newHash = (
      menuItems ? React.Children.toArray(menuItems).filter(Boolean) : []
    )
      .map((c) => (c as JSX.Element)?.props?.[itemId])
      .filter(Boolean)
      .join('');
    setHash(newHash);
  }, [menuItems, refs]);

  return hash;
}

export default useItemsChanged;
