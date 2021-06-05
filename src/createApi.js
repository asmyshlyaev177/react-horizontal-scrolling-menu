import { scrollToItem } from './helpers'

export default function createApi(items, visibleItems = []) {
  const visibleItemsWithoutSeparators = visibleItems.filter(
    (el) => !/separator/.test(String(el))
  )

  // console.log(visibleItemsWithoutSeparators)

  // so need to adjust it
  const isFirstItemVisible = !!items.first()?.visible
  const isLastItemVisible = !!items.last()?.visible

  // const isOdd = !!(visibleItemsWithoutSeparators % 2)

  // const centerVisibleItem = isOdd
  //   ? items.get(
  //       visibleItemsWithoutSeparators[
  //         Math.floor(visibleItemsWithoutSeparators.length / 2)
  //       ]
  //     )
  //   : items.get(visibleItems[Math.ceil(visibleItems.length / 2 - 1)])

  const getItemById = (id) => items.find((el) => el[1].key === String(id))?.[1]

  const getItemByIndex = (index) =>
    items.find((el) => String(el[1].index) === String(index))?.[1]

  const isItemVisible = (id) => !!getItemById(id)?.visible

  const getPrevItem = () => items.prev(items.getVisible()?.[0]?.[1])

  const getNextItem = () =>
    items.next(items.getVisible()?.slice?.(-1)?.[0]?.[1])

  const isLastItem = (id) => items.last() === getItemById(id)

  const scrollPrev = () => {
    scrollToItem(getPrevItem()?.entry?.target, 'smooth', 'end')
  }

  const scrollNext = () => {
    scrollToItem(getNextItem()?.entry?.target, 'smooth', 'start')
  }

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
  }
}
