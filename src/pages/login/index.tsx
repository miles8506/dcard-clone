import { memo } from 'react'

import { LoginWrapper } from './style'
import Info from './info'
import Form from './form'
import Header from './header'

const Login = memo(() => {
  return (
    <LoginWrapper>
      <Header />
        <div className="login">
          <Info />
          <Form />
        </div>
    </LoginWrapper>
  )
})

export default Login
