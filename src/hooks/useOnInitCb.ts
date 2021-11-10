import React from 'react';

interface Props {
  cb: () => void;
  condition?: boolean;
}

function useOnInitCb({ cb, condition }: Props): boolean {
  const [cbFired, setCbFired] = React.useState(false);

  React.useEffect(() => {
    if (condition && !cbFired) {
      setCbFired(true);
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, cbFired]);

  return cbFired;
}

export default useOnInitCb;
