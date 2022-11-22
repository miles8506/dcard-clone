import { memo } from 'react'

import RouterProvider from '@/context/router-info-context'

import { MainWrapper } from './style'
import Header from '../../components/main/header'
import MainLoadBoard from '@/components/main/main-load-board'

const Main = memo(() => {
  return (
    <MainWrapper>
      <Header />
      <MainLoadBoard />
    </MainWrapper>
  )
})

export default RouterProvider(Main)
