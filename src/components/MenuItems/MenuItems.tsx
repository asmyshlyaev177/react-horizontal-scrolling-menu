import React from 'react';

import { itemClassName, emptyStr } from '../../constants';
import { getItemId } from '../../helpers';
import Item from '../Item';

import type { ItemType, Refs } from '../../types';

export type Props = {
  children?: ItemType | ItemType[];
  refs: Refs;
  itemClassName?: string;
};

function MenuItems({
  children,
  itemClassName: _itemClassName = emptyStr,
  refs,
}: Props) {
  const childArray = React.Children.toArray(children).filter(Boolean);

  const itemClass = React.useMemo(
    () => `${itemClassName} ${_itemClassName}`,
    [_itemClassName],
  );
  return childArray.map((child, index: number) => {
    const id = getItemId(child);

    return (
      <Item className={itemClass} id={id} key={id} refs={refs} index={index}>
        {child}
      </Item>
    );
  });
}

export default MenuItems;
