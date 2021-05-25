import React from 'react'

const itemsToArray = (items) => Object.values(items)

const useApi = (allItems) => {
  const [itemsArray, setItemsArray] = React.useState(itemsToArray(allItems))

  React.useEffect(() => {
    setItemsArray(itemsToArray(allItems))
  }, [allItems])

  const visibleItems = React.useMemo(
    () => itemsArray.filter((el) => el?.visible),
    [itemsArray],
  )
  const visibleItemsWithoutSeparators = React.useMemo(
    () => visibleItems.filter((el) => !/-separator/.test(String(el?.key))),
    [visibleItems],
  )

  const isFirstItemVisible = !!itemsArray?.[0]?.visible
  const isLastItemVisible = !!itemsArray?.slice(-1)?.[0]?.visible

  const firstVisibleItem = visibleItems?.[0]
  const lastVisibleItem = visibleItems?.slice(-1)?.[0]

  const isOdd = !!(visibleItemsWithoutSeparators % 2)
  const centerVisibleItem = isOdd
    ? visibleItemsWithoutSeparators[
        Math.floor(visibleItemsWithoutSeparators.length / 2)
      ]
    : visibleItems[Math.ceil(visibleItems.length / 2) - 1]

  const getItemById = React.useCallback(
    (id) => itemsArray.find((el) => el.key === String(id)),
    [itemsArray],
  )
  const isItemVisible = React.useCallback((id) => !!getItemById(id)?.visible, [
    getItemById,
  ])

  const getPrevItem = React.useCallback(() => {
    const firstIndex = itemsArray.findIndex((el) => el === firstVisibleItem)
    return itemsArray[firstIndex - 1]
  }, [itemsArray, firstVisibleItem])
  const getNextItem = React.useCallback(() => {
    const lastIndex = itemsArray.findIndex((el) => el === lastVisibleItem)
    return itemsArray[lastIndex + 1]
  }, [lastVisibleItem, itemsArray])

  const isLastItem = React.useCallback(
    (id) => itemsArray?.slice?.(-1)?.[0] === getItemById(id),
    [itemsArray, getItemById],
  )

  const result = {
    allItems: itemsArray,
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
    visibleItems,
    visibleItemsWithoutSeparators,
  }

  return result
}

export default useApi
