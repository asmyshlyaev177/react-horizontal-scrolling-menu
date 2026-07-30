import React from 'react';

import { emptyStr, itemClassName } from '../../constants';
import { getItemId } from '../../helpers';
import type { ItemType, RegisterRef } from '../../types';
import Item from '../Item';

export type Props = {
  children?: ItemType | ItemType[];
  registerRef: RegisterRef;
  itemClassName?: string;
};

function MenuItems({
  children,
  itemClassName: _itemClassName = emptyStr,
  registerRef,
}: Props) {
  const childArray = React.Children.toArray(children).filter(Boolean);

  const itemClass = React.useMemo(
    () => `${itemClassName} ${_itemClassName}`,
    [_itemClassName],
  );
  return childArray.map((child, index: number) => {
    const id = getItemId(child);

    return (
      <Item
        className={itemClass}
        id={id}
        key={id}
        registerRef={registerRef}
        index={index}
      >
        {child}
      </Item>
    );
  });
}

export default MenuItems;
