/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useEffect, useRef, useState } from 'react'
// import PropTypes from 'prop-types'

import { children } from './propTypes'
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
  const root = useRef()
  const [refs] = useState({})
  const visibility = useRef({})
  const [visibleItems, setVisibleItems] = useState([])

  useIsMounted()
  const [loadComplete, setLoadComplete] = React.useState(false)

  useEffect(() => {
    if (visibleItems.length && !loadComplete) {
      onInit({ refs, visibleItems, scrollContainer: root.current })
      setLoadComplete(true)
    }
  }, [visibleItems, onInit, loadComplete, refs])

  const cb = (entries) => {
    const updated = entries.reduce((acc, entry) => {
      const { intersectionRatio, target } = entry

      const key = target.getAttribute('data-key')
      acc[key] = intersectionRatio >= ratio
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

  return (
    <div onScroll={scrollHandler} style={{ display: 'flex', opacity: 1 }}>
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

const ScrollContainer = forwardRef(({ children }, ref) => (
  <div
    className="scroll-container"
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
    className="container"
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
  const ref = useRef(null)
  refs[id] = ref

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

export default ScrollMenu
