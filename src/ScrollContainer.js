import React from 'react'

// import { children } from './propTypes'

// TODO: use css ???
const ScrollContainer = React.forwardRef(({ children }, ref) => (
  <div
    className="react-horizontal-scroll-menu--scroll-container"
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
