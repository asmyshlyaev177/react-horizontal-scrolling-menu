import React from 'react'

function useItemsChanged(menuItems, refs) {
  const [hash, setHash] = React.useState('')

  React.useLayoutEffect(() => {
    const newHash = React.Children.toArray(menuItems)
      .map((c) => c?.props?.id)
      .filter(Boolean)
      .join('')
    setHash(newHash)
  }, [menuItems, refs])

  return hash
}

export default useItemsChanged
