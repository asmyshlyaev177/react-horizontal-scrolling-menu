import React from 'react'

import Separator from './Separator'
import Item from './Item'

const getChildId = (el) => el?.props?.id
const isMenuItem = (el) => !!getChildId(el)
const notLastItem = (itemIndex, totalItemsCount) =>
  itemIndex < totalItemsCount - 1

const MenuItems = ({ children, refs = {}, isItemVisible }) => {
  const childrenCount = React.Children.toArray(children).filter(isMenuItem)
    .length

  return React.Children.map(children, (child, childIndex) => {
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
        {notLastItem(childIndex, childrenCount) && (
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
