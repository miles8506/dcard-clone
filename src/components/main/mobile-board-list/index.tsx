import { memo } from 'react'

import { MobileBoardListWrapper } from './style'
import Area from '../aside-menu/area'
import HotBoard from '../aside-menu/hot-board'

const MobileBoardList = memo(() => {
  return (
    <MobileBoardListWrapper>
      <div className="mobile-board-list">
        <Area />
        <HotBoard />
      </div>
    </MobileBoardListWrapper>
  )
})

export default MobileBoardList
