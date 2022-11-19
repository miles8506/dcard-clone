import { memo, FC } from 'react'

import type { IArticle } from '@/store/article/type'
import type { ReduxStateType } from '@/store'

import { useSelector, shallowEqual } from 'react-redux'
import { timeGap } from '@/utils'

import { ArticleItemInfoWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'

interface IProps {
  article: IArticle
}

const ArticleItemInfo: FC<IProps> = memo(({ article }) => {
  const { hotBoardList } = useSelector((state: ReduxStateType) => ({
    hotBoardList: state.main.hotBoardList
  }), shallowEqual)

  const { gender, sort, account, id: time } = article

  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon /> : <AvatarBoyIcon />

  return (
    <ArticleItemInfoWrapper>
      <div className="info">
        <div className="avatar">{ getGender(gender) }</div>
        <div className="sort">{ hotBoardList[sort].name }</div>
        <div className="name">{ account }</div>
        <div className="time">{timeGap(time)}</div>
      </div>
    </ArticleItemInfoWrapper>
  )
})

export default ArticleItemInfo
