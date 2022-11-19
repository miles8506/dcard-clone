import { FC, memo, useEffect, useRef } from 'react'

import { useRouterInfo } from '@/context/router-info-context'

import { MainLoadBoardWrapper } from './style'
import AsideMenu from '../aside-menu'
import Tabs from '../tabs'

interface IProps {
  isShowHeader: boolean
}

const MainLoadBoard: FC<IProps> = memo(({ isShowHeader }) => {
  const { query } = useRouterInfo()

  const useMainLoadBoardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    useMainLoadBoardRef.current?.scrollTo(0, 0)
  }, [query])

  return (
    <MainLoadBoardWrapper ref={useMainLoadBoardRef} isShowHeader={isShowHeader}>
      <div className="main-load-board">
        <AsideMenu />
        <Tabs isShowHeader={isShowHeader}  />
      </div>
    </MainLoadBoardWrapper>
  )
})

export default MainLoadBoard
