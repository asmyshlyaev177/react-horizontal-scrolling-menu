import React from 'react';

/**
 * Returns the value from the previous render.
 *
 * Implemented by adjusting state during render rather than writing to a ref in
 * an effect and reading `ref.current` back out during the next render: reading a
 * ref during render is not safe under the React Compiler, which may reorder or
 * skip renders. See https://react.dev/reference/react/useState#storing-information-from-previous-renders
 */
function usePrevious<T>(value: T) {
  const [current, setCurrent] = React.useState<T>(value);
  const [previous, setPrevious] = React.useState<T | undefined>(undefined);

  if (!Object.is(current, value)) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}

export default usePrevious;
