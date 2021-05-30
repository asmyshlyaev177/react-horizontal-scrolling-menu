import React from 'react'

import Separator from './Separator'
import Item from './Item'

import { rootClassName, menuItemsClassName } from '../constants'

const className = `${rootClassName}--${menuItemsClassName}`

// TODO: to helpers
const getChildId = (el) => el?.props?.id

const MenuItems = ({ children, refs = {}, isLastItem }) => {
  return React.Children.map(children, (child) => {
    const id = getChildId(child)
    const separatorId = id + '-separator'

    return id ? (
      <>
        <Item className={className} id={id} key={'menuItem__' + id} refs={refs}>
          {child}
        </Item>
        {!isLastItem(id) && (
          <Separator id={separatorId} refs={refs} key={separatorId} />
        )}
      </>
    ) : (
      child
    )
  })
}

export default MenuItems
