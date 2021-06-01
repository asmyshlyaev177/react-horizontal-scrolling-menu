import React from 'react'
import PropTypes from 'prop-types'

import { rootClassName, separatorClassName } from '../constants'
export const className = `${rootClassName}--${separatorClassName}`

function Separator({ id, index, refs = {} }) {
  const ref = React.useRef(null)
  refs[+index] = ref

  return (
    <div className={className} data-key={id} data-index={index} ref={ref} />
  )
}

Separator.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  refs: PropTypes.object.isRequired,
}

export default React.memo(Separator)
