import React from 'react';
import {
  filterSeparators,
  getElementOrConstructor,
  getItemElementById,
  getItemElementByIndex,
  getItemId,
  getNodesFromRefs,
  observerEntriesToItems,
  scrollToItem,
} from './helpers';
import { observerOptions } from './settings';
import type { IOItem } from './types';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

jest.mock('smooth-scroll-into-view-if-needed');

describe('getNodesFromRefs', () => {
  test('should return empty array if refs are null', () => {
    const refs = { node1: { current: null }, node2: { current: null } };

    expect(getNodesFromRefs(refs)).toEqual([]);
  });

  test('should return array of nodes for existing regs', () => {
    const refs = {
      node1: { current: document.createElement('div') },
      node2: { current: document.createElement('div') },
    };

    const result = Object.values(refs).map((ref) => ref.current);

    expect(getNodesFromRefs(refs)).toEqual(result);
  });
});

describe('observerEntriesToItems', () => {
  test('should return empty array if no entries', () => {
    expect(observerEntriesToItems([], observerOptions)).toEqual([]);
  });

  test('should return items if entries exist', () => {
    const entries = [
      {
        intersectionRatio: 1,
        target: { dataset: { index: 'index1', key: 'key1' } },
      } as unknown as IntersectionObserverEntry,
      {
        intersectionRatio: 0.55,
        target: { dataset: { index: 'index2', key: 'key2' } },
      } as unknown as IntersectionObserverEntry,
      {
        intersectionRatio: 0,
        target: { dataset: { index: 'index3', key: 'key3' } },
      } as unknown as IntersectionObserverEntry,
    ];

    const result = [
      [
        'key1',
        {
          entry: {
            intersectionRatio: 1,
            target: { dataset: { index: 'index1', key: 'key1' } },
          },
          index: 'index1',
          key: 'key1',
          visible: true,
        },
      ],
      [
        'key2',
        {
          entry: {
            intersectionRatio: 0.55,
            target: { dataset: { index: 'index2', key: 'key2' } },
          },
          index: 'index2',
          key: 'key2',
          visible: true,
        },
      ],
      [
        'key3',
        {
          entry: {
            intersectionRatio: 0,
            target: { dataset: { index: 'index3', key: 'key3' } },
          },
          index: 'index3',
          key: 'key3',
          visible: false,
        },
      ],
    ];

    expect(
      observerEntriesToItems(entries, { ...observerOptions, ratio: 0.5 }),
    ).toEqual(result);
  });
});

describe('scrollToItem', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should scroll to item with default options', () => {
    const item = {
      entry: { target: document.createElement('div') },
    } as unknown as IOItem;

    const options = {
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end',
      duration: undefined,
    };

    scrollToItem(item);

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    expect(scrollIntoView).toHaveBeenNthCalledWith(
      1,
      item.entry.target,
      options,
    );
  });

  test('should not use polyfill when noPolyfill passed', () => {
    const target = document.createElement('div');
    const standartScrollIntoViewMock = jest.fn();
    target.scrollIntoView = standartScrollIntoViewMock;

    const item = {
      entry: { target },
    } as unknown as IOItem;

    const noPolyfill = true;
    scrollToItem(item, undefined, undefined, undefined, undefined, noPolyfill);

    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(standartScrollIntoViewMock).toHaveBeenCalled();
  });

  test('should scroll to item with custom options', () => {
    const item = {
      entry: { target: document.createElement('div') },
    } as unknown as IOItem;

    const options = {
      duration: 1000,
      ease: (t: number) => t / 2,
      boundary: document.createElement('div'),
    };
    scrollToItem(item, 'auto', 'end', 'center', options);

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    expect(scrollIntoView).toHaveBeenNthCalledWith(1, item.entry.target, {
      ...options,
      behavior: 'auto',
      inline: 'end',
      block: 'center',
    });
  });

  test('should not scroll if target not provided', () => {
    scrollToItem(undefined);

    expect(scrollIntoView).not.toHaveBeenCalled();
  });
});

