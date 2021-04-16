/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from 'prop-types'

import ScrollContainer from './ScrollContainer'
import MenuItems from './MenuItems'
import useIntersectionObserver from './useIntersectionObserver'
import useIsMounted from './useIsMounted'

const rootMargin = '5px'
const threshold = [0, 1]
const ratio = 0.95

const ScrollMenu = ({
  children: menuItems,
  LeftArrow,
  onInit = () => false,
  onScroll = () => false,
  RightArrow,
}) => {
  const root = React.useRef()
  const [refs] = React.useState({})

  useIsMounted()
  const [loadComplete, setLoadComplete] = React.useState(false)

  const allItems = useIntersectionObserver({
    elems: Object.values(refs)
      .map((el) => el.current)
      .filter(Boolean),
    options: { ratio, root: root.current, rootMargin, threshold },
  })

  const visibleItems = Object.entries(allItems)
    .filter((el) => el?.[0] && el?.[1])
    .map((el) => el?.[0])

  // TODO: pass object with some API instean of visibleItems
  // e.g. itemsObject(visibleItems, allItems)
  // getVisibleItems(), isFirstVisible, isLastVisible,
  // nextScreen(), prevScreen(),
  // nextItem(1, repeatFromStart), prevItem(1),
  // getFirstVisible, getCenterVisible, getLastVisible

  // TODO: hide scrollbar
  // https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

  // TODO: mouse wheel scroll
  // https://stackoverflow.com/questions/2346958/how-to-do-a-horizontal-scroll-on-mouse-wheel-scroll
  // https://codepen.io/tanin13/pen/JjoPdBy
  React.useEffect(() => {
    if (visibleItems.length && !loadComplete) {
      onInit({ refs, visibleItems, scrollContainer: root.current || {} })
      setLoadComplete(true)
    }
  }, [visibleItems, onInit, loadComplete, refs])

  return (
    <div onScroll={scrollHandler} style={{ display: 'flex' }}>
      {LeftArrow && <LeftArrow refs={refs} visibleItems={visibleItems} />}
      <ScrollContainer ref={root}>
        <MenuItems refs={refs} visibleItems={visibleItems}>
          {menuItems}
        </MenuItems>
      </ScrollContainer>
      {RightArrow && <RightArrow refs={refs} visibleItems={visibleItems} />}
    </div>
  )

  function scrollHandler() {
    onScroll({
      visibleItems,
      position: root.current?.scrollLeft,
    })
  }
}

export default ScrollMenu
