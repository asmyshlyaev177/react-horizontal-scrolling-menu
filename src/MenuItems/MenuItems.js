import React from 'react'
import PropTypes from 'prop-types'

import Separator from './Separator'
import Item from './Item'
import { id as itemId } from '../constants'

function MenuItems({ children, refs = {} }) {
  const itemsCount = React.Children.count(children)

  return React.Children.map(children, (child, index) => {
    const id = child?.props?.[itemId]
    const separatorId = id + '-separator'
    const isLastItem = index + 1 === itemsCount

    return (
      <>
        <Item id={id} key={'menuItem__' + id} refs={refs} index={String(index)}>
          {child}
        </Item>
        {!isLastItem && (
          <Separator
            id={separatorId}
            refs={refs}
            index={String(index) + '.1'}
          />
        )}
      </>
    )
  })
}
MenuItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.node])),
    PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  ]).isRequired,
  refs: PropTypes.object.isRequired,
}

export default MenuItems
