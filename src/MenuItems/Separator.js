import React from 'react'
import PropTypes from 'prop-types'

import { rootClassName, separatorClassName } from '../constants'

export const className = `${rootClassName}--${separatorClassName}`

function Separator({ id, refs = {} }) {
  const ref = React.useRef(null)
  refs[id] = ref

  return <div className={className} data-key={id} ref={ref} />
}

Separator.propTypes = {
  id: PropTypes.string.isRequired,
  refs: PropTypes.object,
}

export default React.memo(Separator)
