import { scrollToItem } from './helpers';
import ItemsMap from './ItemsMap';

import { visibleItems } from './types';

export default function createApi(
  items: ItemsMap,
  visibleItems: visibleItems = []
) {
  const visibleItemsWithoutSeparators = visibleItems.filter(
    (el) => !/separator/.test(String(el))
  );

  // console.log(visibleItemsWithoutSeparators)

  // so need to adjust it
  const isFirstItemVisible = !!items.first()?.visible;
  const isLastItemVisible = !!items.last()?.visible;

  // const isOdd = !!(visibleItemsWithoutSeparators % 2)

  // const centerVisibleItem = isOdd
  //   ? items.get(
  //       visibleItemsWithoutSeparators[
  //         Math.floor(visibleItemsWithoutSeparators.length / 2)
  //       ]
  //     )
  //   : items.get(visibleItems[Math.ceil(visibleItems.length / 2 - 1)])

  const getItemById = (id: string) =>
    items.find((value) => value[1].key === String(id))?.[1];

  const getItemByIndex = (index: number) =>
    items.find((el) => String(el[1].index) === String(index))?.[1];

  const isItemVisible = (id: string) => Boolean(getItemById(id)?.visible);

  const getPrevItem = () => items.prev(items.getVisible()?.[0]?.[1]);

  const getNextItem = () =>
    items.next(items.getVisible()?.slice?.(-1)?.[0]?.[1]);

  const isLastItem = (id: string) => items.last() === getItemById(id);

  const scrollPrev = (): void => {
    const element = getPrevItem()?.entry?.target;
    element && scrollToItem(element, 'smooth', 'end');
  };

  const scrollNext = (): void => {
    const element = getNextItem()?.entry?.target;
    element && scrollToItem(element, 'smooth', 'start');
  };

  // TODO: sliding window
  // const scrollNextCentered = () => {}
  // const scrollPrevCentered = () => {}

  return {
    // centerVisibleItem,
    getItemById,
    getItemByIndex,
    getNextItem,
    getPrevItem,
    isFirstItemVisible,
    isItemVisible,
    isLastItem,
    isLastItemVisible,
    scrollNext,
    scrollPrev,
    scrollToItem,
    visibleItemsWithoutSeparators,
  };
}
