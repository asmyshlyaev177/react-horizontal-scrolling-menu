import createApi from './createApi';
import ItemsMap from './ItemsMap';
import { observerEntriesToItems } from './helpers';
import * as helpers from './helpers';
import { observerOptions } from './settings';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

jest.mock('smooth-scroll-into-view-if-needed');

import { getItemElementById, getItemElementByIndex } from './helpers';
import type { CustomScrollBehavior } from './types';

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
      target: { dataset: { index: '1', key: 2 } },
    },
  ].map((el, ind) => ({
    ...el,
    intersectionRatio: ratio[ind],
    target: { ...el.target, scrollIntoView },
  }));

  const nodes = observerEntriesToItems(
    newItems as unknown as IntersectionObserverEntry[],
    { ...observerOptions, ratio: 0.5 },
  );
  items.set(nodes);
  const visibleElementsWithSeparators = items
    .getVisible()
    .map((el) => el[1].key);

  return {
    items,
    nodes: nodes.map((el) => el[1]),
    visibleElementsWithSeparators,
  };
};

describe('createApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const transitionOptions = {
    duration: 500,
    ease: (t: number) => t,
    behavior: (() => false) as unknown as CustomScrollBehavior,
  };

  test('visibleElementsWithSeparators', () => {
    const { items, visibleElementsWithSeparators } = setup([0.3, 1, 0.7]);

    expect(
      createApi(items, visibleElementsWithSeparators).visibleItems,
    ).toEqual(visibleElementsWithSeparators);
  });

  test('visibleElements', () => {
    const { items, visibleElementsWithSeparators } = setup([0.3, 1, 0.7]);
    const expected = items
      .toArr()
      .filter((el) => el[1].visible)
      .filter((el) => !/separator/.test(String(el)))
      .map((el) => el[1].key);

    expect(
      createApi(items, visibleElementsWithSeparators).visibleElements,
    ).toEqual(expected);
    expect(
      createApi(items, visibleElementsWithSeparators)
        .visibleItemsWithoutSeparators,
    ).toEqual(expected);

    expect(createApi(items, []).visibleElements).toEqual([]);
    expect(createApi(items, []).visibleItemsWithoutSeparators).toEqual([]);
  });

  describe('helpers', () => {
    describe('scrollToItem', () => {
      test('should call scrollIntoView', () => {
        const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };
        createApi(items, visibleElementsWithSeparators, {
          boundary,
        }).scrollToItem(document.createElement('div'));
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
        const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };

        createApi(items, visibleElementsWithSeparators, {
          boundary,
          ...transitionOptions,
        }).scrollToItem(document.createElement('div'));

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

      test('with noPolyfill', () => {
        const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);
        const scrollToItemSpy = jest
          .spyOn(helpers, 'scrollToItem')
          .mockReturnValue(jest.fn() as unknown as void);

        const boundary = { current: document.createElement('div') };
        const transitionOptions = {};

        const noPolyfill = true;

        const elem = document.createElement('div');
        createApi(
          items,
          visibleElementsWithSeparators,
          { boundary, ...transitionOptions },
          noPolyfill,
        ).scrollToItem(elem);

        expect(scrollToItemSpy).toHaveBeenCalledTimes(1);
        expect(scrollToItemSpy).toHaveBeenNthCalledWith(
          1,
          elem,
          undefined,
          undefined,
          undefined,
          expect.objectContaining({ boundary: expect.anything() }),
          noPolyfill,
        );
      });

      test('arguments should have priority over transitionOptions', () => {
        const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };

        createApi(items, visibleElementsWithSeparators, {
          ...transitionOptions,
          boundary,
        }).scrollToItem(
          document.createElement('div'),
          'auto',
          'center',
          'center',
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
      const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);

      expect(
        createApi(items, visibleElementsWithSeparators).getItemElementById,
      ).toEqual(getItemElementById);
    });

    test('getItemElementByIndex', () => {
      const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);

      expect(
        createApi(items, visibleElementsWithSeparators).getItemElementByIndex,
      ).toEqual(getItemElementByIndex);
    });
  });

  describe('isFirstItemVisible', () => {
    test('first item visible', () => {
      const { items, visibleElementsWithSeparators } = setup([0.7, 0, 0]);

      expect(
        createApi(items, visibleElementsWithSeparators).isFirstItemVisible,
      ).toEqual(true);
    });

    test('first item not visible', () => {
      const { items, visibleElementsWithSeparators } = setup([0.3, 1, 1]);

      expect(
        createApi(items, visibleElementsWithSeparators).isFirstItemVisible,
      ).toEqual(false);
    });

    test('empty items', () => {
      const items = new ItemsMap();

      expect(createApi(items).isFirstItemVisible).toEqual(false);
    });
  });

  describe('isLastItemVisible', () => {
    test('last item visible', () => {
      const { items, visibleElementsWithSeparators } = setup([0.3, 0.9, 0.9]);

      expect(
        createApi(items, visibleElementsWithSeparators).isLastItemVisible,
      ).toEqual(true);
    });

    test('last item not visible', () => {
      const { items, visibleElementsWithSeparators } = setup([1, 1, 0.3]);

      expect(
        createApi(items, visibleElementsWithSeparators).isLastItemVisible,
      ).toEqual(false);
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

      expect(createApi(items).getItemById('2')).toEqual(nodes[2]);
      expect(createApi(items).getItemById(2 as unknown as string)).toEqual(
        nodes[2],
      );
    });

    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items).getItemById('test123')).toEqual(undefined);
      expect(createApi(items).getItemById('')).toEqual(undefined);
    });
  });

  describe('getItemByIndex', () => {
    test('item exist', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([
        0.1, 1, 0.9,
      ]);

      expect(
        createApi(items, visibleElementsWithSeparators).getItemByIndex(0),
      ).toEqual(nodes[0]);

      expect(
        createApi(items, visibleElementsWithSeparators).getItemByIndex(0),
      ).toEqual(nodes[0]);
    });

    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items).getItemByIndex(5.1)).toEqual(undefined);
    });
  });

  describe('isItemVisible', () => {
    test('should return visibility', () => {
      const { items, visibleElementsWithSeparators } = setup([0.1, 1, 0.9]);
      expect(
        createApi(items, visibleElementsWithSeparators).isItemVisible('test1'),
      ).toBeFalsy();
      expect(
        createApi(items, visibleElementsWithSeparators).isItemVisible('2'),
      ).toBeTruthy();
      expect(
        createApi(items, visibleElementsWithSeparators).isItemVisible(
          2 as unknown as string,
        ),
      ).toBeTruthy();
    });

    test('item not exist', () => {
      const { items, visibleElementsWithSeparators } = setup([0.1, 1, 0.9]);
      expect(
        createApi(items, visibleElementsWithSeparators).isItemVisible('test3'),
      ).toBeFalsy();
      expect(
        createApi(items, visibleElementsWithSeparators).isItemVisible(''),
      ).toBeFalsy();
    });
  });

  describe('getPrevItem', () => {
    test('have previous item', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([
        0.1, 1, 0.9,
      ]);

      expect(
        createApi(items, visibleElementsWithSeparators).getPrevItem(),
      ).toEqual(nodes[0]);
    });

    test('do not have previous item', () => {
      const { items, visibleElementsWithSeparators } = setup([1, 0.1, 0.3]);

      expect(
        createApi(items, visibleElementsWithSeparators).getPrevItem(),
      ).toEqual(undefined);
    });
  });

  describe('getPrevElement', () => {
    test('have previous item', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([
        0.1, 1, 0.9,
      ]);

      expect(
        createApi(items, visibleElementsWithSeparators).getPrevElement(),
      ).toEqual(nodes[0]);
    });

    test('do not have previous item', () => {
      const { items, visibleElementsWithSeparators } = setup([1, 0.1, 0.3]);

      expect(
        createApi(items, visibleElementsWithSeparators).getPrevElement(),
      ).toEqual(undefined);
    });
  });

  describe('getNextItem', () => {
    test('have next item', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([
        1, 1, 0.3,
      ]);
      expect(
        createApi(items, visibleElementsWithSeparators).getNextItem(),
      ).toEqual(nodes[2]);
    });

    test('do not have next item', () => {
      const { items, visibleElementsWithSeparators } = setup([0, 0.1, 0.9]);

      expect(
        createApi(items, visibleElementsWithSeparators).getNextItem(),
      ).toEqual(undefined);
    });
  });

  describe('getNextElement', () => {
    test('have next item', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([
        1, 1, 0.1,
      ]);
      expect(
        createApi(items, visibleElementsWithSeparators).getNextElement(),
      ).toEqual(nodes[2]);
    });

    test('do not have next item', () => {
      const { items, visibleElementsWithSeparators } = setup([0, 0.1, 0.9]);

      expect(
        createApi(items, visibleElementsWithSeparators).getNextElement(),
      ).toEqual(undefined);
    });
  });

  describe('isLastItem', () => {
    test('item is last', () => {
      const { items, visibleElementsWithSeparators } = setup([0.1, 1, 0.9]);
      expect(
        createApi(items, visibleElementsWithSeparators).isLastItem('2'),
      ).toEqual(true);
      expect(
        createApi(items, visibleElementsWithSeparators).isLastItem(
          2 as unknown as string,
        ),
      ).toEqual(true);
    });

    test('do not have previous item', () => {
      const { items, visibleElementsWithSeparators } = setup([1, 0.1, 0.3]);

      expect(
        createApi(items, visibleElementsWithSeparators).isLastItem('test1'),
      ).toEqual(false);
    });
  });

  describe('scrollPrev', () => {
    test('have prev item', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };
      createApi(items, visibleElementsWithSeparators, {
        boundary,
      }).scrollPrev();

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
      const { items, visibleElementsWithSeparators } = setup([1, 1, 1]);

      createApi(items, visibleElementsWithSeparators).scrollPrev();

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    test('should pass noPolyfill to scrollToItem', () => {
      const { items, visibleElementsWithSeparators } = setup([0, 1, 1]);
      const scrollToItemSpy = jest.spyOn(helpers, 'scrollToItem');

      const noPolyfill = true;
      const api = createApi(
        items,
        visibleElementsWithSeparators,
        undefined,
        noPolyfill,
      );
      api.scrollPrev();
      expect(scrollToItemSpy).toHaveBeenCalled();
      const noPolyfillrop = scrollToItemSpy.mock.calls[0][5];
      expect(noPolyfillrop).toEqual(noPolyfill);
    });

    test('with transition options', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };

      createApi(items, visibleElementsWithSeparators, {
        boundary,
        ...transitionOptions,
      }).scrollPrev();

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
      const { items, nodes, visibleElementsWithSeparators } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };

      createApi(items, visibleElementsWithSeparators, {
        boundary,
        ...transitionOptions,
      }).scrollPrev('auto', 'center', 'center');

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
      const { items, nodes, visibleElementsWithSeparators } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      createApi(items, visibleElementsWithSeparators, {
        boundary,
      }).scrollNext();

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
      const { items, visibleElementsWithSeparators } = setup([1, 1, 1]);

      createApi(items, visibleElementsWithSeparators).scrollNext();

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    test('should pass noPolyfill to scrollToItem', () => {
      const { items, visibleElementsWithSeparators } = setup([0, 1, 1]);
      const scrollToItemSpy = jest.spyOn(helpers, 'scrollToItem');

      const noPolyfill = true;
      const api = createApi(
        items,
        visibleElementsWithSeparators,
        undefined,
        noPolyfill,
      );
      api.scrollNext();
      expect(scrollToItemSpy).toHaveBeenCalled();
      const noPolyfillrop = scrollToItemSpy.mock.calls[0][5];
      expect(noPolyfillrop).toEqual(noPolyfill);
    });

    test('with transition options', () => {
      const { items, nodes, visibleElementsWithSeparators } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };

      createApi(items, visibleElementsWithSeparators, {
        boundary,
        ...transitionOptions,
      }).scrollNext();

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
      const { items, nodes, visibleElementsWithSeparators } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      createApi(items, visibleElementsWithSeparators, {
        boundary,
        ...transitionOptions,
      }).scrollNext('auto', 'center', 'center');

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
