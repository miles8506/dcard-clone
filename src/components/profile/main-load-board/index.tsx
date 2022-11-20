import { memo } from 'react'

import { MainLoadBoardWrapper } from './style'
import Aside from '../aside'
import Main from '../main'

const MainLoadBoard = memo(() => {
  return (
    <MainLoadBoardWrapper>
      <div className="main-load-board">
        <Aside />
        <Main />
      </div>
    </MainLoadBoardWrapper>
  )
})

export default MainLoadBoard
