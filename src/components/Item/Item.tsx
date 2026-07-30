import React from 'react';

import { dataIndexAttribute, dataKeyAttribute } from '../../constants';
import type { ItemId, RegisterRef } from '../../types';

export type Props = {
  id: ItemId;
  index: number;
  registerRef: RegisterRef;
  children?: React.ReactNode;
  className: string;
};

function Item({ children, className, id, index, registerRef }: Props) {
  // Ref callbacks run in the commit phase, so the node is published before the
  // parent's layout effect sets up the IntersectionObserver — and outside render,
  // where mutation is not allowed.
  const setRef = React.useCallback(
    (node: HTMLDivElement | null) => registerRef(index, node),
    [registerRef, index],
  );

  return (
    <div
      className={className}
      {...{ [dataKeyAttribute]: id, [dataIndexAttribute]: index }}
      ref={setRef}
    >
      {children}
    </div>
  );
}

export default React.memo(Item);
