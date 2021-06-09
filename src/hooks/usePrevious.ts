import React from 'react';

function usePrevious(value: any) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
