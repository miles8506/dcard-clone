import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import useAuth from './hooks/use-auth'
import RouterProvider from '@/context/router-info-context'
import useWindowRWD from '@/hooks/use-window-rwd'

import MobileNavigation from '@/components/mobile-navigation'
import MainContextProvider from '@/context/main-context'

function App() {
  useAuth()
  const { size } = useWindowRWD()

  const isHideNavigateRouter = () =>
    !(
      window.location.hash.split('/')[1] === 'login' ||
      window.location.hash.split('/')[1] === 'search' ||
      window.location.hash.split('/')[1] === 'post'
    )

  const [isShowNavigation, setIsShowNavigation] = useState(() =>
    isHideNavigateRouter()
  )

  useEffect(() => {
    setIsShowNavigation(isHideNavigateRouter())
  }, [window.location.hash])

  return (
    <div
      className="App"
      style={{
        background: 'rgb(0, 50, 78)',
        height: '100%'
      }}
    >
      {useRoutes(routes)}
      {size.width <= 992 && isShowNavigation && <MobileNavigation />}
    </div>
  )
}

export default RouterProvider(MainContextProvider(App))
