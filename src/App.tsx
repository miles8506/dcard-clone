import { useEffect } from 'react'

import { useRoutes } from 'react-router-dom'
import { useAuth } from './hooks/use-auth'
import { useDispatch } from 'react-redux'
import { changeLoginStatus } from './store/login'
import { useRouterInfo } from '@/context/router-info-context'

import RouterProvider from '@/context/router-info-context'

import routes from '@/router'

function App() {
  const dispatch = useDispatch()
  const { pathname } = useRouterInfo()
  const { isAuth } = useAuth()
  useEffect(() => {
    const _isAuth = isAuth()
    dispatch(changeLoginStatus(_isAuth))
  }, [pathname])

  return (
    <div
      className="App"
      style={{
        background: 'rgb(0, 50, 78)',
        height: '100vh'
      }}
    >
      {useRoutes(routes)}
    </div>
  )
}

export default RouterProvider(App)
