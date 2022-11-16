import { memo } from 'react'

import { ArticleWrapper } from './style'
import FilterBar from '@/components/search/article-filter-bar'

const Article = memo(() => {
  return (
    <ArticleWrapper>
      <FilterBar />
    </ArticleWrapper>
  )
})

export default Article
