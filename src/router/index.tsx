import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

// const Main = lazy(() => import('@/pages/main'))
// const All = lazy(() => import('@/pages/main/c-cpns/all'))
// const Track = lazy(() => import('@/pages/main/c-cpns/track'))
// const Login = lazy(() => import('@/pages/login'))
// const Post = lazy(() => import('@/pages/post'))
// const Search = lazy(() => import('@/pages/search'))
// const Synthesize = lazy(() => import('@/pages/search/c-cpns/synthesize'))
// const Article = lazy(() => import('@/pages/search/c-cpns/article'))
// const Board = lazy(() => import('@/pages/search/c-cpns/board'))

import Main from '@/pages/main'
 import All from '@/pages/main/c-cpns/all'
import Track from '@/pages/main/c-cpns/track'
import Login from  '@/pages/login'
import Post from  '@/pages/post'
import Search from'@/pages/search'
import Synthesize from '@/pages/search/c-cpns/synthesize'
import Article from'@/pages/search/c-cpns/article'
import Board from '@/pages/search/c-cpns/board'

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
    element: <Search />,
    children: [
      {
        path: '/search',
        element: <Navigate to='/search/synthesize' />
      },
      {
        path: '/search/synthesize',
        element: <Synthesize />
      },
      {
        path: '/search/article',
        element: <Article />
      },
      {
        path: '/search/board',
        element: <Board />
      }
    ]
  }
]

export default routes
