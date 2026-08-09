import { renderHook } from '@testing-library/react';

import { publicApiType } from '../createApi';
import { useOnCb } from './useOnCb';

const cbs: { [index: string]: (() => void) | undefined } = {
  onInit: undefined,
  onUpdate: undefined,
};
const context = {
  items: {
    // A fresh map that has not processed its first batch yet.
    firstRun: true,
    subscribe: jest.fn((event: string, cb: () => void) => {
      cbs[event] = cb;
    }),
    unsubscribe: jest.fn((event: string, cb: () => void) => {
      cbs[event] = cb;
    }),
  },
} as unknown as publicApiType;
const onInit = jest.fn();
const onUpdate = jest.fn();
const props = { context, onInit, onUpdate };

describe('useOnCb', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cbs.onInit = undefined;
    cbs.onUpdate = undefined;
  });

  it('should subscribe to events', () => {
    renderHook(() => useOnCb(props));

    expect(context.items.subscribe).toHaveBeenCalledTimes(2);
    expect(cbs.onInit).toEqual(expect.any(Function));
    expect(cbs.onUpdate).toEqual(expect.any(Function));
  });

  it('should fire onInit with context', () => {
    renderHook(() => useOnCb(props));

    expect(context.items.subscribe).toHaveBeenCalledTimes(2);

    cbs?.onInit?.();

    expect(onInit).toHaveBeenCalledTimes(1);
    expect(onInit).toHaveBeenNthCalledWith(1, context);
  });

  it('should fire onUpdate with context', () => {
    renderHook(() => useOnCb(props));

    expect(context.items.subscribe).toHaveBeenCalledTimes(2);

    cbs?.onUpdate?.();

    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenNthCalledWith(1, context);
  });

  it('should unsubscribe on unmount', () => {
    const { unmount } = renderHook(() => useOnCb(props));

    unmount();

    expect(context.items.unsubscribe).toHaveBeenCalledTimes(2);
  });

  it('replays onInit when the first batch preceded the subscription', () => {
    // WebKit can deliver the first IO batch between the layout effect that
    // observes and the passive effect that subscribes — firstRun is already
    // false by the time useOnCb runs, and the emit was lost.
    const lateContext = {
      items: { ...(context.items as object), firstRun: false },
    } as unknown as publicApiType;

    renderHook(() => useOnCb({ ...props, context: lateContext }));

    expect(onInit).toHaveBeenCalledTimes(1);
    expect(onInit).toHaveBeenNthCalledWith(1, lateContext);

    // A late real emit must not double-fire the one-shot callback.
    cbs?.onInit?.();
    expect(onInit).toHaveBeenCalledTimes(1);
  });

  it('does not fire onInit on subscribe before the first batch', () => {
    renderHook(() => useOnCb(props));

    expect(onInit).not.toHaveBeenCalled();
  });
});
