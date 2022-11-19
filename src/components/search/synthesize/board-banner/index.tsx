import { Fragment, memo, useEffect, useState } from 'react'

import type { ReduxStateType } from '@/store'
import type { IHotBoard } from '@/store/main/type'

import { useSelector, shallowEqual } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'

import { BoardBannerWrapper } from './style'
import BoardItem from '../board-banner-item'

const BoardBanner = memo(() => {
  const { hotBoardList } = useSelector(
    (state: ReduxStateType) => ({
      hotBoardList: state.main.hotBoardList
    }),
    shallowEqual
  )

  const [filterBoardList, setFilterBoardList] = useState<IHotBoard[]>([])

  const { query } = useRouterInfo()

  useEffect(() => {
    setFilterBoardList(() => hotBoardList.filter((item) =>item.name.toLowerCase().includes(query?.toLowerCase())))
  }, [query, hotBoardList])

  return (
    <BoardBannerWrapper>
      {filterBoardList.length > 0 && (
        <div className="board-banner">
          <h4 className="board-banner-title">看板</h4>
          <div className="board-banner-box">
            {filterBoardList.map((item) => (
              <Fragment key={item.name}>
                <BoardItem hotBoard={item} />
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </BoardBannerWrapper>
  )
})

export default BoardBanner
