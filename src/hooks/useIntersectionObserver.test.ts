import { renderHook } from '@testing-library/react';

import useIntersectionObserver from './useIntersectionObserver';

import { ItemsMap } from '../ItemsMap';
import { observerOptions } from '../settings';
import type { Refs, Item } from '../types';

import { MockedObserver, traceMethodCalls } from '../testUtils';
import type { IntersectionObserverCB, MockedCalls } from '../testUtils';

import { mocked } from 'jest-mock';

import { observerEntriesToItems } from '../helpers';
jest.mock('../helpers', () => ({
  __esModule: true,
  ...jest.requireActual('../helpers'),
  observerEntriesToItems: jest.fn(),
}));

describe('useIntersectionObserver', () => {
  let observer: MockedObserver | null;
  let mockedObserverCalls: MockedCalls = {};
  beforeEach(() => {
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: jest.fn().mockImplementation(function TrackMock(
        cb: IntersectionObserverCB,
        options: IntersectionObserverInit,
      ) {
        observer = traceMethodCalls(
          new MockedObserver(cb, options),
          mockedObserverCalls,
        ) as unknown as MockedObserver;

        return observer;
      }),
    });
  });
  afterEach(() => {
    observer = null;
    mockedObserverCalls = {};
  });

  test('should observe items from refs', () => {
    const items = new ItemsMap();
    const itemsChanged = '';
    const options = observerOptions;
    const refs: Refs = {
      el1: { current: document.createElement('div') },
      el2: { current: document.createElement('div') },
    };
    const props = { items, itemsChanged, options, refs };

    renderHook(() => useIntersectionObserver(props));

    // called observe on refs
    expect(mockedObserverCalls.observe[0]).toEqual(refs.el1.current);
    expect(mockedObserverCalls.observe[1]).toEqual(refs.el2.current);
  });

  test('should set entries to ItemsMap', () => {
    const observerMock = mocked(observerEntriesToItems, { shallow: true });

    const items = { setBatch: jest.fn() } as unknown as ItemsMap;
    const itemsChanged = '';
    const options = observerOptions;
    const refs: Refs = {};
    const props = { items, itemsChanged, options, refs };

    observerMock.mockReturnValueOnce([]);
    renderHook(() => useIntersectionObserver(props));

    const itemsToEntries = (items: { key: string; visible: boolean }[]) =>
      items.map(
        (el, index) =>
          [
            el.key,
            {
              key: el.key,
              entry: {} as IntersectionObserverEntry,
              visible: el.visible,
              index: String(index),
            },
          ] as Item,
      );

    // observer entries cbs
    const visibilityStateHistory = [
      [
        { key: 'item1', visible: true },
        { key: 'item2', visible: true },
      ],
      [
        { key: 'item1', visible: false },
        { key: 'item2', visible: true },
        { key: 'item3', visible: true },
      ],
    ];

    const mockedObserver = observer as unknown as MockedObserver;

    observerMock.mockReturnValueOnce(itemsToEntries(visibilityStateHistory[0]));

    // trigger cb on observer
    const entriesMock1 = [] as IntersectionObserverEntry[];
    mockedObserver.fire(entriesMock1);
    expect(items.setBatch).toHaveBeenCalledTimes(1);
    expect(items.setBatch).toHaveBeenNthCalledWith(1, entriesMock1);

    const entriesMock2 = itemsToEntries(
      visibilityStateHistory[1],
    ) as unknown as IntersectionObserverEntry[];

    observerMock.mockReturnValueOnce(entriesMock2 as unknown as Item[]);
    mockedObserver.fire(entriesMock2);

    expect(items.setBatch).toHaveBeenCalledTimes(2);
    expect(items.setBatch).toHaveBeenNthCalledWith(2, [
      ['item1', { entry: {}, index: '0', key: 'item1', visible: true }],
      ['item2', { entry: {}, index: '1', key: 'item2', visible: true }],
    ]);

    mockedObserver.fire(entriesMock2);
    expect(items.setBatch).toHaveBeenCalledTimes(3);
    expect(items.setBatch).toHaveBeenNthCalledWith(3, [
      ['item1', { entry: {}, index: '0', key: 'item1', visible: false }],
      ['item2', { entry: {}, index: '1', key: 'item2', visible: true }],
      ['item3', { entry: {}, index: '2', key: 'item3', visible: true }],
    ]);
  });

  test('should call disconnect', () => {
    const items = new ItemsMap();
    const itemsChanged = '';
    const options = observerOptions;
    const refs: Refs = {
      el1: { current: document.createElement('div') },
      el2: { current: document.createElement('div') },
    };
    const props = { items, itemsChanged, options, refs };

    const { unmount } = renderHook(() => useIntersectionObserver(props));

    expect(mockedObserverCalls.disconnect).toBeFalsy();
    unmount();
    expect(mockedObserverCalls.disconnect).toEqual([]);
  });
});
