import { memo, FC } from 'react'

import type { IArticle } from '@/store/post/type'

import { ArticleItemWrapper } from './style'
import ArticleItemInfo from '../article-item-info'
import ArticleItemMain from '../article-item-main'

interface IProps {
  article: IArticle
}

const ArticleItem: FC<IProps> = memo(({ article }) => {
  return (
    <ArticleItemWrapper>
      <div className="article-item">
        <ArticleItemInfo article={article} />
        <ArticleItemMain article={article} />
      </div>
    </ArticleItemWrapper>
  )
})

export default ArticleItem
