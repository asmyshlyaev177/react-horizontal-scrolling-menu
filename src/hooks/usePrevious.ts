import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function usePrevious(value: any) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
