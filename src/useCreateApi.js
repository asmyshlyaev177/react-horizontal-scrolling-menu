/* eslint-disable react/display-name */
import React from 'react'

// TODO: tests
function useCreateApi(items, visibleItems) {
  const visibleItemsWithoutSeparators = React.useMemo(
    () => visibleItems.filter((el) => !/separator/.test(String(el))),
    [visibleItems]
  )

  // console.log(visibleItemsWithoutSeparators)

  // so need to adjust it
  const isFirstItemVisible = React.useMemo(
    () => !!items.first()?.visible,
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [visibleItems, items]
  )
  const isLastItemVisible = React.useMemo(
    () => !!items.last()?.visible,
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [visibleItems, items]
  )

  const firstVisibleItem = React.useMemo(
    () => items.get(visibleItems?.[0]),
    [items, visibleItems]
  )
  const lastVisibleItem = React.useMemo(
    () => items.get(visibleItems?.slice(-1)?.[0]),
    [items, visibleItems]
  )

  const isOdd = React.useMemo(
    () => !!(visibleItemsWithoutSeparators % 2),
    [visibleItemsWithoutSeparators]
  )

  const centerVisibleItem = React.useMemo(
    () =>
      isOdd
        ? items.get(
            visibleItemsWithoutSeparators[
              Math.floor(visibleItemsWithoutSeparators.length / 2)
            ]
          )
        : items.get(visibleItems[Math.ceil(visibleItems.length / 2 - 1)]),
    [isOdd, items, visibleItems, visibleItemsWithoutSeparators]
  )
  // console.log({
  //   centerVisibleItem,
  //   items,
  //   visibleItems,
  //   visibleItemsWithoutSeparators,
  //   isOdd,
  // })

  // console.log(items)
  const getItemById = React.useCallback(
    (id) => items.find((el) => el[1].key === String(id))?.[1],
    [items]
  )
  const getItemByIndex = React.useCallback(
    (index) => items.find((el) => String(el[1].index) === String(index))?.[1],
    [items]
  )

  const isItemVisible = React.useCallback(
    (id) => !!getItemById(id)?.visible,
    [getItemById]
  )

  const getPrevItem = React.useCallback(
    () => items.prev(items.getVisible()?.[0]?.[1]),
    [items]
  )

  const getNextItem = React.useCallback(
    () => items.next(items.getVisible()?.slice?.(-1)?.[0]?.[1]),
    [items]
  )

  const isLastItem = React.useCallback(
    (id) => items.last() === getItemById(id),
    [getItemById, items]
  )

  const scrollToItem = React.useCallback(
    (item, behavior = 'smooth', inline = 'end') => {
      if (item) {
        window &&
          window.requestAnimationFrame(() =>
            item.scrollIntoView({
              behavior,
              inline,
            })
          )
      }
    },
    []
  )

  const scrollPrev = React.useCallback(() => {
    scrollToItem(getPrevItem()?.entry?.target, 'smooth', 'end')
  }, [getPrevItem, scrollToItem])

  const scrollNext = React.useCallback(() => {
    scrollToItem(getNextItem()?.entry?.target, 'smooth', 'start')
  }, [getNextItem, scrollToItem])

  // TODO: sliding window
  // const scrollNextCentered = () => {}
  // const scrollPrevCentered = () => {}

  return {
    centerVisibleItem,
    firstVisibleItem,
    getItemById,
    getItemByIndex,
    getNextItem,
    getPrevItem,
    isFirstItemVisible,
    isItemVisible,
    isLastItem,
    isLastItemVisible,
    lastVisibleItem,
    scrollNext,
    scrollPrev,
    scrollToItem,
    visibleItemsWithoutSeparators,
  }
}

export default useCreateApi
