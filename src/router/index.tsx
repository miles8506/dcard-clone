import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Main = lazy(() => import('@/pages/main'))
const All = lazy(() => import('@/pages/main/c-cpns/all'))
const Track = lazy(() => import('@/pages/main/c-cpns/track'))
const Article = lazy(() => import('@/components/main/article'))
const Login = lazy(() => import('@/pages/login'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/main'/>,
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main',
        element: <Navigate to='/main/any/all/hot'/>
      },
      {
        path: '/main/:sort/all/:status',
        element: <All />
      },
      {
        path: '/main/:sort/track/:status',
        element: <Track />,
        children: [
          {
            path: '/main/:sort/track/:status/:iid',
            element: <Article />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes
