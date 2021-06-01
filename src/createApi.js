// import React from 'react'

const createApi = (items, visibleItems) => {
  const visibleItemsWithoutSeparators = visibleItems.filter(
    (el) => !/separator/.test(String(el))
  )

  // console.log(visibleItemsWithoutSeparators)

  // TODO: wrong(or not guranteed) order for items/separators in CustomMap
  // so need to adjust it
  const isFirstItemVisible = !!items.first()?.visible
  const isLastItemVisible = !!items.last()?.visible

  const firstVisibleItem = items.get(visibleItems?.[0])
  const lastVisibleItem = items.get(visibleItems?.slice(-1)?.[0])

  const isOdd = !!(visibleItemsWithoutSeparators % 2)
  const centerVisibleItem = isOdd
    ? items.get(
        visibleItemsWithoutSeparators[
          Math.floor(visibleItemsWithoutSeparators.length / 2)
        ]
      )
    : items.get(visibleItems[Math.ceil(visibleItems.length / 2) - 1])

  // console.log(items)
  const getItemById = (id) => items.find((el) => el[1].key === String(id))?.[1]
  const getItemByIndex = (index) =>
    items.find((el) => String(el[1].index) === String(index))?.[1]

  const isItemVisible = (id) => !!getItemById(id)?.visible

  const getPrevItem = () => items.prev(firstVisibleItem?.key)

  const getNextItem = () => items.next(lastVisibleItem?.key)

  // TODO: on first render every item is last item, so no separators get rendered
  const isLastItem = (id) => items.last() === getItemById(id)

  const result = {
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
    visibleItemsWithoutSeparators,
  }

  return result
}

export default createApi
