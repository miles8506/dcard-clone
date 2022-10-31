import { memo } from 'react'

import { ArticleItemWrapper } from './style'

const ArticleItem = memo(() => {
  return (
    <ArticleItemWrapper>
      article item
    </ArticleItemWrapper>
  )
})

export default ArticleItem
