import React from 'react';

import type { Refs } from '../../types';

import { dataKeyAttribute, dataIndexAttribute } from '../../constants';

export type Props = {
  id: string;
  index: number;
  refs: Refs;
  className: string;
};

function Separator({ className, id, index, refs }: Props) {
  const ref = React.useRef(null);
  refs[index] = ref;

  return (
    <div
      className={className}
      {...{ [dataKeyAttribute]: id, [dataIndexAttribute]: index }}
      ref={ref}
    />
  );
}

export default React.memo(Separator);
