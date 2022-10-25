import { memo } from 'react'

import { MainLoadBoardWrapper } from './style'
import AsideMenu from '../aside-menu'
import Tabs from '../tabs'

const MainLoadBoard = memo(() => {
  return (
    <MainLoadBoardWrapper>
      <AsideMenu />
      <Tabs />
    </MainLoadBoardWrapper>
  )
})

export default MainLoadBoard
