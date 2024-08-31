import React from 'react';

import { dataKeyAttribute, dataIndexAttribute } from '../../constants';

import type { Refs, ItemId } from '../../types';

export type Props = {
  id: ItemId;
  index: number;
  refs: Refs;
  children?: React.ReactNode;
  className: string;
};

function Item({ children, className, id, index, refs }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  refs[String(index)] = ref;

  return (
    <div
      className={className}
      {...{ [dataKeyAttribute]: id, [dataIndexAttribute]: index }}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default React.memo(Item);
