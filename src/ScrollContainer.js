import React from 'react'

import { rootClassName, scrollContainerClassName } from './constants'

const className = `${rootClassName}--${scrollContainerClassName}`
// import { children } from './propTypes'

// TODO: use css ???
const ScrollContainer = React.forwardRef(({ children }, ref) => (
  <div
    className={className}
    ref={ref}
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
))
ScrollContainer.displayName = 'ScrollContainer'
// ScrollContainer.propTypes = {
//   children,
// }

export default ScrollContainer
