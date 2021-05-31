// import React from 'react'

const createApi = (items, visibleItems) => {
  const visibleItemsWithoutSeparators = visibleItems.filter(
    (el) => !/-separator/.test(String(el))
  )

  // TODO: wrong(or not guranteed) order for items/separators in CustomMap
  // so need to adjust it
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

  const getItemById = (id) => items.find((el) => el[0] === id)?.[1]

  const isItemVisible = (id) => !!getItemById(id)?.visible

  const getPrevItem = () => items.prev(firstVisibleItem?.key)?.[1]

  const getNextItem = () => items.next(lastVisibleItem?.key)?.[1]

  const isLastItem = (id) => items.last() === getItemById(id)

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

export default createApi
