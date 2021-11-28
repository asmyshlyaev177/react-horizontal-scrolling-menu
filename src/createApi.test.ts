/* eslint-disable radar/no-duplicate-string */
import createApi from './createApi';
import ItemsMap from './ItemsMap';
import { observerEntriesToItems } from './helpers';
import { observerOptions } from './settings';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

jest.mock('smooth-scroll-into-view-if-needed');

import { getItemElementById, getItemElementByIndex } from './helpers';

const setup = (ratio = [0.3, 1, 0.7]) => {
  const items = new ItemsMap();

  const scrollIntoView = jest.fn();
  const newItems = [
    {
      intersectionRatio: 0,
      target: { dataset: { index: '0', key: 'test1' } },
    },
    {
      intersectionRatio: 0,
      target: { dataset: { index: '0.1', key: 'test1-separator' } },
    },
    {
      intersectionRatio: 0,
      target: { dataset: { index: '1', key: 'test2' } },
    },
  ].map((el, ind) => ({
    ...el,
    intersectionRatio: ratio[ind],
    target: { ...el.target, scrollIntoView },
  }));

  const nodes = observerEntriesToItems(
    newItems as unknown as IntersectionObserverEntry[],
    { ...observerOptions, ratio: 0.5 }
  );
  items.set(nodes);
  const visibleItems = items.getVisible().map((el) => el[1].key);

  return { items, nodes: nodes.map((el) => el[1]), visibleItems };
};

