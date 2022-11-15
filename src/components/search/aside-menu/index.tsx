import { memo } from 'react'

import { AsideMenuWrapper } from './style'
import Area from '@/components/common/area'
import HotBoard from '@/components/common/hot-board'

const AsideMenu = memo(() => {
  return (
    <AsideMenuWrapper>
      <div className="aside-menu">
        <Area />
        <HotBoard />
      </div>
    </AsideMenuWrapper>
  )
})

export default AsideMenu
