import { renderHook } from '@testing-library/react-hooks';
import useOnUpdate from './useOnUpdate';

describe('useOnUpdate', () => {
  test('should fire cb when visibleItems changed', () => {
    const cb = jest.fn();
    const visibleItems = ['it1', 'it2'];
    const visibleItems2 = ['it2', 'it3'];
    const condition = true;

    const { rerender } = renderHook(useOnUpdate, {
      initialProps: { cb, condition, hash: JSON.stringify(visibleItems) },
    });

    expect(cb).toHaveBeenCalledTimes(1);

    rerender();
    expect(cb).toHaveBeenCalledTimes(1);

    rerender({ cb, condition, hash: JSON.stringify(visibleItems2) });
    expect(cb).toHaveBeenCalledTimes(2);

    rerender();
    expect(cb).toHaveBeenCalledTimes(2);
  });

  test('should fire cb only when condition is truthy', () => {
    const cb = jest.fn();
    const visibleItems = ['it1', 'it2'];
    const visibleItems2 = ['it2', 'it3'];
    const condition = false;

    const { rerender } = renderHook(useOnUpdate, {
      initialProps: { cb, condition, hash: JSON.stringify(visibleItems) },
    });

    expect(cb).toHaveBeenCalledTimes(0);

    rerender();
    expect(cb).toHaveBeenCalledTimes(0);

    rerender({ cb, condition, hash: JSON.stringify(visibleItems2) });
    expect(cb).toHaveBeenCalledTimes(0);

    rerender();
    expect(cb).toHaveBeenCalledTimes(0);
  });
});
