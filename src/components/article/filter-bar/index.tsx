import { memo } from 'react'

import classNames from 'classnames'
import { ArticleFilter } from '@/enum'
import { useArticleContext } from '@/context/article-context'

import { FilterBarWrapper } from './style'

const FilterBar = memo(() => {
  const { filterSort, changeFilterSort } = useArticleContext()

  return (
    <FilterBarWrapper>
      <div className="filter-bar">
        <div
          className={classNames(['hot-btn', filterSort === ArticleFilter.hot && 'active'])}
          onClick={() => changeFilterSort(0)}
        >
          熱門
        </div>
        <div
          className={classNames(['sort-btn', filterSort === ArticleFilter.time && 'active'])}
          onClick={() => changeFilterSort(1)}
        >
          由舊至新
        </div>
      </div>
    </FilterBarWrapper>
  )
})

export default FilterBar
