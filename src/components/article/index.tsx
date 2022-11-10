import { memo, FC } from 'react'

import { ArticleWrapper } from './style'
import BottomBar from './bottom-bar'
import ArticleHeader from './header'
import ArticleMain from './main'
import InterestArea from './interest-area'
import CommentArea from './comment-area'

interface IProps {
  onCancel: () => void
}

const Article: FC<IProps> = memo(({ onCancel }) => {
  return (
    <ArticleWrapper>
      <div className="article">
        <ArticleHeader onCancel={onCancel} />
        <ArticleMain />
        <InterestArea />
        <CommentArea />
        <BottomBar />
      </div>
    </ArticleWrapper>
  )
})

export default Article
