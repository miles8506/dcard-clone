import { memo } from 'react'

import { MobileBoardListWrapper } from './style'
import Area from '../../common/area'
import HotBoard from '../../common/hot-board'

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
