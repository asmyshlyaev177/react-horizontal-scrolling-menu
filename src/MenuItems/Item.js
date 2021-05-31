import React from 'react'
import PropTypes from 'prop-types'

import { rootClassName, itemClassName } from '../constants'
const className = `${rootClassName}--${itemClassName}`

function Item({ children, id, index, refs = {} }) {
  const ref = React.useRef(null)
  refs[+index] = ref

  return (
    <div className={className} data-key={id} data-index={index} ref={ref}>
      {children}
    </div>
  )
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  refs: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.node])),
    PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  ]),
}

export default React.memo(Item)
