import React from 'react'

import { getNodesFromRefs } from './helpers'

const useIntersection = ({ refs = {}, options = {} }) => {
  const elements = getNodesFromRefs(refs)
  const [allItems, setAllItems] = React.useState([])
  const [init, setInit] = React.useState(false)
  const observer = React.useRef()

  // console.count('observer')

  const cb = (entries) => {
    // console.count('observer CB')
    const newVisible = entries.reduce((acc, entry) => {
      // TODO: move data-key to config
      const key = entry.target.getAttribute('data-key')
      acc[key] = {
        key,
        visible: entry.intersectionRatio >= options.ratio,
        entry,
      }
      return acc
    }, {})

    setAllItems((visible) =>
      JSON.stringify(newVisible) !== JSON.stringify(visible)
        ? newVisible
        : visible,
    )
    setInit(true)
  }

  React.useLayoutEffect(() => {
    // console.log('observer useEffect')
    observer.current = observer.current || new IntersectionObserver(cb, options)
    elements.forEach((elem) => observer.current.observe(elem))

    return () => {
      observer.current.disconnect()
      observer.current = null
    }
  }, [elements, options])

  return { allItems, init }
}

export default useIntersection
