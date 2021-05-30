import React from 'react'
import PropTypes from 'prop-types'

import { rootClassName, itemClassName } from '../constants'
const className = `${rootClassName}--${itemClassName}`

function Item({ children, id, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  return (
    <div className={className} data-key={id} ref={ref}>
      {children}
    </div>
  )
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  refs: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.node])),
    PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  ]),
}

export default React.memo(Item)
