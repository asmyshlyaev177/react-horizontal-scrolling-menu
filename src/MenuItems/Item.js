import React from 'react'
import PropTypes from 'prop-types'

function Item({ child, id, isVisible, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  return (
    <div className="react-horizontal-scroll-menu--item" data-key={id} ref={ref}>
      {React.cloneElement(
        child,
        {
          ...child.props,
          isVisible,
        },
        [child.children],
      )}
    </div>
  )
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  refs: PropTypes.object,
  child: PropTypes.any,
}

export default Item
