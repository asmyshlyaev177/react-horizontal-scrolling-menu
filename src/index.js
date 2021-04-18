/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'

import ScrollContainer from './ScrollContainer'
import MenuItems from './MenuItems'
import useIntersectionObserver from './useIntersectionObserver'
// import useIsMounted from './useIsMounted'
import useItemsChanged from './useItemsChanged'

const rootMargin = '5px'
const threshold = [0, 1]
const ratio = 0.95

// TODO: memo, callbacks ? move to hook ?
const createApi = (allItems) => {
  const itemsArray = Object.values(allItems)
  // console.log(itemsArray)

  const visibleItems = itemsArray.filter((el) => el?.visible)
  const visibleItemsWithoutSeparators = visibleItems.filter(
    (el) => !/-separator/.test(String(el?.key)),
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

  const getItemById = (id) => itemsArray.find((el) => el.key === id)
  const isItemVisible = (id) => !!getItemById(id)?.visible

  const getPrevItem = () => {
    const firstIndex = itemsArray.findIndex((el) => el === firstVisibleItem)
    return itemsArray[firstIndex - 1]
  }
  const getNextItem = () => {
    const lastIndex = itemsArray.findIndex((el) => el === lastVisibleItem)
    return itemsArray[lastIndex + 1]
  }

  const result = {
    allItems: itemsArray,
    centerVisibleItem,
    firstVisibleItem,
    getItemById,
    getNextItem,
    getPrevItem,
    isFirstItemVisible,
    isItemVisible,
    isLastItemVisible,
    lastVisibleItem,
    visibleItems,
    visibleItemsWithoutSeparators,
  }
  // console.log(result)
  return result
}

const ScrollMenu = ({
  children: menuItems,
  LeftArrow,
  onInit = () => false,
  onScroll = () => false,
  RightArrow,
}) => {
  const root = React.useRef()
  const [refs] = React.useState({})

  // useIsMounted()

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(menuItems, refs)

  const { allItems, init: observerInit } = useIntersectionObserver({
    refs,
    options: { ratio, root: root.current, rootMargin, threshold },
    itemsChanged,
  })

  // console.log(Object.values(allItems).length)

  const [initComplete, setInitComplete] = React.useState(false)

  const scrollContainer = root?.current
  const rendered = scrollContainer && observerInit
  const publicApi = {
    ...createApi(allItems),
    observerInit,
    initComplete,
    rendered,
    scrollContainer,
  }

  // TODO: hide scrollbar
  // https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

  // TODO: mouse wheel scroll
  // https://stackoverflow.com/questions/2346958/how-to-do-a-horizontal-scroll-on-mouse-wheel-scroll
  // https://codepen.io/tanin13/pen/JjoPdBy

  // console.log({ rendered, observerInit, initComplete, root })

  React.useEffect(() => {
    if (rendered && !initComplete) {
      console.log('onInit', publicApi)
      onInit(publicApi)
      setInitComplete(true)
    }
  }, [initComplete, onInit, publicApi, rendered])

  return (
    <div onScroll={scrollHandler} style={{ display: 'flex' }}>
      {LeftArrow && <LeftArrow {...publicApi} />}
      <ScrollContainer ref={root}>
        <MenuItems refs={refs} {...publicApi}>
          {menuItems}
        </MenuItems>
      </ScrollContainer>
      {RightArrow && <RightArrow {...publicApi} />}
    </div>
  )

  function scrollHandler() {
    onScroll(publicApi)
  }
}

export default ScrollMenu
