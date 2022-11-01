import { memo } from 'react'

import { LoginWrapper } from './style'
import Info from './info'
import Form from './form'

const Login = memo(() => {
  return (
    <LoginWrapper>
      <div className="login">
        <Info />
        <Form />
      </div>
    </LoginWrapper>
  )
})

export default Login
