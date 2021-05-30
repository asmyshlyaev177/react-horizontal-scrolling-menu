/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'

import ScrollContainer from './ScrollContainer'
import MenuItems from './MenuItems'
import useIntersectionObserver from './useIntersectionObserver'
import useItemsChanged from './useItemsChanged'
import useApi from './useApi'

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
  const root = React.useRef()
  // TODO: use Map() ?
  const [refs] = React.useState({})

  // NOTE: hack for detect when items added/removed dynamicaly
  const itemsChanged = useItemsChanged(children, refs)

  const options = React.useMemo(
    () => ({
      ratio,
      root: root.current,
      rootMargin,
      threshold,
    }),
    []
  )

  // console.count('main rerender')
  const {
    allItems,
    init: observerInit,
    visibleItems,
  } = useIntersectionObserver({
    refs,
    options,
    itemsChanged,
  })

  const [initComplete, setInitComplete] = React.useState(false)

  const scrollContainer = root?.current
  const rendered = scrollContainer && observerInit

  const api = useApi(allItems, visibleItems)

  const publicApi = React.useMemo(
    () => ({
      ...api,
      observerInit,
      initComplete,
      rendered,
      scrollContainer,
      visibleItems,
    }),
    [api, observerInit, initComplete, rendered, scrollContainer, visibleItems]
  )

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
      <VisibilityContext.Provider value={publicApi}>
        {(LeftArrow && <LeftArrow />) || null}
        <ScrollContainer ref={root}>
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
