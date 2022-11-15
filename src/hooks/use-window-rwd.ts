import { useEffect, useState } from 'react'

export default function useWindowRWD() {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  function resizeCallBackFn() {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight })

    window.addEventListener('resize', resizeCallBackFn)

    return () => {
      window.removeEventListener('resize', resizeCallBackFn)
    }
  }, [])

  return {
    size
  }
}
