import React from 'react'

import { getNodesFromRefs, observerEntriesToItems } from '../helpers'

// TODO: tests
function useIntersection({ items, itemsChanged, refs = {}, options = {} }) {
  const observer = React.useRef()

  const [visibleItems, setVisibleItems] = React.useState([])

  const throttleTimer = React.useRef()

  const ioCb = React.useCallback(
    (entries) => {
      const newItems = observerEntriesToItems(entries, options)
      items.set(newItems)

      clearTimeout(throttleTimer.current)
      throttleTimer.current = setTimeout(
        () =>
          window &&
          window.requestAnimationFrame(() => {
            setVisibleItems((currentVisible) => {
              const newVisibleItems = items.getVisible().map((el) => el[1].key)
              if (
                JSON.stringify(currentVisible) !==
                JSON.stringify(newVisibleItems)
              ) {
                return newVisibleItems
              }
              return currentVisible
            })
          }),
        options.throttle
      )
    },
    [items, options]
  )

  React.useLayoutEffect(() => {
    const elements = getNodesFromRefs(refs)
    observer.current = new IntersectionObserver(ioCb, options)
    elements.forEach((elem) => observer.current.observe(elem))

    return () => {
      clearTimeout(throttleTimer.current)
      observer.current.disconnect()
      observer.current = null
    }
  }, [ioCb, itemsChanged, options, refs])

  return { visibleItems }
}

export default useIntersection
