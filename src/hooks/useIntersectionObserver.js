import React from 'react'

import { getNodesFromRefs, observerEntriesToItems } from '../helpers'

// import usePrevious from './usePrevious'

function useIntersection({ items, itemsChanged, refs = {}, options = {} }) {
  const observer = React.useRef()

  // console.count('observer')

  // console.log(refs, elements)
  const [visibleItems, setVisibleItems] = React.useState([])

  const throttleTimer = React.useRef()

  const ioCb = React.useCallback(
    (entries) => {
      const newItems = observerEntriesToItems(entries, options)
      // console.count('CB')
      // console.log(items)
      items.set(newItems)
      // console.log(
      //   items
      //     .toArr()
      //     .filter((el) => el[1].visible)
      //     .map((el) => el[0])
      // )

      clearTimeout(throttleTimer.current)
      throttleTimer.current = setTimeout(
        () =>
          window &&
          window.requestAnimationFrame(() => {
            // console.count('setVisible')
            setVisibleItems((currentVisible) => {
              // console.count('observer cb')
              const newVisibleItems = items.getVisible().map((el) => el[1].key)
              // console.log({ currentVisible, newVisibleItems })
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

  // const prev = usePrevious(itemsChanged)
  // console.log(itemsChanged === prev, itemsChanged)

  React.useLayoutEffect(() => {
    // console.count('effect')
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
