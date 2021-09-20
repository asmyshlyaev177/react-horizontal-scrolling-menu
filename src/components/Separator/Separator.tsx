import React from 'react';

import type { Refs } from '../../types';

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
    <div className={className} data-key={id} data-index={index} ref={ref} />
  );
}

export default React.memo(Separator);
