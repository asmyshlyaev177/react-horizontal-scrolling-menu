import PropTypes from 'prop-types'

export const child = PropTypes.oneOfType([PropTypes.element, PropTypes.node])

export const children = PropTypes.oneOfType([PropTypes.arrayOf(child), child])
