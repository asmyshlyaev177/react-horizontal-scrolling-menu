import React from 'react'
import PropTypes from 'prop-types'

import { scrollContainerClassName } from './constants'

function ScrollContainer({ children, onScroll, scrollRef }) {
  return (
    <div
      className={scrollContainerClassName}
      onScroll={onScroll}
      ref={scrollRef}
      style={{
        display: 'flex',
        height: 'max-content',
        overflowY: 'hidden',
        position: 'relative',
        width: '100%',
      }}
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
