import React from 'react';

import { visibleItems as visibleItemsType } from '../types';

interface Props {
  cb: () => void;
  condition: boolean;
  visibleItems: visibleItemsType;
}

function useOnUpdate({
  cb = () => void 0,
  condition,
  visibleItems,
}: Props): void {
  const currentItemsHash = condition ? JSON.stringify(visibleItems) : '';

  React.useEffect(() => {
    if (condition && currentItemsHash) {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, currentItemsHash]);
}

export default useOnUpdate;
