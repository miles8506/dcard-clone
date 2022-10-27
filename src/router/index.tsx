import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Main = lazy(() => import('@/pages/main'))
const All = lazy(() => import('@/pages/main/c-cpns/all'))
const Curation = lazy(() => import('@/pages/main/c-cpns/curation'))
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
        element: <Navigate to='/main/any/all'/>
      },
      {
        path: '/main/:sort/all',
        element: <All />
      },
      {
        path: '/main/:sort/curation',
        element: <Curation />,
        children: [
          {
            path: '/main/:sort/curation/:iid',
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
