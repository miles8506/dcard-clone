import { memo, useEffect } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useNavigate } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { requestHotBoard } from '@/store/main/async-thunk'
import { useRouterInfo } from '@/context/router-info-context'
import { filterBoard } from '@/utils'

import { BoardWrapper } from './style'
import BoardItem from '@/components/common/board-item'

const Board = memo(() => {
  const navigate = useNavigate()

  const { hotBoardList } = useSelector(
    (state: ReduxStateType) => ({
      hotBoardList: state.main.hotBoardList
    }),
    shallowEqual
  )
  const dispatch: ReduxDispatchType = useDispatch()

  const { query } = useRouterInfo()

  const handleClick = (path: string) => {
    navigate(`/main/${path}/all`)
  }

  useEffect(() => {
    dispatch(requestHotBoard())
  }, [dispatch])

  return (
    <BoardWrapper>
      <div className="board-list">
        {
          filterBoard(hotBoardList, query)?.map(item => (
            <div
              className="board-item"
              key={item.name}
              onClick={() => handleClick(item.path)}
            >
              <BoardItem boardDetail={item} isSearchBoard={true} />
            </div>
          ))
        }
      </div>
    </BoardWrapper>
  )
})

export default Board
