import { memo, useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import { useDispatch } from 'react-redux'
import RouterProvider from '@/context/router-info-context'
import { MSSessionStore } from '@/utils'
import { LOGIN_INFO } from '@/constants'
import { useNavigate } from 'react-router-dom'
import { requestUserInfo } from '@/store/login/async-thunk'
import { requestHotBoard } from '@/store/main/async-thunk'
import { requestArticleList } from '@/store/article/async-thunk'
import useWindowRWD from '@/hooks/use-window-rwd'

import { ProfileWrapper } from './style'
import Header from '@/components/profile/header'
import MainLoadBoard from '@/components/profile/main-load-board'


const Profile = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const navigate = useNavigate()

  const { size } = useWindowRWD()

  useEffect(() => {
    const userInfo = MSSessionStore.getItem(LOGIN_INFO)
    !(userInfo?.account) && navigate('/login')

    dispatch(requestHotBoard())
    dispatch(requestUserInfo())
    dispatch(requestArticleList())
  }, [])

  return (
    <ProfileWrapper>
      { size.width > 992 && <Header />}
      <MainLoadBoard />
    </ProfileWrapper>
  )
})

export default RouterProvider(Profile)
