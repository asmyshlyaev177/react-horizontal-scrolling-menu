import React from 'react';

import Separator from '../Separator';
import Item from '../Item';
import {
  id as itemId,
  separatorString,
  itemClassName,
  customClassName,
  separatorClassName,
} from '../../constants';
import type { ItemType, Refs } from '../../types';

export type Props = {
  children?: ItemType | ItemType[];
  refs: Refs;
  itemClassName?: string;
  separatorClassName?: string;
};

function MenuItems({
  children,
  itemClassName: _itemClassName = '',
  refs,
  separatorClassName: _separatorClassName = '',
}: Props): JSX.Element {
  const childArray = React.Children.toArray(children).filter(Boolean);
  const itemsCount = childArray.length;

  const itemClass = React.useMemo(
    () => `${itemClassName} ${_itemClassName}`,
    [_itemClassName]
  );
  const separatorClass = React.useMemo(
    () => `${separatorClassName} ${_separatorClassName}`,
    [_separatorClassName]
  );

  return (
    <>
      {childArray.map((child, index: number) => {
        const id = (child as JSX.Element)?.props?.[itemId];
        const customClass = (child as JSX.Element)?.props?.[customClassName];
        const separatorId = id + separatorString;
        const isLastItem = index + 1 === itemsCount;
        const className = [itemClass, customClass].filter(Boolean).join(' ');

        return [
          <Item
            className={className}
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
