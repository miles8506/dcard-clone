import { memo } from 'react'

import { SearchBarWrapper } from './style'

const SearchBar = memo(() => {
  return (
    <SearchBarWrapper>
      <div className="search-bar">
        <div className="search-input">
          <input type="text" />
        </div>
        <div className="cancel-btn">取消</div>
      </div>
    </SearchBarWrapper>
  )
})

export default SearchBar
