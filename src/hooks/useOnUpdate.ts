import React from 'react';

interface Props {
  cb: Function;
  condition: boolean;
  hash: string;
}

function useOnUpdate({ cb = () => void 0, condition, hash }: Props): void {
  React.useEffect(() => {
    if (condition) {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, condition]);
}

export default useOnUpdate;
