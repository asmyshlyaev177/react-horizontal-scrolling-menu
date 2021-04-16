import React from 'react'

const useIntersection = ({ elems = [], options = {} } = {}) => {
  const visibility = React.useRef({})
  const [visibleItems, setVisibleItems] = React.useState([])
  const observer = React.useRef()

  React.useEffect(() => {
    const cb = (entries) => {
      const updated = entries.reduce((acc, entry) => {
        const { intersectionRatio, target } = entry

        const key = target.getAttribute('data-key')
        // TODO: return intersectionRatio too ???
        acc[key] = intersectionRatio >= options.ratio
        return acc
      }, {})

      visibility.current = { ...visibility.current, ...updated }

      setVisibleItems((visible) =>
        JSON.stringify(visibility.current) !== JSON.stringify(visible)
          ? visibility.current
          : visible,
      )
    }
    observer.current = observer.current || new IntersectionObserver(cb, options)
    elems.forEach((elem) => observer.current.observe(elem))

    return () => {
      observer.current.disconnect()
      observer.current = null
    }
  }, [elems, options])

  return visibleItems
}

export default useIntersection
