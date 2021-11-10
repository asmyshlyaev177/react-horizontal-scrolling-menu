import { renderHook } from '@testing-library/react-hooks';
import useOnInitCb from './useOnInitCb';

describe('useOnInitCb', () => {
  test('should fire cb only 1 time', () => {
    const cb = jest.fn();
    const { result, rerender } = renderHook(() =>
      useOnInitCb({ cb, condition: true })
    );

    expect(cb).toHaveBeenCalledTimes(1);
    expect(result.all).toEqual([false, true]);

    rerender();

    expect(result.all).toEqual([false, true, true]);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('should fire cb only when condition is truthy', () => {
    const cb = jest.fn();
    const { result, rerender } = renderHook(useOnInitCb, {
      initialProps: { cb, condition: false },
    });

    expect(cb).toHaveBeenCalledTimes(0);
    expect(result.all).toEqual([false]);

    rerender({ cb, condition: true });

    expect(cb).toHaveBeenCalledTimes(1);
    expect(result.all).toEqual([false, false, true]);

    rerender();
    expect(cb).toHaveBeenCalledTimes(1);
    expect(result.all).toEqual([false, false, true, true]);
  });
});
