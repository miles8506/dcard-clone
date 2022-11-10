import { FC, memo } from 'react'

import { ReduxStateType } from '@/store'
import { useSelector, shallowEqual } from 'react-redux'

import { ArticleHeaderWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import CloseIcon from '@/assets/svg/close-icon'

interface IProps {
  onCancel: () => void
}

const ArticleHeader: FC<IProps> = memo(({ onCancel }) => {
  const { article } = useSelector((state: ReduxStateType) => ({
    article: state.main.article
  }), shallowEqual)

  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={32} height={32} /> : <AvatarBoyIcon width={32} height={32} />

  return (
    <ArticleHeaderWrapper>
      <div className="article-header">
        <div className="article-header-user">
          <span className="user-avatar">{getGender(article.gender)}</span>
          <span className="user-name">{article.account}</span>
        </div>
        <div className="article-header-close-icon" onClick={onCancel}>
          <CloseIcon />
        </div>
      </div>
    </ArticleHeaderWrapper>
  )
})

export default ArticleHeader
