import React from 'react'

import { id as itemId } from '../constants'

// TODO: tests
function useItemsChanged(menuItems, refs) {
  const [hash, setHash] = React.useState('')

  React.useLayoutEffect(() => {
    const newHash = React.Children.toArray(menuItems)
      .map((c) => c?.props?.[itemId])
      .filter(Boolean)
      .join('')
    setHash(newHash)
  }, [menuItems, refs])

  return hash
}

export default useItemsChanged
