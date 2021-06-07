import React from 'react'
import PropTypes from 'prop-types'

import { scrollContainerClassName } from '../../constants'

// TODO: pass initialPosition ??
function ScrollContainer({ children, onScroll, scrollRef }) {
  return (
    <div
      className={scrollContainerClassName}
      onScroll={onScroll}
      ref={scrollRef}
    >
      {children}
    </div>
  )
}
ScrollContainer.propTypes = {
  children: PropTypes.any.isRequired,
  onScroll: PropTypes.func,
  scrollRef: PropTypes.object.isRequired,
}

export default ScrollContainer
