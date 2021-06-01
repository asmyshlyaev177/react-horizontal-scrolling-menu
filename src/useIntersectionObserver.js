import React from 'react'

import throttle from 'lodash/throttle'

import { getNodesFromRefs } from './helpers'

const useIntersection = ({ items, refs = {}, options = {} }) => {
  const elements = getNodesFromRefs(refs)
  const observer = React.useRef()

  // console.count('observer')

  // console.log(refs, elements)
  const [visibleItems, setVisibleItems] = React.useState([])

  const ioCb = throttle(
    (entries) => {
      const newItems = [...entries].map((entry) => {
        const key = entry.target?.dataset?.key
        const index = String(entry.target?.dataset?.index)

        // TODO: some class/helper for parse entries to items
        return [
          key,
          {
            index,
            key,
            entry,
            visible: entry.intersectionRatio >= options.ratio,
          },
        ]
      })
      // console.log(newItems)
      items.set(newItems)

      setVisibleItems((currentVisible) => {
        // console.count('observer cb')
        const newVisibleItems = items
          .filter((el) => el[1].visible)
          .map((el) => el[1].key)
        if (
          JSON.stringify(currentVisible) !== JSON.stringify(newVisibleItems)
        ) {
          return newVisibleItems
        }
        return currentVisible
      })
    },
    250,
    { trailing: true }
  )

  React.useLayoutEffect(() => {
    observer.current = new IntersectionObserver(ioCb, options)
    elements.forEach((elem) => observer.current.observe(elem))

    return () => {
      observer.current.disconnect()
      observer.current = null
    }
  }, [ioCb, elements, options])

  return { visibleItems }
}

export default useIntersection
