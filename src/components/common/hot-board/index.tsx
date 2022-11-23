import { memo, useEffect } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useNavigate } from 'react-router-dom'
import { useTabContext } from '@/context/main-context/tab-context'
import { useFilterSelectContext } from '@/context/main-context/filter-select-context'
import { useMobileNavigateContext } from '@/context/main-context/mobile-navigate-context'
import { MobileNavigate } from '@/enum'
import { requestHotBoard } from '@/store/main/async-thunk'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { HotBoardWrapper } from './style'
import BoardItem from '../board-item'

const HotBoard = memo(() => {
  const navigate = useNavigate()

  const { hotBoardList } = useSelector(
    (state: ReduxStateType) => ({
      hotBoardList: state.main.hotBoardList
    }),
    shallowEqual
  )
  const dispatch: ReduxDispatchType = useDispatch()

  const { resetTabIndex } = useTabContext()
  const { resetStatusIndex } = useFilterSelectContext()
  const { changeNavigateCurrentIndex } = useMobileNavigateContext()

  const handleClick = (path: string) => {
    resetTabIndex && resetTabIndex()
    resetStatusIndex && resetStatusIndex()
    changeNavigateCurrentIndex && changeNavigateCurrentIndex(MobileNavigate.main)
    navigate(`/main/${path}/all`)
  }

  useEffect(() => {
    dispatch(requestHotBoard())
  }, [dispatch])

  return (
    <HotBoardWrapper>
      <div className="hot-board">
        <div className="hot-board-title">Dcard 精選看版</div>
        <div className="hot-board-list">
          {hotBoardList?.map((item) => (
            <div
              className="board"
              key={item.name}
              onClick={() => handleClick(item.path)}
            >
              <BoardItem boardDetail={item} />
            </div>
          ))}
        </div>
      </div>
    </HotBoardWrapper>
  )
})

export default HotBoard
