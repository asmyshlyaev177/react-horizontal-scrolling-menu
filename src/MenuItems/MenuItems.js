import React from 'react'

import Separator from './Separator'
import Item from './Item'

// TODO: to helpers
const getChildId = (el) => el?.props?.id

const MenuItems = ({ children, refs = {}, isItemVisible, isLastItem }) => {
  return React.Children.map(children, (child) => {
    const id = getChildId(child)
    const separatorId = id + '-separator'

    return id ? (
      <>
        <Item
          className="react-horizontal-scroll-menu--menu-items"
          child={child}
          id={id}
          key={'menuItem__' + id}
          isVisible={isItemVisible(id)}
          refs={refs}
        />
        {!isLastItem(id) && (
          <Separator id={separatorId} refs={refs} key={separatorId} />
        )}
      </>
    ) : (
      child
    )
  })
}
MenuItems.displayName = 'MenuItems'

export default MenuItems
