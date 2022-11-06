import { memo, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

import { LoginWrapper } from './style'
import Info from '@/components/login/info'
import Form from '@/components/login/form'
import Header from '@/components/login/header'

const Login = memo(() => {
  const navigate = useNavigate()
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }), shallowEqual)

  useEffect(() => {
    if (isLogin) return navigate('/main')
  }, [])

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
