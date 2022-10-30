import { memo } from 'react'

import type { ReduxStateType } from '@/store'

import { useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFilterSelectContext } from '@/context/main-context/filter-select-context'

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

  const handleClick = (index: number) => {
    if (index !== 0) return
    resetStatusIndex()
    navigate('/main/any/all/hot')
  }

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