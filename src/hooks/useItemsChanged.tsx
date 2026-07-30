import React from 'react';

import { emptyStr } from '../constants';
import { getItemId } from '../helpers';
import { ItemsMap } from '../ItemsMap';
import type { ItemChild, ItemId } from '../types';

const getItemsIdFromChildren = (children: ItemChild | ItemChild[]): ItemId[] =>
  React.Children.toArray(children).map(getItemId).filter(Boolean);

function useItemsChanged(
  menuItems: ItemChild | ItemChild[],
  items: ItemsMap,
): string {
  const domNodes = React.useMemo(
    () => getItemsIdFromChildren(menuItems),
    [menuItems],
  );

  // The hash is derived from the children, so it is computed during render
  // rather than pushed into state from an effect. Setting state in an effect
  // costs an extra render pass and is flagged by the React Compiler.
  const hash = React.useMemo(
    () => domNodes.filter(Boolean).join(emptyStr),
    [domNodes],
  );

  // Dropping items that are no longer rendered is a genuine side effect on the
  // shared ItemsMap, so it stays in an effect.
  React.useEffect(() => {
    const removed = items.toItems().filter((item) => !domNodes.includes(item));
    removed.forEach((item) => {
      items.delete(item);
    });
  }, [domNodes, items]);

  return hash;
}

export default useItemsChanged;
