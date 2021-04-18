import React from 'react'

const useIsMounted = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export default useIsMounted
