import React from 'react'

import { children } from './propTypes'

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
ScrollContainer.propTypes = {
  children,
}

const Container = ({ children }) => (
  <div
    className="react-horizontal-scroll-menu--container"
    style={{
      display: 'flex',
      height: 'auto',
      position: 'relative',
      width: 'max-content',
    }}
  >
    {children}
  </div>
)
Container.displayName = 'Container'
Container.propTypes = { children }

export { Container, ScrollContainer }
