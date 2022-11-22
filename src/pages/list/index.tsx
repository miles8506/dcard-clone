import { memo } from 'react'

import { MobileListWrapper } from './style'
import Area from '@/components/common/area'
import HotBoard from '@/components/common/hot-board'
import Header from '@/components/list/header'

const MobileList = memo(() => {
  return (
    <MobileListWrapper>
      <Header />
      <div className="mobile-list">
        <Area />
        <HotBoard />
      </div>
    </MobileListWrapper>
  )
})

export default MobileList