describe('createApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('visibleItems', () => {
    const { items, visibleItems } = setup([0.3, 1, 0.7]);

    expect(createApi(items, visibleItems).visibleItems).toEqual(visibleItems);
  });

  test('visibleItemsWithoutSeparators', () => {
    const { items, visibleItems } = setup([0.3, 1, 0.7]);
    const expected = items
      .toArr()
      .filter((el) => el[1].visible)
      .filter((el) => !/separator/.test(String(el)))
      .map((el) => el[1].key);

    expect(
      createApi(items, visibleItems).visibleItemsWithoutSeparators
    ).toEqual(expected);

    expect(createApi(items, []).visibleItemsWithoutSeparators).toEqual([]);
    expect(createApi(items, []).visibleItemsWithoutSeparators).toEqual([]);
  });

  describe('helpers', () => {
    describe('scrollToItem', () => {
      test('should call scrollIntoView', () => {
        const { items, visibleItems } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };
        createApi(items, visibleItems, boundary).scrollToItem(
          document.createElement('div')
        );
        expect(scrollIntoView).toHaveBeenCalledTimes(1);
        expect(scrollIntoView).toHaveBeenNthCalledWith(1, boundary.current, {
          behavior: 'smooth',
          inline: 'end',
          block: 'nearest',
          boundary: boundary.current,
          ease: undefined,
          duration: undefined,
        });
      });

      test('with transitionOptions', () => {
        const { items, visibleItems } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };
        const transitionOptions = {
          duration: 500,
          ease: (t: number) => t,
          behavior: () => false,
        };

        createApi(
          items,
          visibleItems,
          boundary,
          transitionOptions
        ).scrollToItem(document.createElement('div'));

        expect(scrollIntoView).toHaveBeenCalledTimes(1);
        expect(scrollIntoView).toHaveBeenNthCalledWith(1, boundary.current, {
          behavior: transitionOptions.behavior,
          inline: 'end',
          block: 'nearest',
          boundary: boundary.current,
          ease: transitionOptions.ease,
          duration: transitionOptions.duration,
        });
      });

      test('arguments should have priority over transitionOptions', () => {
        const { items, visibleItems } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };
        const transitionOptions = {
          duration: 500,
          ease: (t: number) => t,
          behavior: () => false,
        };

        createApi(
          items,
          visibleItems,
          boundary,
          transitionOptions
        ).scrollToItem(
          document.createElement('div'),
          'auto',
          'center',
          'center'
        );

        expect(scrollIntoView).toHaveBeenCalledTimes(1);
        expect(scrollIntoView).toHaveBeenNthCalledWith(1, boundary.current, {
          behavior: 'auto',
          inline: 'center',
          block: 'center',
          boundary: boundary.current,
          ease: transitionOptions.ease,
          duration: transitionOptions.duration,
        });
      });
    });

    test('getItemElementById', () => {
      const { items, visibleItems } = setup([0.7, 0, 0]);

      expect(createApi(items, visibleItems).getItemElementById).toEqual(
        getItemElementById
      );
    });

    test('getItemElementByIndex', () => {
      const { items, visibleItems } = setup([0.7, 0, 0]);

      expect(createApi(items, visibleItems).getItemElementByIndex).toEqual(
        getItemElementByIndex
      );
    });
  });

  describe('isFirstItemVisible', () => {
    test('first item visible', () => {
      const { items, visibleItems } = setup([0.7, 0, 0]);

      expect(createApi(items, visibleItems).isFirstItemVisible).toEqual(true);
    });

    test('first item not visible', () => {
      const { items, visibleItems } = setup([0.3, 1, 1]);

      expect(createApi(items, visibleItems).isFirstItemVisible).toEqual(false);
    });

    test('empty items', () => {
      const items = new ItemsMap();

      expect(createApi(items).isFirstItemVisible).toEqual(false);
    });
  });

  describe('isLastItemVisible', () => {
    test('last item visible', () => {
      const { items, visibleItems } = setup([0.3, 0.9, 0.9]);

      expect(createApi(items, visibleItems).isLastItemVisible).toEqual(true);
    });

    test('last item not visible', () => {
      const { items, visibleItems } = setup([1, 1, 0.3]);

      expect(createApi(items, visibleItems).isLastItemVisible).toEqual(false);
    });

    test('empty items', () => {
      const items = new ItemsMap();

      expect(createApi(items).isLastItemVisible).toEqual(false);
    });
  });

  describe('getItemById', () => {
    test('item exist', () => {
      const { items, nodes } = setup([0.1, 1, 0.9]);

      expect(createApi(items).getItemById('test1')).toEqual(nodes[0]);

      expect(createApi(items).getItemById('test2')).toEqual(nodes[2]);
    });

    // eslint-disable-next-line radar/no-duplicate-string
    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items).getItemById('test123')).toEqual(undefined);
      expect(createApi(items).getItemById('')).toEqual(undefined);
    });
  });

  describe('getItemByIndex', () => {
    test('item exist', () => {
      const { items, nodes, visibleItems } = setup([0.1, 1, 0.9]);

      expect(createApi(items, visibleItems).getItemByIndex(0)).toEqual(
        nodes[0]
      );

      expect(createApi(items, visibleItems).getItemByIndex(0)).toEqual(
        nodes[0]
      );
    });

    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items).getItemByIndex(5.1)).toEqual(undefined);
    });
  });

  describe('isItemVisible', () => {
    test('should return visibility', () => {
      const { items, visibleItems } = setup([0.1, 1, 0.9]);
      expect(createApi(items, visibleItems).isItemVisible('test1')).toBeFalsy();
      expect(
        createApi(items, visibleItems).isItemVisible('test2')
      ).toBeTruthy();
    });

    test('item not exist', () => {
      const { items, visibleItems } = setup([0.1, 1, 0.9]);
      expect(createApi(items, visibleItems).isItemVisible('test3')).toBeFalsy();
      expect(createApi(items, visibleItems).isItemVisible('')).toBeFalsy();
    });
  });

  describe('getPrevItem', () => {
    test('have previous item', () => {
      const { items, nodes, visibleItems } = setup([0.1, 1, 0.9]);

      expect(createApi(items, visibleItems).getPrevItem()).toEqual(nodes[0]);
    });

    test('do not have previous item', () => {
      const { items, visibleItems } = setup([1, 0.1, 0.3]);

      expect(createApi(items, visibleItems).getPrevItem()).toEqual(undefined);
    });
  });

  describe('getNextItem', () => {
    test('have next item', () => {
      const { items, nodes, visibleItems } = setup([1, 1, 0.3]);
      expect(createApi(items, visibleItems).getNextItem()).toEqual(nodes[2]);
    });

    test('do not have next item', () => {
      const { items, visibleItems } = setup([0, 0.1, 0.9]);

      expect(createApi(items, visibleItems).getNextItem()).toEqual(undefined);
    });
  });

  describe('isLastItem', () => {
    test('item is last', () => {
      const { items, visibleItems } = setup([0.1, 1, 0.9]);
      expect(createApi(items, visibleItems).isLastItem('test2')).toEqual(true);
    });

    test('do not have previous item', () => {
      const { items, visibleItems } = setup([1, 0.1, 0.3]);

      expect(createApi(items, visibleItems).isLastItem('test1')).toEqual(false);
    });
  });

  describe('scrollPrev', () => {
    test('have prev item', () => {
      const { items, nodes, visibleItems } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };
      createApi(items, visibleItems, boundary).scrollPrev();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[0].entry.target, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end',
        duration: undefined,
        ease: undefined,
        boundary: boundary.current,
      });
    });

    test('no prev item', () => {
      const { items, visibleItems } = setup([1, 1, 1]);

      createApi(items, visibleItems).scrollPrev();

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    test('with transition options', () => {
      const { items, nodes, visibleItems } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };
      const transitionOptions = {
        duration: 500,
        ease: (t: number) => t,
        behavior: () => false,
      };
      createApi(items, visibleItems, boundary, transitionOptions).scrollPrev();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[0].entry.target, {
        behavior: transitionOptions.behavior,
        block: 'nearest',
        inline: 'end',
        duration: transitionOptions.duration,
        ease: transitionOptions.ease,
        boundary: boundary.current,
      });
    });

    test('arguments should have priority over transitionOptions', () => {
      const { items, nodes, visibleItems } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };
      const transitionOptions = {
        duration: 500,
        ease: (t: number) => t,
        behavior: () => false,
      };
      createApi(items, visibleItems, boundary, transitionOptions).scrollPrev(
        'auto',
        'center',
        'center'
      );

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[0].entry.target, {
        behavior: 'auto',
        block: 'center',
        inline: 'center',
        duration: transitionOptions.duration,
        ease: transitionOptions.ease,
        boundary: boundary.current,
      });
    });
  });

  describe('scrollNext', () => {
    test('have next item', () => {
      const { items, nodes, visibleItems } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      createApi(items, visibleItems, boundary).scrollNext();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[2].entry.target, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
        duration: undefined,
        ease: undefined,
        boundary: boundary.current,
      });
    });

    test('no next item', () => {
      const { items, visibleItems } = setup([1, 1, 1]);

      createApi(items, visibleItems).scrollNext();

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    test('with transition options', () => {
      const { items, nodes, visibleItems } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      const transitionOptions = {
        duration: 500,
        ease: (t: number) => t,
        behavior: () => false,
      };
      createApi(items, visibleItems, boundary, transitionOptions).scrollNext();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[2].entry.target, {
        behavior: transitionOptions.behavior,
        block: 'nearest',
        inline: 'start',
        duration: transitionOptions.duration,
        ease: transitionOptions.ease,
        boundary: boundary.current,
      });
    });

    test('arguments should have priority over transitionOptions', () => {
      const { items, nodes, visibleItems } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      const transitionOptions = {
        duration: 500,
        ease: (t: number) => t,
        behavior: () => false,
      };
      createApi(items, visibleItems, boundary, transitionOptions).scrollNext(
        'auto',
        'center',
        'center'
      );

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[2].entry.target, {
        behavior: 'auto',
        block: 'center',
        inline: 'center',
        duration: transitionOptions.duration,
        ease: transitionOptions.ease,
        boundary: boundary.current,
      });
    });
  });
});
