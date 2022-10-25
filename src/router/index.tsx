import { RouteObject, Navigate } from 'react-router-dom'
import Main from '../pages/main'
import All from '@/pages/main/c-cpns/all'
import Curation from '@/pages/main/c-cpns/curation'
import Article from '@/components/main/article'

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
  }
]

export default routes
