import { memo, FC } from 'react'

import { ArticleWrapper } from './style'
import CloseIcon from '@/assets/svg/close-icon'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import BottomBar from './bottom-bar'

interface IProps {
  onCancel: () => void
}

const Article: FC<IProps> = memo(({ onCancel }) => {

  return (
    <ArticleWrapper>
      <div className="article">
        <div className="article-header">
          <div className="article-header-user">
            <span className="user-avatar">
              <AvatarBoyIcon width={32} height={32} />
            </span>
            <span className="user-name">a09112332@gmail.com</span>
          </div>
          <div className="article-header-close-icon" onClick={onCancel}>
            <CloseIcon />
          </div>
        </div>
        <h2 className="article-title">我是title</h2>
        <div className="article-info">
          <div className="article-info-sort">NBA</div>
          <span className="article-info-division">·</span>
          <div className="article-info-date">2022-01-01</div>
        </div>
        <div className="article-content">
        </div>
      </div>
      <BottomBar />
    </ArticleWrapper>
  )
})

export default Article
