import React from 'react'
import PropTypes from 'prop-types'

import { rootClassName, itemClassName } from '../constants'

function Item({ children, id, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  return (
    <div
      className={`${rootClassName}--${itemClassName}`}
      data-key={id}
      ref={ref}
    >
      {children}
    </div>
  )
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  refs: PropTypes.object,
  children: PropTypes.any,
}

export default React.memo(Item)
