import { renderHook } from '@testing-library/react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

import createApi from './createApi';
import * as helpers from './helpers';
import {
  getItemElementById,
  getItemElementByIndex,
  observerEntriesToItems,
} from './helpers';
import { ItemsMap } from './ItemsMap';
import { observerOptions } from './settings';
import type { CustomScrollBehavior } from './types';

jest.mock('smooth-scroll-into-view-if-needed');

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
      target: { dataset: { index: '1', key: 2 } },
    },
    {
      intersectionRatio: 0,
      target: { dataset: { index: '2', key: 3 } },
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
  items.setBatch(nodes);

  // Re-deliver the same entries with new ratios, as the observer would.
  const applyRatio = (nextRatio: number[]) =>
    items.setBatch(
      observerEntriesToItems(
        newItems.map((el, ind) => ({
          ...el,
          intersectionRatio: nextRatio[ind],
        })) as unknown as IntersectionObserverEntry[],
        { ...observerOptions, ratio: 0.5 },
      ),
    );

  return {
    items,
    applyRatio,
    nodes: nodes.map((el) => el[1]),
  };
};

describe('createApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const transitionOptions = {
    duration: 500,
    behavior: (() => false) as unknown as CustomScrollBehavior,
  };

  const menuVisible = { current: true };

  describe('helpers', () => {
    describe('scrollToItem', () => {
      test('should call scrollIntoView', () => {
        const { items } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };
        createApi(items, menuVisible, {
          boundary,
        }).scrollToItem(document.createElement('div'));
        expect(scrollIntoView).toHaveBeenCalledTimes(1);
        expect(scrollIntoView).toHaveBeenNthCalledWith(1, boundary.current, {
          behavior: 'smooth',
          inline: 'end',
          block: 'nearest',
          boundary: boundary.current,
          duration: undefined,
        });
      });

      test('with transitionOptions', () => {
        const { items } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };

        createApi(items, menuVisible, {
          boundary,
          ...transitionOptions,
        }).scrollToItem(document.createElement('div'));

        expect(scrollIntoView).toHaveBeenCalledTimes(1);
        expect(scrollIntoView).toHaveBeenNthCalledWith(1, boundary.current, {
          behavior: transitionOptions.behavior,
          inline: 'end',
          block: 'nearest',
          boundary: boundary.current,
          duration: transitionOptions.duration,
        });
      });

      test('with noPolyfill', () => {
        const { items } = setup([0.7, 0, 0]);
        const scrollToItemSpy = jest
          .spyOn(helpers, 'scrollToItem')
          .mockReturnValue(jest.fn() as unknown as void);

        const boundary = { current: document.createElement('div') };
        const transitionOptions = {};

        const noPolyfill = true;

        const elem = document.createElement('div');
        createApi(
          items,
          menuVisible,
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
        const { items } = setup([0.7, 0, 0]);

        const boundary = { current: document.createElement('div') };

        createApi(items, menuVisible, {
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
          duration: transitionOptions.duration,
        });
      });
    });

    test('getItemElementById', () => {
      const { items } = setup([0.7, 0, 0]);

      expect(createApi(items, menuVisible).getItemElementById).toEqual(
        getItemElementById,
      );
    });

    test('getItemElementByIndex', () => {
      const { items } = setup([0.7, 0, 0]);

      expect(createApi(items, menuVisible).getItemElementByIndex).toEqual(
        getItemElementByIndex,
      );
    });
  });

  describe('isFirstItemVisible', () => {
    test('first item visible', () => {
      const { items } = setup([0.7, 0, 0]);

      expect(createApi(items, menuVisible).isFirstItemVisible).toEqual(true);
    });

    test('first item not visible', () => {
      const { items } = setup([0.3, 1, 1]);

      expect(createApi(items, menuVisible).isFirstItemVisible).toEqual(false);
    });

    test('empty items', () => {
      const items = new ItemsMap();

      expect(createApi(items, menuVisible).isFirstItemVisible).toEqual(false);
    });

    test('reflects visibility changes after the api object was created', () => {
      const { items, applyRatio } = setup([0.7, 0, 0]);
      const api = createApi(items, menuVisible);

      expect(api.isFirstItemVisible).toEqual(true);
      applyRatio([0.3, 1, 1]);
      expect(api.isFirstItemVisible).toEqual(false);
    });
  });

  describe('isLastItemVisible', () => {
    test('last item visible', () => {
      const { items } = setup([0.3, 0.9, 0.9]);

      expect(createApi(items, menuVisible).isLastItemVisible).toEqual(true);
    });

    test('last item not visible', () => {
      const { items } = setup([1, 1, 0.3]);

      expect(createApi(items, menuVisible).isLastItemVisible).toEqual(false);
    });

    test('empty items', () => {
      const items = new ItemsMap();

      expect(createApi(items, menuVisible).isLastItemVisible).toEqual(false);
    });

    test('reflects visibility changes after the api object was created', () => {
      const { items, applyRatio } = setup([1, 1, 0.3]);
      const api = createApi(items, menuVisible);

      expect(api.isLastItemVisible).toEqual(false);
      applyRatio([0.3, 0.9, 0.9]);
      expect(api.isLastItemVisible).toEqual(true);
    });
  });

  describe('getItemById', () => {
    test('item exist', () => {
      const { items, nodes } = setup([0.1, 1, 0.9]);

      expect(createApi(items, menuVisible).getItemById('test1')).toEqual(
        nodes[0],
      );

      expect(createApi(items, menuVisible).getItemById('2')).toEqual(nodes[1]);
      expect(
        createApi(items, menuVisible).getItemById(2 as unknown as string),
      ).toEqual(nodes[1]);
    });

    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items, menuVisible).getItemById('test123')).toEqual(
        undefined,
      );
      expect(createApi(items, menuVisible).getItemById('')).toEqual(undefined);
    });
  });

  describe('getItemByIndex', () => {
    test('item exist', () => {
      const { items, nodes } = setup([0.1, 1, 0.9]);

      expect(createApi(items, menuVisible).getItemByIndex(0)).toEqual(nodes[0]);

      expect(createApi(items, menuVisible).getItemByIndex(0)).toEqual(nodes[0]);
    });

    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items, menuVisible).getItemByIndex(5.1)).toEqual(
        undefined,
      );
    });
  });

  describe('isItemVisible', () => {
    test('should return visibility', () => {
      const { items } = setup([0.1, 1, 0.9]);

      expect(createApi(items, menuVisible).isItemVisible('test1')).toBeFalsy();
      expect(createApi(items, menuVisible).isItemVisible('2')).toBeTruthy();
      expect(
        createApi(items, menuVisible).isItemVisible(2 as unknown as string),
      ).toBeTruthy();
    });

    test('item not exist', () => {
      const { items } = setup([0.1, 1, 0.9]);
      expect(createApi(items, menuVisible).isItemVisible('test3')).toBeFalsy();
      expect(createApi(items, menuVisible).isItemVisible('')).toBeFalsy();
    });
  });

  describe('useIsVisible', () => {
    test('reads current visibility on subscribe when the first IO batch preceded it', () => {
      // setup() delivers the initial batch BEFORE any hook subscribes,
      // mirroring WebKit firing the intersection update between the layout
      // effect that observes and the passive effect that subscribes — an
      // emit with no subscriber is lost, so the hook must read the map.
      const { items } = setup([0.7, 0, 0]);
      const api = createApi(items, menuVisible);

      const hidden = renderHook(() => api.useIsVisible('3', true));
      expect(hidden.result.current).toBe(false);

      const visible = renderHook(() => api.useIsVisible('test1', false));
      expect(visible.result.current).toBe(true);

      const first = renderHook(() => api.useIsVisible('first', false));
      expect(first.result.current).toBe(true);

      const last = renderHook(() => api.useIsVisible('last', true));
      expect(last.result.current).toBe(false);
    });
  });

  describe('getPrevElement', () => {
    test('have previous item', () => {
      const { items, nodes } = setup([0.1, 1, 0.9]);

      expect(createApi(items, menuVisible).getPrevElement()).toEqual(nodes[0]);
    });

    test('do not have previous item', () => {
      const { items } = setup([1, 0.1, 0.3]);

      expect(createApi(items, menuVisible).getPrevElement()).toEqual(undefined);
    });
  });

  describe('getNextElement', () => {
    test('have next item', () => {
      const { items, nodes } = setup([1, 1, 0.1]);
      expect(createApi(items, menuVisible).getNextElement()).toEqual(nodes[2]);
    });

    test('do not have next item', () => {
      const { items } = setup([0, 0.1, 0.9]);

      expect(createApi(items, menuVisible).getNextElement()).toEqual(undefined);
    });
  });

  describe('isLastItem', () => {
    test('item is last', () => {
      const { items } = setup([0.1, 1, 0.9]);
      expect(createApi(items, menuVisible).isLastItem('3')).toEqual(true);
      expect(
        createApi(items, menuVisible).isLastItem(3 as unknown as string),
      ).toEqual(true);
    });

    test('do not have previous item', () => {
      const { items } = setup([1, 0.1, 0.3]);

      expect(createApi(items, menuVisible).isLastItem('test1')).toEqual(false);
    });
  });

  describe('scrollPrev', () => {
    test('have prev item', () => {
      const { items, nodes } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };
      createApi(items, menuVisible, {
        boundary,
      }).scrollPrev();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[0].entry.target, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end',
        duration: undefined,
        boundary: boundary.current,
      });
    });

    test('no prev item', () => {
      const { items } = setup([1, 1, 1]);

      createApi(items, menuVisible).scrollPrev();

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    test('should pass noPolyfill to scrollToItem', () => {
      const { items } = setup([0, 1, 1]);
      const scrollToItemSpy = jest.spyOn(helpers, 'scrollToItem');

      const noPolyfill = true;
      const api = createApi(items, menuVisible, undefined, noPolyfill);
      api.scrollPrev();
      expect(scrollToItemSpy).toHaveBeenCalled();
      const noPolyfillrop = scrollToItemSpy.mock.calls[0][5];
      expect(noPolyfillrop).toEqual(noPolyfill);
    });

    test('with transition options', () => {
      const { items, nodes } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };

      createApi(items, menuVisible, {
        boundary,
        ...transitionOptions,
      }).scrollPrev();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[0].entry.target, {
        behavior: transitionOptions.behavior,
        block: 'nearest',
        inline: 'end',
        duration: transitionOptions.duration,
        boundary: boundary.current,
      });
    });

    test('arguments should have priority over transitionOptions', () => {
      const { items, nodes } = setup([0, 1, 1]);

      const boundary = { current: document.createElement('div') };

      createApi(items, menuVisible, {
        boundary,
        ...transitionOptions,
      }).scrollPrev('auto', 'center', 'center');

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[0].entry.target, {
        behavior: 'auto',
        block: 'center',
        inline: 'center',
        duration: transitionOptions.duration,
        boundary: boundary.current,
      });
    });
  });

  describe('scrollNext', () => {
    test('have next item', () => {
      const { items, nodes } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      createApi(items, menuVisible, {
        boundary,
      }).scrollNext();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[2].entry.target, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
        duration: undefined,
        boundary: boundary.current,
      });
    });

    test('no next item', () => {
      const { items } = setup([1, 1, 1]);

      createApi(items, menuVisible).scrollNext();

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    test('should pass noPolyfill to scrollToItem', () => {
      const { items } = setup([0, 1, 1]);
      const scrollToItemSpy = jest.spyOn(helpers, 'scrollToItem');

      const noPolyfill = true;
      const api = createApi(items, menuVisible, undefined, noPolyfill);
      api.scrollNext();
      expect(scrollToItemSpy).toHaveBeenCalled();
      const noPolyfillrop = scrollToItemSpy.mock.calls[0][5];
      expect(noPolyfillrop).toEqual(noPolyfill);
    });

    test('with transition options', () => {
      const { items, nodes } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };

      createApi(items, menuVisible, {
        boundary,
        ...transitionOptions,
      }).scrollNext();

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[2].entry.target, {
        behavior: transitionOptions.behavior,
        block: 'nearest',
        inline: 'start',
        duration: transitionOptions.duration,
        boundary: boundary.current,
      });
    });

    test('arguments should have priority over transitionOptions', () => {
      const { items, nodes } = setup([1, 1, 0]);

      const boundary = { current: document.createElement('div') };
      createApi(items, menuVisible, {
        boundary,
        ...transitionOptions,
      }).scrollNext('auto', 'center', 'center');

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView).toHaveBeenNthCalledWith(1, nodes[2].entry.target, {
        behavior: 'auto',
        block: 'center',
        inline: 'center',
        duration: transitionOptions.duration,
        boundary: boundary.current,
      });
    });
  });
});
