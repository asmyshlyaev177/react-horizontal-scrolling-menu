import React from 'react'

import { getNodesFromRefs } from './helpers'
import CustomMap from './CustomMap'

const useIntersection = ({ refs = {}, options = {} }) => {
  const elements = getNodesFromRefs(refs)
  const [allItems] = React.useState(new CustomMap())
  const [init, setInit] = React.useState(false)
  const observer = React.useRef()

  // console.count('observer')

  const [visibleItems, setVisibleItems] = React.useState([])

  const ioCb = React.useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const key = entry.target?.dataset?.key

        allItems.set(key, {
          key,
          visible: entry.intersectionRatio >= options.ratio,
          entry,
        })
      })

      setVisibleItems((items) => {
        const newVisibleItems = entries
          .filter((el) => el.intersectionRatio > options.ratio)
          .map((el) => el.target.dataset?.key)
          .filter(Boolean)
        if (JSON.stringify(items) !== JSON.stringify(newVisibleItems)) {
          return newVisibleItems
        }
        return items
      })

      setInit(true)
    },
    [allItems, options]
  )
  // console.log(allItems)

  React.useLayoutEffect(() => {
    observer.current = new IntersectionObserver(ioCb, options)
    elements.forEach((elem) => observer.current.observe(elem))

    return () => {
      observer.current.disconnect()
      observer.current = null
    }
  }, [ioCb, elements, options])

  return { allItems, init, visibleItems }
}

export default useIntersection
