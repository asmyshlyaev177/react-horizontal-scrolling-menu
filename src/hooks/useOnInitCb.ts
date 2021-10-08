import React from 'react';

interface Props {
  cb: () => void;
  condition?: Boolean;
}

function useOnInitCb({ cb, condition: _condition }: Props): Boolean {
  let condition = _condition;
  condition ??= true;

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
