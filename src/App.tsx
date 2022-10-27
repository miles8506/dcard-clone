import { useRoutes } from 'react-router-dom'

import routes from '@/router'

function App() {
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
