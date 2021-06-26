import React from 'react';

import { id as itemId } from '../constants';

function useItemsChanged(menuItems: React.ReactNode, refs: object): string {
  const [hash, setHash] = React.useState<string>('');

  React.useLayoutEffect(() => {
    const newHash = (menuItems ? React.Children.toArray(menuItems) : [])
      .map((c) => (c as JSX.Element)?.props?.[itemId])
      .filter(Boolean)
      .join('');
    setHash(newHash);
  }, [menuItems, refs]);

  return hash;
}

export default useItemsChanged;
