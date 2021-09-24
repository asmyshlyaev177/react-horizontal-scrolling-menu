import React from 'react';

import usePrevious from './usePrevious';

import { visibleItems as visibleItemsType } from '../types';

interface Props {
  cb: () => void;
  condition: Boolean;
  visibleItems: visibleItemsType;
}

function useOnUpdate({
  cb = () => void 0,
  condition,
  visibleItems,
}: Props): void {
  const currentItemsHash = condition ? JSON.stringify(visibleItems) : '';
  const prevItemsHash = usePrevious(currentItemsHash);

  React.useEffect(() => {
    if (condition && prevItemsHash !== currentItemsHash) {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, prevItemsHash, currentItemsHash]);
}

export default useOnUpdate;
