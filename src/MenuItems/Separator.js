import React from 'react'
import PropTypes from 'prop-types'

function Separator({ id, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  // TODO: check class names, maybe import from config
  return (
    <div
      className="react-horizontal-scroll-menu--separator"
      data-key={id}
      ref={ref}
    />
  )
}
Separator.propTypes = {
  id: PropTypes.string.isRequired,
  // TODO: proper types for refs
  refs: PropTypes.object,
}

export default Separator
