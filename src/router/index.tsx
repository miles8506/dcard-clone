import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Main = lazy(() => import('@/pages/main'))
const All = lazy(() => import('@/pages/main/c-cpns/all'))
const Track = lazy(() => import('@/pages/main/c-cpns/track'))
const Login = lazy(() => import('@/pages/login'))
const Post = lazy(() => import('@/pages/post'))
const Search = lazy(() => import('@/pages/search'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main',
        element: <Navigate to="/main/any/all" />
      },
      {
        path: '/main/:sort/all',
        element: <All />
      },
      {
        path: '/main/:sort/track',
        element: <Track />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/post',
    element: <Post />
  },
  {
    path: '/search',
    element: <Search />
  }
]

export default routes
