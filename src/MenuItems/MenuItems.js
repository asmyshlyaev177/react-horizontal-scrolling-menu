import React from 'react'

import Separator from './Separator'
import Item from './Item'

function MenuItems({ children, refs = {} }) {
  const itemsCount = React.Children.count(children)

  return React.Children.map(children, (child, index) => {
    // TODO: rename to dataId ?
    const id = child?.props?.['data-id']
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

export default MenuItems
