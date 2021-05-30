import React from 'react'

const useApi = (items, visibleItems) => {
  const visibleItemsWithoutSeparators = React.useMemo(
    () => visibleItems.filter((el) => !/-separator/.test(String(el?.key))),
    [visibleItems]
  )

  const isFirstItemVisible = !!items.first()?.visible
  const isLastItemVisible = !!items.last()?.visible

  const firstVisibleItem = items.get(visibleItems?.[0])
  const lastVisibleItem = items.get(visibleItems?.slice(-1)?.[0])

  const isOdd = !!(visibleItemsWithoutSeparators % 2)
  const centerVisibleItem = isOdd
    ? visibleItemsWithoutSeparators[
        Math.floor(visibleItemsWithoutSeparators.length / 2)
      ]
    : visibleItems[Math.ceil(visibleItems.length / 2) - 1]

  const getItemById = React.useCallback(
    (id) => items.find((el) => el[0] === id)?.[1],
    [items]
  )

  const isItemVisible = React.useCallback(
    (id) => !!getItemById(id)?.visible,
    [getItemById]
  )

  const getPrevItem = React.useCallback(
    () => items.prev(firstVisibleItem?.key)?.[1],
    [items, firstVisibleItem]
  )

  const getNextItem = React.useCallback(
    () => items.next(lastVisibleItem?.key)?.[1],
    [items, lastVisibleItem]
  )

  const isLastItem = React.useCallback(
    (id) => items.last() === getItemById(id),
    [items, getItemById]
  )

  const result = {
    centerVisibleItem,
    firstVisibleItem,
    getItemById,
    getNextItem,
    getPrevItem,
    isFirstItemVisible,
    isItemVisible,
    isLastItem,
    isLastItemVisible,
    lastVisibleItem,
    visibleItemsWithoutSeparators,
  }

  return result
}

export default useApi
