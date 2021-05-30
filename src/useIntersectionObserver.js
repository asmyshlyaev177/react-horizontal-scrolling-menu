import React from 'react'

import throttle from 'lodash/throttle'

import { getNodesFromRefs } from './helpers'

const useIntersection = ({ items, refs = {}, options = {} }) => {
  const elements = getNodesFromRefs(refs)
  const [init, setInit] = React.useState(false)
  const observer = React.useRef()

  // console.count('observer')

  const [visibleItems, setVisibleItems] = React.useState([])

  const ioCb = throttle(
    (entries) => {
      entries.forEach((entry) => {
        const key = entry.target?.dataset?.key

        items.set(key, {
          key,
          visible: entry.intersectionRatio >= options.ratio,
          entry,
        })
      })

      setVisibleItems((items) => {
        // console.count('observer cb')
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

  return { init, visibleItems }
}

export default useIntersection
