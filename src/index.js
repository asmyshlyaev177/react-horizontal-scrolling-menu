/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { child, children } from './propTypes'
import useIntersectionObserver from './useIntersectionObserver'
import useIsMounted from './useIsMounted'

const rootMargin = '1px'
const threshold = [0, 0.95]

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

const MenuItems = ({ children, refs = {}, visibleItems = [] }) => {
  console.log(visibleItems)
  return React.Children.map(children, (child) => (
    <>
      <Item
        child={child}
        id={child?.props?.id}
        isVisible={visibleItems.includes(child?.props?.id)}
        refs={refs}
      />
      <Separator id={child?.props?.id + '-separator'} refs={refs} />
    </>
  ))
}
MenuItems.displayName = 'MenuItems'

function Item({ child, id, isVisible, refs = {} }) {
  const ref = useRef(null)
  refs[id] = ref

  return (
    <div data-key={id} key={id} ref={ref}>
      {React.cloneElement(
        child,
        {
          ...child.props,
          refs,
          visible: isVisible,
        },
        [child.children],
      )}
    </div>
  )
}

function Separator({ id, refs = {} }) {
  const ref = useRef(null)
  refs[id] = ref

  return <div data-separator={id} key={id} ref={ref} />
}

const ScrollMenu = ({
  items: menuItems = [],
  LeftArrow,
  onScroll = () => false,
  RightArrow,
}) => {
  const root = useRef(null)
  const [refs] = useState({})
  const visibility = useRef({})
  const [visibleItems, setVisibleItems] = useState([])

  const cb = (entries) => {
    const updated = entries.reduce((acc, entry) => {
      const { intersectionRatio, target } = entry

      const key = target.getAttribute('data-key')
      acc[key] = intersectionRatio === 1
      return acc
    }, {})

    visibility.current = { ...visibility.current, ...updated }

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
    // TODO: use debounce
    // create invisible vertical container with scroll
    // https://codesandbox.io/s/horizontal-scroll-usestate-nlkyt?from-embed=&file=/src/horizontal-scroll.js
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
    // if (nextSelector && !scrollQueue.find((el) => el.id === nextItemId)) {
    //   // TODO: if queue not empty increase step in existing entry
    //   // don't create a new one
    //   setScrollQueue((q) =>
    //     q.concat({
    //       id: nextItemId,
    //       index: nextItemIndex,
    //       direction: 'right',
    //       selector: nextSelector,
    //     }),
    //   )
    // }
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
