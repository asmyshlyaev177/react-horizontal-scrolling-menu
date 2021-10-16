import React from 'react';

import type { Refs } from '../../types';
import { dataKeyAttribute, dataIndexAttribute } from '../../constants';

export type Props = {
  id: string;
  index: number;
  refs: Refs;
  children?: React.ReactNode;
  className: string;
};

function Item({ children, className, id, index, refs }: Props) {
  const ref = React.useRef(null);
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
