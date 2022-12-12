import { memo, FC, useState, Fragment, ChangeEvent, useEffect } from 'react'

import type { IHotBoard } from '@/store/main/type'

import { usePostContext } from '@/context/post-context'

import { BoardModalWrapper } from './style'
import SearchIcon from '@/assets/svg/search-icon/search'

interface IProps {
  hotBoardList: IHotBoard[]
  closeBoardModal: () => void
}

const BoardModal: FC<IProps> = memo(({ hotBoardList, closeBoardModal }) => {
  const { changeBoardIndex } = usePostContext()

  const [searchValue, setFilterValue] = useState('')
  const [displayBoardList, setDisplayBoardList] = useState<IHotBoard[]>([])

  const changeBoardClick = (index: number) => {
    changeBoardIndex(index)
    closeBoardModal()
  }
  const filterSearchResult = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setFilterValue(value)
    const filterResult = hotBoardList.filter(item => item.name.includes(value))
    setDisplayBoardList(filterResult)
  }

  useEffect(() => {
    setDisplayBoardList(hotBoardList)
  }, [hotBoardList])

  return (
    <BoardModalWrapper>
      <div className="board-modal">
        <div className="board-modal-top">選擇發文看板</div>
        <div className="board-modal-content">
          <div className="filter-board-bar">
            <span className="search-icon">
              <SearchIcon width={24} height={24} />
            </span>
            <input
              type="text"
              placeholder='尋找看板'
              value={searchValue}
              onInput={filterSearchResult}
            />
          </div>
          <div className="list">
            <div className="text">看板</div>
            {
              displayBoardList.map((item) => (
                <Fragment key={item.name}>
                  <div
                    className="item"
                    onClick={() => changeBoardClick(item.id)}
                  >
                    {item.name}
                  </div>
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </BoardModalWrapper>
  )
})

export default BoardModal
