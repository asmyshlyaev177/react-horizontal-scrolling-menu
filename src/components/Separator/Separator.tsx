import React from 'react';

import { separatorClassName } from '../../constants';
import { Refs } from '../../types';

export type Props = {
  id: string;
  index: number;
  refs: Refs;
};

function Separator({ id, index, refs }: Props) {
  const ref = React.useRef(null);
  refs[index] = ref;

  return (
    <div
      className={separatorClassName}
      data-key={id}
      data-index={index}
      ref={ref}
    />
  );
}

export default React.memo(Separator);
