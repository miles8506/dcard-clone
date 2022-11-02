import { memo } from 'react'

import { MainLoadBoardWrapper } from './style'
import AsideMenu from '../aside-menu'
import Tabs from '../tabs'

const MainLoadBoard = memo(() => {
  return (
    <MainLoadBoardWrapper>
      <div className="main-load-board">
        <AsideMenu />
        <Tabs />
      </div>
    </MainLoadBoardWrapper>
  )
})

export default MainLoadBoard
