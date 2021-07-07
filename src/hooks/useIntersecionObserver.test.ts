// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { renderHook } from '@testing-library/react-hooks';

import useIntersectionObserver from './useIntersectionObserver';

import ItemsMap from '../ItemsMap';
import { observerOptions } from '../settings';
import { Item, Refs } from '../types';

import { mocked } from 'ts-jest/utils';

import { observerEntriesToItems } from '../helpers';
jest.mock('../helpers', () => ({
  __esModule: true,
  ...jest.requireActual('../helpers'),
  observerEntriesToItems: jest.fn(),
}));

type CB = (arg1: IntersectionObserverEntry[]) => void;
class MockedObserver {
  cb: CB;
  options: IntersectionObserverInit;
  elements: HTMLElement[];

  constructor(cb: CB, options: IntersectionObserverInit) {
    this.cb = cb;
    this.options = options;
    this.elements = [];
  }

  unobserve(elem: HTMLElement): void {
    this.elements = this.elements.filter((en) => en !== elem);
  }

  observe(elem: HTMLElement): void {
    this.elements = [...new Set(this.elements.concat(elem))];
  }

  disconnect(): void {
    this.elements = [];
  }

  fire(arr: IntersectionObserverEntry[]): void {
    this.cb(arr);
  }
}

function traceMethodCalls(obj: object | Function, calls: any = {}) {
  const handler: ProxyHandler<object | Function> = {
    get(target, propKey, receiver) {
      const targetValue = Reflect.get(target, propKey, receiver);
      if (typeof targetValue === 'function') {
        return function (...args: any[]) {
          calls[propKey] = (calls[propKey] || []).concat(args);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return targetValue.apply(this, args);
        };
      } else {
        return targetValue;
      }
    },
  };
  return new Proxy(obj, handler);
}

describe('useIntersectionObserver', () => {
  let observer: any;
  let mockedObserverCalls: { [k: string]: any } = {};
  beforeEach(() => {
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: jest
        .fn()
        .mockImplementation(function TrackMock(
          cb: CB,
          options: IntersectionObserverInit
        ) {
          observer = traceMethodCalls(
            new MockedObserver(cb, options),
            mockedObserverCalls
          );

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

  test('should return visible items', async () => {
    const oeti = mocked(observerEntriesToItems, true);

    const items = new ItemsMap();
    const itemsChanged = '';
    const options = observerOptions;
    const refs: Refs = {};
    const props = { items, itemsChanged, options, refs };

    oeti.mockReturnValueOnce([]);
    const { result, waitForNextUpdate } = renderHook(() =>
      useIntersectionObserver(props)
    );

    expect(result.current.visibleItems).toEqual([]);

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
          ] as Item
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

    oeti.mockReturnValueOnce(itemsToEntries(visibilityStateHistory[0]));

    // trigger cb on observer
    mockedObserver.fire([]);
    mockedObserver.fire([]);
    await waitForNextUpdate();
    expect(result.current.visibleItems).toEqual(['item1', 'item2']);

    oeti.mockReturnValueOnce(itemsToEntries(visibilityStateHistory[1]));
    mockedObserver.fire([]);
    await waitForNextUpdate();
    expect(result.current.visibleItems).toEqual(['item2', 'item3']);
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
