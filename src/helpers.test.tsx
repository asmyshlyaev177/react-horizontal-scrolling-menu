import React from 'react';
import {
  filterSeparators,
  getElementOrConstructor,
  getNodesFromRefs,
  observerEntriesToItems,
  scrollToItem,
} from './helpers';
import { observerOptions } from './settings';
import { IOItem } from './types';

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
      observerEntriesToItems(entries, { ...observerOptions, ratio: 0.5 })
    ).toEqual(result);
  });
});

describe('scrollToItem', () => {
  test('should scroll to item with default options', () => {
    const scrollIntoViewMock = jest.fn();
    const requestAnimationFrameMock = jest.fn((fn) => fn?.());
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    window.requestAnimationFrame = requestAnimationFrameMock;

    const item = {
      entry: { target: document.createElement('div') },
    } as unknown as IOItem;

    scrollToItem(item);

    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenNthCalledWith(1, {
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end',
    });
  });

  test('should scroll to item with custom options', async () => {
    const scrollIntoViewMock = jest.fn();
    const requestAnimationFrameMock = jest.fn((fn) => fn?.());
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    window.requestAnimationFrame = requestAnimationFrameMock;

    const item = {
      entry: { target: document.createElement('div') },
    } as unknown as IOItem;

    scrollToItem(item, 'auto', 'center', 'end');

    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenNthCalledWith(1, {
      behavior: 'auto',
      block: 'end',
      inline: 'center',
    });
  });
});

describe('getElementOrConstructor', () => {
  const JsxElem = <div>jsx_elem</div>;
  const JsxElemConstructor = () => JsxElem;

  test('should return jsx element if jsx elem passed', () => {
    expect(getElementOrConstructor(JsxElem)).toEqual(JsxElem);
  });

  test('should return a jsx elem if constructor passed', () => {
    expect(getElementOrConstructor(JsxElemConstructor)).toEqual(
      <JsxElemConstructor />
    );
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
      ])
    ).toEqual(['test0', 'test1', 'test2', 'test3', 'test4']);
  });

  test('should return argument if nothing to filter', () => {
    expect(filterSeparators(['test0', 'test1'])).toEqual(['test0', 'test1']);
    expect(filterSeparators([])).toEqual([]);
  });
});
