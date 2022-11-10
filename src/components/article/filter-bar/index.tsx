import classNames from 'classnames'
import { memo, useState } from 'react'
import { FilterBarWrapper } from './style'

const FilterBar = memo(() => {
  const [filterSort, setFilterSort] = useState(0)

  return (
    <FilterBarWrapper>
      <div className="filter-bar">
        <div
          className={classNames(['hot-btn', filterSort === 0 && 'active'])}
          onClick={() => setFilterSort(0)}
        >
          熱門
        </div>
        <div
          className={classNames(['sort-btn', filterSort === 1 && 'active'])}
          onClick={() => setFilterSort(1)}
        >
          由舊至新
        </div>
      </div>
    </FilterBarWrapper>
  )
})

export default FilterBar
