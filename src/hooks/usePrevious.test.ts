import { renderHook } from '@testing-library/react-hooks';
import usePrevious from './usePrevious';

describe('usePrevious', () => {
  test('should return previous value', () => {
    const values = ['test1', 'test2', 'test3'];

    const { result, rerender } = renderHook(usePrevious, {
      initialProps: values[0],
    });
    expect(result.current).toEqual(undefined);

    rerender();
    expect(result.current).toEqual(values[0]);

    rerender(values[1]);
    expect(result.current).toEqual(values[0]);

    rerender(values[2]);
    expect(result.current).toEqual(values[1]);

    rerender(values[2]);
    expect(result.current).toEqual(values[2]);

    rerender(values[2]);
    expect(result.current).toEqual(values[2]);
  });
});
