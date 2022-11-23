import { memo } from 'react'

import { MobileListWrapper } from './style'
import Area from '@/components/common/area'
import HotBoard from '@/components/common/hot-board'
import Header from '@/components/list/header'

const MobileList = memo(() => {
  return (
    <MobileListWrapper>
      <div className="mobile-list-wrap">
        <Header />
        <div className="mobile-list">
          <Area />
          <HotBoard />
        </div>
      </div>
    </MobileListWrapper>
  )
})

export default MobileList
