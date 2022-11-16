import { memo, useEffect, useRef } from 'react'

import { useRouterInfo } from '@/context/router-info-context'

import { MainLoadBoardWrapper } from './style'
import AsideMenu from '../aside-menu'
import Tabs from '../tabs'

const MainLoadBoard = memo(() => {
  const { query } = useRouterInfo()

  const useMainLoadBoardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    useMainLoadBoardRef.current?.scrollTo(0, 0)
  }, [query])

  return (
    <MainLoadBoardWrapper ref={useMainLoadBoardRef}>
      <div className="main-load-board">
        <AsideMenu />
        <Tabs />
      </div>
    </MainLoadBoardWrapper>
  )
})

export default MainLoadBoard
