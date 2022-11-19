import { memo, useState, useCallback } from 'react'

import { ITimeId, ICorrelationId } from '@/enum/main'

import { ArticleWrapper } from './style'
import FilterBar from '@/components/search/article/filter-bar'
import ContentList from '@/components/search/article/content-list'

const Article = memo(() => {
  const [isInnerContent, setIsInnerContent] = useState(true)
  const changeInnerContent = useCallback((value: boolean) => setIsInnerContent(value), [setIsInnerContent])

  const [currentCorrelationItem, setCurrentCorrelationItem] = useState(ICorrelationId.new)
  const changeCurrentCorrelation = useCallback((value: number) => setCurrentCorrelationItem(value), [setCurrentCorrelationItem])

  const [currentTimeItem, setCurrentTimeItem] = useState(ITimeId.all)
  const changeCurrentTime = useCallback((value: number) => setCurrentTimeItem(value), [setCurrentTimeItem])

  return (
    <ArticleWrapper>
      <FilterBar
        isInnerContent={isInnerContent}
        changeInnerContent={changeInnerContent}
        currentCorrelationItem={currentCorrelationItem}
        changeCurrentCorrelation={changeCurrentCorrelation}
        currentTimeItem={currentTimeItem}
        changeCurrentTime={changeCurrentTime}
      />
      <ContentList
        isInnerContent={isInnerContent}
        currentCorrelationItem={currentCorrelationItem}
        currentTimeItem={currentTimeItem}
      />
    </ArticleWrapper>
  )
})

export default Article
