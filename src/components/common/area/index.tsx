import { memo, useEffect } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTabContext } from '@/context/main-context/tab-context'
import { useFilterSelectContext } from '@/context/main-context/filter-select-context'
import { useMobileNavigateContext } from '@/context/main-context/mobile-navigate-context'
import { MobileNavigate } from '@/enum'
import { requestAreaList } from '@/store/main/async-thunk'

import { AreaWrapper } from './style'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import AllLoadBoardIcon from '@/assets/svg/all-load-board-icon'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import HotIcon from '@/assets/svg/hot-icon'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import ResearchIcon from '@/assets/svg/research-icon'

const Area = memo(() => {
  const navigate = useNavigate()

  const { resetStatusIndex } = useFilterSelectContext()
  const { resetTabIndex } = useTabContext()
  const { changeNavigateCurrentIndex } = useMobileNavigateContext()

  const { areaList } = useSelector(
    (state: ReduxStateType) => ({
      areaList: state.main.areaList
    }),
    shallowEqual
  )
  const dispatch: ReduxDispatchType = useDispatch()

  function iconList(index: number) {
    switch (index) {
      case 0:
        return <AllLoadBoardIcon />
      case 1:
        return <HotIcon />
      case 2:
        return <ResearchIcon />
    }
  }

  const handleClick = (index: number) => {
    if (index !== 0) return
    resetTabIndex && resetTabIndex()
    resetStatusIndex && resetStatusIndex()
    changeNavigateCurrentIndex && changeNavigateCurrentIndex(MobileNavigate.home)
    navigate('/main/any/all')
  }

  useEffect(() => {
    dispatch(requestAreaList())
  }, [])

  return (
    <AreaWrapper>
      {areaList?.map((item, index) => (
        <div
          key={item.name}
          className="area-item"
          onClick={() => handleClick(index)}
        >
          <div className="area-icon">{iconList(index)}</div>
          <div className="area-text">{item.name}</div>
        </div>
      ))}
      <div className="area-item">
        <div className="area-icon rank-icon"></div>
        <div className="area-text">創作者排行</div>
      </div>
      <div className="area-item">
        <div className="area-icon game-icon"></div>
        <div className="area-text">創作者排行</div>
      </div>
    </AreaWrapper>
  )
})

export default Area
