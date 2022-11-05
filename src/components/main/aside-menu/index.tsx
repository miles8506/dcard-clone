import { memo, useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import { useDispatch } from 'react-redux'
import { requestAreaList, requestHotBoard } from '@/store/main/async-thunk'

import { AsideMenuWrapper } from './style'
import Area from './area'
import HotBoard from './hot-board'

const AsideMenu = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()

  useEffect(() => {
    dispatch(requestAreaList())
    dispatch(requestHotBoard())
  }, [dispatch])

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
