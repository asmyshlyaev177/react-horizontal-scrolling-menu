/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { child, children } from './propTypes'
import useIntersectionObserver from './useIntersectionObserver'
import useIsMounted from './useIsMounted'

const rootMargin = '5px'
const threshold = [0, 1]
const ratio = 0.95

const ScrollContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    style={{
      display: 'flex',
      height: 'max-content',
      overflowY: 'hidden',
      position: 'relative',
      width: '100%',
    }}
  >
    {children}
  </div>
))
ScrollContainer.displayName = 'ScrollContainer'
ScrollContainer.propTypes = {
  children,
}

const Container = ({ children }) => (
  <div
    style={{
      display: 'flex',
      height: 'auto',
      position: 'relative',
      width: 'max-content',
    }}
  >
    {children}
  </div>
)
Container.displayName = 'Container'
Container.propTypes = { children }

const getChildId = (el) => el?.props?.id
const isMenuItem = (el) => !!getChildId(el)
const notLastItem = (itemIndex, totalItemsCount) =>
  itemIndex < totalItemsCount - 1

const MenuItems = ({ children, refs = {}, visibleItems = [] }) => {
  const childrenCount = React.Children.toArray(children).filter(isMenuItem)
    .length

  return React.Children.map(children, (child, childIndex) => {
    const id = getChildId(child)
    const separatorId = id + '-separator'

    return id ? (
      <>
        <Item
          child={child}
          id={id}
          key={'menuItem__' + id}
          isVisible={visibleItems.includes(id)}
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
  const ref = useRef(null)
  refs[id] = ref

  // TODO: try renderProps instead of clone ???
  return (
    <div data-key={id} ref={ref}>
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
  const ref = useRef(null)
  refs[id] = ref

  return <div data-key={id} ref={ref} />
}

const ScrollMenu = ({
  items: menuItems = [], // TODO: change to children ???
  LeftArrow, // TODO: try renderProps ???
  onScroll = () => false,
  RightArrow,
}) => {
  const root = useRef(null)
  const [refs] = useState({})
  const visibility = useRef({})
  const [visibleItems, setVisibleItems] = useState([])

  const items = Object.entries(refs)
  const firstVisibleItem = visibleItems[0] || ''
  const lastVisibleItem = visibleItems.slice(-1)[0] || ''
  const visibleItemsPrev =
    (firstVisibleItem &&
      items
        .slice(
          0,
          items.findIndex((i) => i[0] === firstVisibleItem),
        )
        .map((el) => el[0])) ||
    []
  const visibleItemsNext =
    (lastVisibleItem &&
      items
        .slice(items.findIndex((i) => i[0] === lastVisibleItem) + 1)
        .map((el) => el[0])) ||
    []
  console.log({
    visibleItemsPrev,
    visibleItemsNext,
  })

  const cb = (entries) => {
    const updated = entries.reduce((acc, entry) => {
      const { intersectionRatio, target } = entry

      const key = target.getAttribute('data-key')
      acc[key] = intersectionRatio >= ratio
      return acc
    }, {})

    visibility.current = { ...visibility.current, ...updated }

    //console.log(entries)

    setVisibleItems((visible) => {
      const newVisible = Object.entries(visibility.current)
        .filter((el) => el[0] !== 'null' && el[1])
        .map((el) => el[0])

      return JSON.stringify(newVisible) !== JSON.stringify(visible)
        ? newVisible
        : visible
    })
  }

  useIntersectionObserver({
    cb,
    elems: Object.values(refs)
      .map((el) => el.current)
      .filter(Boolean),
    options: { root: root.current, rootMargin, threshold },
  })

  // TODO: recheck
  // use onMounted cb for align center or set position
  useIsMounted()

  return (
    <div
      onScroll={scrollHandler}
      onWheel={wheelHandler}
      style={{ display: 'flex', opacity: 1 }}
    >
      {LeftArrow && (
        <LeftArrow
          refs={refs}
          scrollLeft={scrollLeft}
          visibleItems={visibleItems}
        />
      )}
      <ScrollContainer ref={root}>
        <Container>
          <MenuItems refs={refs} visibleItems={visibleItems}>
            {menuItems}
          </MenuItems>
        </Container>
      </ScrollContainer>
      {RightArrow && (
        <RightArrow
          refs={refs}
          scrollRight={scrollRight}
          visibleItems={visibleItems}
        />
      )}
    </div>
  )

  function wheelHandler() {
    //const { deltaY } = event;
    //deltaY > 0 ? scrollRight() : scrollLeft();
  }

  function scrollRight() {
    // const itemsVisibility = Object.entries(observed)
    // const lastVisible = visibleItems.slice(-1)[0]
    // const lastVisibleIndex = itemsVisibility.findIndex(
    //   (el) => el[0] === lastVisible,
    // )
    // // TODO: hook for handle prev/next index
    // const isOdd = visibleItems.length % 2
    // const nextItemIndex = lastVisibleIndex + Math.ceil(visibleItems.length / 2)
    // const nextItem = itemsVisibility[nextItemIndex]
    // const nextItemId = nextItem && nextItem[0]
    // const nextSelector =
    //   nextItemId && isOdd
    //     ? `[data-key="${nextItemId}"`
    //     : `[data-separator="${nextItemId}"`
  }

  function scrollLeft() {}

  function scrollHandler() {
    onScroll({
      visibleItems,
      position: root.current?.scrollLeft,
    })
  }
}

export default ScrollMenu
