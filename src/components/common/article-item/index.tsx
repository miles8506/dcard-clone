import { memo, FC } from 'react'

import type { IArticle } from '@/store/article/type'

import { ArticleItemWrapper } from './style'
import ArticleItemInfo from '../article-item-info'
import ArticleItemMain from '../article-item-main'
import { CSSProperties } from 'styled-components'

interface IProps {
  article: IArticle
  sx?: CSSProperties
}

const ArticleItem: FC<IProps> = memo(({ article, sx }) => {
  return (
    <ArticleItemWrapper>
      <div className="article-item" style={sx}>
        <ArticleItemInfo article={article} />
        <ArticleItemMain article={article} />
      </div>
    </ArticleItemWrapper>
  )
})

export default ArticleItem
