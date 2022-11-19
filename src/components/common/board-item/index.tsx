import { FC, memo } from 'react'

import type { IHotBoard } from '@/store/main/type'

import { BoardItemWrapper } from './style'

interface IProps {
  boardDetail: IHotBoard
  isSearchBoard?: boolean
}

const BoardItem: FC<IProps> = memo(({ boardDetail, isSearchBoard = false }) => {
  const { imgUrl, name } = boardDetail

  return (
    <BoardItemWrapper isSearchBoard={isSearchBoard}>
      <div className="board-item">
        <div className="board-item-img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="board-item-text">
          <span>{name}</span>
        </div>
      </div>
    </BoardItemWrapper>
  )
})

export default BoardItem
