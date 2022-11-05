import { memo } from 'react'

import { LoginWrapper } from './style'
import Info from '@/components/login/info'
import Form from '@/components/login/form'
import Header from '@/components/login/header'

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
