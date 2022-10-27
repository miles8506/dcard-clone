import { memo, useEffect } from 'react'

import type { ReduxDispatchType, ReduxStateType } from '@/store'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { requestAreaList } from '@/store/main/async-thunk'

import { AreaWrapper } from './style'

// eslint-disable-next-line @typescript-eslint/no-var-requires
import AllLoadBoardIcon from '@/assets/svg/all-load-board-icon'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import HotIcon from '@/assets/svg/hot-icon'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import ResearchIcon from '@/assets/svg/research-icon'

const Area = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { areaList } = useSelector(
    (state: ReduxStateType) => ({
      areaList: state.main.areaList
    }),
    shallowEqual
  )

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

  useEffect(() => {
    dispatch(requestAreaList())
  }, [dispatch])

  return (
    <AreaWrapper>
      {areaList?.map((item, index) => (
        <div key={item} className="area-item">
          <div className="area-icon">{iconList(index)}</div>
          <div className="area-text">{item}</div>
        </div>
      ))}
      <div className="area-item">
        <div className="area-icon rank-icon">
        </div>
        <div className="area-text">創作者排行</div>
      </div>
      <div className="area-item">
        <div className="area-icon game-icon">
        </div>
        <div className="area-text">創作者排行</div>
      </div>
    </AreaWrapper>
  )
})

export default Area
