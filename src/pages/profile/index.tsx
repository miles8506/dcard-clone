import { memo } from 'react'

import RouterProvider from '@/context/router-info-context'

import { ProfileWrapper } from './style'
import Header from '@/components/profile/header'
import MainLoadBoard from '@/components/profile/main-load-board'

const Profile = memo(() => {
  return (
    <ProfileWrapper>
      <Header />
      <MainLoadBoard />
    </ProfileWrapper>
  )
})

export default RouterProvider(Profile)
