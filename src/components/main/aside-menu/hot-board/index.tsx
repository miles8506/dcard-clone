import { memo } from 'react'

import { ReduxStateType } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useTabContext } from '@/context/main-context/tab-context'
import { useFilterSelectContext } from '@/context/main-context/filter-select-context'

import { useSelector, shallowEqual } from 'react-redux'
import { HotBoardWrapper } from './style'


const HotBoard = memo(() => {
  const navigate = useNavigate()
  const { hotBoardList } = useSelector((state: ReduxStateType) => ({
    hotBoardList: state.main.hotBoardList
  }), shallowEqual)
  const { resetTabIndex } = useTabContext()
  const { resetStatusIndex } = useFilterSelectContext()

  const handleClick = (path: string) => {
    resetTabIndex()
    resetStatusIndex()
    navigate(`/main/${path}/all/hot`)
  }

  return (
    <HotBoardWrapper>
      <div className="hot-board">
        <div className="hot-board-title">即時熱門看板</div>
        {
          hotBoardList?.map(item => (
            <div
              className='board'
              key={item.name}
              onClick={() => handleClick(item.path)}
            >
              <div className="board-img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="board-text">
                <span>{item.name}</span>
              </div>
            </div>
          ))
        }
      </div>
    </HotBoardWrapper>
  )
})

export default HotBoard
