import { memo } from 'react'

import { useSearchContext } from '@/context/main-context/search-context'

import { SearchBarWrapper } from './style'
import MSInput from '@/base-ui/MSInput'
import SearchIcon from '@/assets/svg/search-icon/search'

const SearchBar = memo(() => {
  const { searchValue, changeSearchValue } = useSearchContext()

  return (
    <SearchBarWrapper>
      <div className="search-bar">
        <MSInput
          value={searchValue}
          setValue={changeSearchValue}
          placeholder='搜尋 一家團圓'
        />
        <span className='search-bar-btn'>
          <SearchIcon />
        </span>
      </div>
    </SearchBarWrapper>
  )
})

export default SearchBar
