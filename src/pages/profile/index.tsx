import { memo, useEffect } from 'react'

import RouterProvider from '@/context/router-info-context'
import { MSSessionStore } from '@/utils'
import { LOGIN_INFO } from '@/constants'
import { useNavigate } from 'react-router-dom'

import { ProfileWrapper } from './style'
import Header from '@/components/profile/header'
import MainLoadBoard from '@/components/profile/main-load-board'


const Profile = memo(() => {
  const navigation = useNavigate()

  useEffect(() => {
    const userInfo = MSSessionStore.getItem(LOGIN_INFO)
    !(userInfo?.account) && navigation('/main')
  }, [])

  return (
    <ProfileWrapper>
      <Header />
      <MainLoadBoard />
    </ProfileWrapper>
  )
})

export default RouterProvider(Profile)
