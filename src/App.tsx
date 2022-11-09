import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import useAuth from './hooks/use-auth'

function App() {
  useAuth()

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

export default App
