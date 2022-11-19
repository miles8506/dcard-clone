import { memo } from 'react'

import RouterProvider from '@/context/router-info-context'
import { useMobileNavigateContext } from '@/context/main-context/mobile-navigate-context'
import { MobileNavigate } from '@/enum'

import { MainWrapper } from './style'
import Header from '../../components/main/header'
import MainLoadBoard from '@/components/main/main-load-board'
import MainContextProvider from '@/context/main-context'
import MobileNavigation from '@/components/main/mobile-navigation'
import MobileBoardList from '@/components/main/mobile-board-list'

const Main = memo(() => {
  const { navigateCurrentIndex } = useMobileNavigateContext()

  return (
    <MainWrapper>
      <Header />
      <MainLoadBoard />
      { navigateCurrentIndex === MobileNavigate.boardList && <MobileBoardList /> }
      <MobileNavigation />
    </MainWrapper>
  )
})

export default RouterProvider(MainContextProvider(Main))
