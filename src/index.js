/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from 'prop-types'

import { Container, ScrollContainer } from './container'
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
  // nextItem(1, repeatFromStart), prevItem(1),
  // nextScreen(), prevScreen(),
  // getFirstVisible, getCenterVisible, getLastVisible

  // TODO: hide scrollbar
  // https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

  // TODO: mouse wheel scroll
  // https://stackoverflow.com/questions/2346958/how-to-do-a-horizontal-scroll-on-mouse-wheel-scroll
  React.useEffect(() => {
    if (visibleItems.length && !loadComplete) {
      onInit({ refs, visibleItems, scrollContainer: root.current })
      setLoadComplete(true)
    }
  }, [visibleItems, onInit, loadComplete, refs])

  return (
    <div onScroll={scrollHandler} style={{ display: 'flex' }}>
      {LeftArrow && <LeftArrow refs={refs} visibleItems={visibleItems} />}
      <ScrollContainer ref={root}>
        <Container>
          <MenuItems refs={refs} visibleItems={visibleItems}>
            {menuItems}
          </MenuItems>
        </Container>
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

const getChildId = (el) => el?.props?.id
const isMenuItem = (el) => !!getChildId(el)
const notLastItem = (itemIndex, totalItemsCount) =>
  itemIndex < totalItemsCount - 1

const MenuItems = ({ children, refs = {}, visibleItems }) => {
  const childrenCount = React.Children.toArray(children).filter(isMenuItem)
    .length

  return React.Children.map(children, (child, childIndex) => {
    const id = getChildId(child)
    const separatorId = id + '-separator'

    return id ? (
      <>
        <Item
          className="react-horizontal-scroll-menu--menu-items"
          child={child}
          id={id}
          key={'menuItem__' + id}
          isVisible={!visibleItems.length || visibleItems.includes(id)}
          refs={refs}
        />
        {notLastItem(childIndex, childrenCount) && (
          <Separator id={separatorId} refs={refs} key={separatorId} />
        )}
      </>
    ) : (
      child
    )
  })
}
MenuItems.displayName = 'MenuItems'

function Item({ child, id, isVisible, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  return (
    <div className="react-horizontal-scroll-menu--item" data-key={id} ref={ref}>
      {React.cloneElement(
        child,
        {
          ...child.props,
          refs,
          isVisible,
        },
        [child.children],
      )}
    </div>
  )
}

function Separator({ id, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  return (
    <div
      className="react-horizontal-scroll-menu--separator"
      data-key={id}
      ref={ref}
    />
  )
}

export default ScrollMenu
