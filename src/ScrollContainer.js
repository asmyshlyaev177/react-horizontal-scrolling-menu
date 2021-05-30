import React from 'react'

import { rootClassName, scrollContainerClassName } from './constants'

const className = `${rootClassName}--${scrollContainerClassName}`

// TODO: use css ???
/* eslint-disable-next-line react/display-name */
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
// ScrollContainer.propTypes = {
//   children,
// }

export default ScrollContainer