describe('getItemElementById', () => {
  test('should return element node when exists', () => {
    const id = 'test123';
    document.body.innerHTML = `
    <div data-key=${id}>${id}</div>
    <div>other node</div>
    <div data-key=123 />other2</div>`;

    const result = getItemElementById(id);

    expect(result instanceof HTMLDivElement).toBeTruthy();
    expect(result?.textContent).toEqual(id);
  });

  test('should return null when element does not exists', () => {
    const id = 'test123';
    document.body.innerHTML = `
    <div data-key=${id}>${id}</div>
    <div>other node</div>
    <div data-key=123 />other2</div>`;

    expect(getItemElementById('test456')).toEqual(null);
    expect(getItemElementById(456)).toEqual(null);
    expect(getItemElementById('')).toEqual(null);
  });
});

describe('getItemElementByIndex', () => {
  test('should return element node when exists', () => {
    const index = '123';
    document.body.innerHTML = `
    <div data-index=${index}>${index}</div>
    <div>other node</div>
    <div data-key=123 />other2</div>`;

    const result = getItemElementByIndex(index);

    expect(result instanceof HTMLDivElement).toBeTruthy();
    expect(result?.textContent).toEqual(index);
  });

  test('should return null when element does not exists', () => {
    const index = '123';
    document.body.innerHTML = `
    <div data-index=${index}>${index}</div>
    <div>other node</div>
    <div data-key=123 />other2</div>`;

    expect(getItemElementByIndex('456')).toEqual(null);
    expect(getItemElementByIndex(456)).toEqual(null);
    expect(getItemElementByIndex('')).toEqual(null);
  });
});

describe('getElementOrConstructor', () => {
  const JsxElem = <div>jsx_elem</div>;
  const JsxElemConstructor = () => JsxElem;
  const Memo = React.memo(JsxElemConstructor);

  test('should return jsx element if jsx elem passed', () => {
    const result = getElementOrConstructor(JsxElem);
    expect(result).toEqual(JsxElem);
    expect(React.isValidElement(result)).toBeTruthy();
  });

  test('should return a jsx elem if constructor passed', () => {
    const result = getElementOrConstructor(JsxElemConstructor);
    expect(result).toEqual(<JsxElemConstructor />);
    expect(React.isValidElement(result)).toBeTruthy();
  });

  test('should return a jsx elem if React.memo passed', () => {
    const result = getElementOrConstructor(Memo);

    expect(React.isValidElement(result)).toBeTruthy();
  });

  test('should return null if no element passed', () => {
    expect(getElementOrConstructor(undefined)).toEqual(null);
  });
});

describe('filterSeparators', () => {
  test('should filter separators from items', () => {
    expect(
      filterSeparators([
        'test0',
        'test0-separator',
        'test1',
        'test1-separator',
        'test2',
        'test2-separator',
        'test3',
        'test3-separator',
        'test4',
        'test4-separator',
      ]),
    ).toEqual(['test0', 'test1', 'test2', 'test3', 'test4']);
  });

  test('should return argument if nothing to filter', () => {
    expect(filterSeparators(['test0', 'test1'])).toEqual(['test0', 'test1']);
    expect(filterSeparators([])).toEqual([]);
  });
});

describe('getItemId', () => {
  describe('itemId prop', () => {
    const id = 'test123';
    const Elem = (props: { itemId?: string | number }) => (
      <div {...props}>test</div>
    );

    it('should return itemId if exists', () => {
      expect(getItemId(<Elem itemId={id} />)).toEqual(id);
      expect(getItemId(<Elem itemId={id} key={id} />)).toEqual(id);
    });

    it('should work if "id" is number', () => {
      const id = 123;
      const expected = String(id);
      expect(getItemId(<Elem itemId={id} />)).toEqual(expected);
      expect(getItemId(<Elem itemId={id} key={id} />)).toEqual(expected);
    });

    it('should return key if itemId does not exists', () => {
      expect(getItemId(<Elem key={id} />)).toEqual(id);
    });

    it('should return empty string if itemId and key does not exists', () => {
      expect(getItemId(<Elem />)).toEqual('');
    });
  });
});
