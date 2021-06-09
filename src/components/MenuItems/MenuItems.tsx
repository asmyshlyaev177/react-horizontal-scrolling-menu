/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Separator from '../Separator';
import Item from '../Item';
import { id as itemId } from '../../constants';
import { Refs } from '../../types';

export type Props = {
  children?: React.ReactChild | React.ReactChild[];
  refs: Refs;
};

function MenuItems({ children, refs }: Props): JSX.Element {
  const itemsCount = React.Children.count(children);

  return (
    <>
      {React.Children.toArray(children).map((child: any, index: number) => {
        const id = child?.props?.[itemId];
        const separatorId = id + '-separator';
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
        ].filter(Boolean);
      })}
    </>
  );
}

export default MenuItems;
