import React from 'react'

const useIsMounted = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useLayoutEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export default useIsMounted
