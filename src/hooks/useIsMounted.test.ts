import { renderHook } from '@testing-library/react-hooks';

import useIsMounted from './useIsMounted';

describe('useIsMounted', () => {
  test('should fire cb on mount 1 time', () => {
    const cb = jest.fn();

    const { result } = renderHook(() => useIsMounted(cb));
    expect(result.all).toEqual([false, true]);

    expect(cb).toHaveBeenCalledTimes(1);
  });
});
