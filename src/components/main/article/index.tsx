import { memo, FC } from 'react'

import { ArticleWrapper } from './style'
import BottomBar from './bottom-bar'
import ArticleHeader from './header'
import ArticleMain from './main'

interface IProps {
  onCancel: () => void
}

const Article: FC<IProps> = memo(({ onCancel }) => {
  return (
    <ArticleWrapper>
      <div className="article">
        <ArticleHeader onCancel={onCancel} />
        <ArticleMain />
        <BottomBar />
      </div>
    </ArticleWrapper>
  )
})

export default Article
