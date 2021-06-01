import React from 'react'
import PropTypes from 'prop-types'

import { rootClassName, scrollContainerClassName } from './constants'

const className = `${rootClassName}--${scrollContainerClassName}`

function ScrollContainer({ children, scrollRef }) {
  return (
    <div
      className={className}
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
  scrollRef: PropTypes.object.isRequired,
}

export default ScrollContainer
