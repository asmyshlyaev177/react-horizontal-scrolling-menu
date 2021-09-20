import React from 'react';

import type { Refs } from '../../types';

export type Props = {
  id: string;
  index: number;
  refs: Refs;
  children?: React.ReactNode;
  className: string;
};

function Item({ children, className, id, index, refs }: Props) {
  const ref = React.useRef(null);
  refs[index] = ref;

  return (
    <div className={className} data-key={id} data-index={index} ref={ref}>
      {children}
    </div>
  );
}

export default React.memo(Item);
