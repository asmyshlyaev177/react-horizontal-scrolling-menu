/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'

import ScrollContainer from './ScrollContainer'
import MenuItems from './MenuItems'
import useIntersectionObserver from './useIntersectionObserver'
import useItemsChanged from './useItemsChanged'
import useIsMounted from './useIsMounted'
import createApi from './createApi'
import CustomMap from './CustomMap'

import { VisibilityContext } from './context'

const rootMargin = '5px'
const threshold = [0, 1]
const ratio = 0.95

const ScrollMenu = ({
  children,
  LeftArrow,
  onInit = () => false,
  onScroll = () => false,
  RightArrow,
}) => {
  const scrollContainerRef = React.useRef()
  // TODO: use Map() ? rename to MenuItemsRefs ?
  const [refs] = React.useState({})

  const options = React.useMemo(
    () => ({
      ratio,
      root: scrollContainerRef.current,
      rootMargin,
      threshold,
    }),
    []
  )

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(children, refs)

  // console.count('main rerender')
  const items = React.useRef(new CustomMap())
  const { visibleItems } = useIntersectionObserver({
    items: items.current,
    refs,
    options,
    itemsChanged,
  })

  const initComplete = useIsMounted(() => onInit(publicApi))

  const api = React.useMemo(
    () => createApi(items.current, visibleItems),
    [visibleItems]
  )

  const publicApi = React.useMemo(
    () => ({
      ...api,
      initComplete,
      scrollContainer: scrollContainerRef,
      visibleItems,
    }),
    [api, initComplete, visibleItems]
  )

  // TODO: hide scrollbar
  // https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

  // TODO: mouse wheel scroll
  // https://stackoverflow.com/questions/2346958/how-to-do-a-horizontal-scroll-on-mouse-wheel-scroll
  // https://codepen.io/tanin13/pen/JjoPdBy

  return (
    <div onScroll={scrollHandler} style={{ display: 'flex' }}>
      <VisibilityContext.Provider value={publicApi}>
        {(LeftArrow && <LeftArrow />) || null}
        <ScrollContainer ref={scrollContainerRef}>
          <MenuItems refs={refs} isLastItem={publicApi.isLastItem}>
            {children}
          </MenuItems>
        </ScrollContainer>
        {(RightArrow && <RightArrow />) || null}
      </VisibilityContext.Provider>
    </div>
  )

  function scrollHandler() {
    onScroll(publicApi)
  }
}

// export default ScrollMenu

export { ScrollMenu, VisibilityContext }
