import { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import './assets/css/reset.css'
import 'antd/dist/antd.min.css'
import store from './store'
import theme from './assets/theme'
import '@/enum/main'

import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Suspense fallback={<div>loading</div>}>
          <App />
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
)
