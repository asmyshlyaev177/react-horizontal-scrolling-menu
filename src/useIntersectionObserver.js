import { useEffect } from 'react'

const useIntersection = ({
  elems = [],
  options = {},
  cb = (...props) => props,
} = {}) => {
  useEffect(() => {
    if (elems.length && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(cb, options)
      elems.forEach((elem) => observer.observe(elem))

      return () => {
        observer.disconnect()
      }
    }
  }, [elems, options.threshold, options.root, options.rootMargin])
}

export default useIntersection
