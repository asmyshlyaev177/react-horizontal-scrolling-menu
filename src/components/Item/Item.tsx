import React from 'react';

import { itemClassName } from '../../constants';
import type { Refs } from '../../types';

export type Props = {
  id: string;
  index: number;
  refs: Refs;
  children?: React.ReactNode;
};

function Item({ children, id, index, refs }: Props) {
  const ref = React.useRef(null);
  refs[index] = ref;

  return (
    <div className={itemClassName} data-key={id} data-index={index} ref={ref}>
      {children}
    </div>
  );
}

export default React.memo(Item);
