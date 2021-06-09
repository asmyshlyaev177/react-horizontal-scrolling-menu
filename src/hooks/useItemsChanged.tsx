import React from 'react';

import { id as itemId } from '../constants';

function useItemsChanged(
  menuItems: React.ReactChild | React.ReactChild[],
  refs: object
): string {
  const [hash, setHash] = React.useState<string>('');

  React.useLayoutEffect(() => {
    const newHash = (menuItems ? React.Children.toArray(menuItems) : [])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((c: any) => c?.props?.[itemId])
      .filter(Boolean)
      .join('');
    setHash(newHash);
  }, [menuItems, refs]);

  return hash;
}

export default useItemsChanged;
