/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'

import ScrollContainer from './components/ScrollContainer'
import MenuItems from './components/MenuItems'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import useItemsChanged from './hooks/useItemsChanged'
import useIsMounted from './hooks/useIsMounted'
import createApi from './createApi'
import ItemsMap from './ItemsMap'
import { observerOptions as defaultObserverOptions } from './settings'

import { VisibilityContext } from './context'

function ScrollMenu({
  LeftArrow,
  RightArrow,
  children,
  onInit = () => false,
  onScroll = () => false,
  onWheel = () => false,
  options = {},
}) {
  const scrollContainerRef = React.useRef()
  const [menuItemsRefs] = React.useState({})

  const observerOptions = React.useMemo(
    () => ({
      ...defaultObserverOptions,
      ...options,
      root: scrollContainerRef.current,
    }),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  )

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(children, menuItemsRefs)

  // console.count('main rerender')
  const items = React.useRef(new ItemsMap()).current
  const { visibleItems } = useIntersectionObserver({
    items,
    itemsChanged,
    options: observerOptions,
    refs: menuItemsRefs,
  })
  // console.log(items)
  // console.log(visibleItems)

  // TODO: it fires before have any visible items
  const initComplete = useIsMounted(() => onInit(publicApi))

  const api = React.useMemo(
    () => createApi(items, visibleItems),
    [items, visibleItems]
  )

  const publicApi = React.useMemo(
    () => ({
      ...api,
      initComplete,
      items,
      scrollContainer: scrollContainerRef,
      visibleItems,
    }),
    [api, initComplete, items, visibleItems]
  )

  const scrollHandler = React.useCallback(
    () => onScroll(publicApi),
    [onScroll, publicApi]
  )

  // console.log(publicApi)
  // console.log(items)

  // TODO: hide scrollbar
  // https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

  const onWheelHandler = React.useCallback(
    (ev) => onWheel(publicApi, ev),
    [onWheel, publicApi]
  )

  // TODO: className for outerWrapper
  return (
    <div style={{ display: 'flex' }} onWheel={onWheelHandler}>
      <VisibilityContext.Provider value={publicApi}>
        {(LeftArrow && <LeftArrow />) || null}
        <ScrollContainer
          onScroll={scrollHandler}
          scrollRef={scrollContainerRef}
        >
          <MenuItems refs={menuItemsRefs}>{children}</MenuItems>
        </ScrollContainer>
        {(RightArrow && <RightArrow />) || null}
      </VisibilityContext.Provider>
    </div>
  )
}

export { ScrollMenu, VisibilityContext }
