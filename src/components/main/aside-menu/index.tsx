import { memo, useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTabContext } from '@/context/main-context/tab-context'
import { requestAreaList, requestHotBoard } from '@/store/main/async-thunk'

import { AsideMenuWrapper } from './style'
import Area from './area'
import HotBoard from './hot-board'

const AsideMenu = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { resetTabIndex } = useTabContext()

  const navigate = useNavigate()
  const handleNavigate = (pathName: string) => {
    resetTabIndex()
    navigate(pathName)
  }

  useEffect(() => {
    dispatch(requestAreaList())
    dispatch(requestHotBoard())
  }, [dispatch])

  return (
    <AsideMenuWrapper>
      <Area />
      <HotBoard />
    </AsideMenuWrapper>
  )
})

export default AsideMenu
