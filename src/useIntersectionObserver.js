import React from 'react'

const useIntersection = ({ elems = [], options = {} } = {}) => {
  const visibility = React.useRef({})
  const [visibleItems, setVisibleItems] = React.useState([])

  const cb = (entries) => {
    const updated = entries.reduce((acc, entry) => {
      const { intersectionRatio, target } = entry

      const key = target.getAttribute('data-key')
      acc[key] = intersectionRatio >= options.ratio
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

  React.useEffect(() => {
    if (elems.length && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(cb, options)
      elems.forEach((elem) => observer.observe(elem))

      return () => {
        observer.disconnect()
      }
    }
  }, [elems, options.threshold, options.root, options.rootMargin])

  // TODO: return object with some API
  // e.g. itemsObject(visibleItems)
  return visibleItems
}

export default useIntersection
