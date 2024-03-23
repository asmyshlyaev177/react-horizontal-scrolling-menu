import React from 'react';

import Separator from '../Separator';
import Item from '../Item';
import {
  separatorString,
  itemClassName,
  separatorClassName,
  emptyStr,
} from '../../constants';
import type { ItemType, Refs } from '../../types';
import { getItemId } from '../../helpers';

export type Props = {
  children?: ItemType | ItemType[];
  refs: Refs;
  itemClassName?: string;
  separatorClassName?: string;
};

function MenuItems({
  children,
  itemClassName: _itemClassName = emptyStr,
  refs,
  separatorClassName: _separatorClassName = emptyStr,
}: Props): React.JSX.Element {
  const childArray = React.Children.toArray(children).filter(Boolean);
  const itemsCount = childArray.length;

  const itemClass = React.useMemo(
    () => `${itemClassName} ${_itemClassName}`,
    [_itemClassName],
  );
  const separatorClass = React.useMemo(
    () => `${separatorClassName} ${_separatorClassName}`,
    [_separatorClassName],
  );

  return (
    <>
      {childArray.map((child, index: number) => {
        const id = getItemId(child);
        const separatorId = id + separatorString;
        const isLastItem = index + 1 === itemsCount;

        return [
          <Item
            className={itemClass}
            id={id}
            key={'menuItem__' + id}
            refs={refs}
            index={index}
          >
            {child}
          </Item>,
          !isLastItem && (
            <Separator
              className={separatorClass}
              id={separatorId}
              refs={refs}
              key={separatorId}
              index={index + 0.1}
            />
          ),
        ];
      })}
    </>
  );
}

export default MenuItems;
