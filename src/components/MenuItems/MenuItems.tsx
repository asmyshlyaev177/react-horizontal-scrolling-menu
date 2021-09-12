import React from 'react';

import Separator from '../Separator';
import Item from '../Item';
import { id as itemId, separatorString } from '../../constants';
import type { ItemType, Refs } from '../../types';

export type Props = {
  children?: ItemType | ItemType[];
  refs: Refs;
};

function MenuItems({ children, refs }: Props): JSX.Element {
  const childArray = React.Children.toArray(children).filter(Boolean);
  const itemsCount = childArray.length;

  return (
    <>
      {childArray.map((child, index: number) => {
        const id = (child as JSX.Element)?.props?.[itemId];
        const separatorId = id + separatorString;
        const isLastItem = index + 1 === itemsCount;

        return [
          <Item id={id} key={'menuItem__' + id} refs={refs} index={index}>
            {child}
          </Item>,
          !isLastItem && (
            <Separator
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
