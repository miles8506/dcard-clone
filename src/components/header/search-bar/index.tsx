import { memo, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRouterInfo } from '@/context/router-info-context'

import { SearchBarWrapper } from './style'
import MSInput from '@/base-ui/MSInput'
import SearchIcon from '@/assets/svg/search-icon/search'

const SearchBar = memo(() => {
  const { query } = useRouterInfo()

  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState(() => query ? query : '')

  const handleSearch = () => {
    if (searchValue.trim() === '') return
    navigate(`/search/synthesize?query=${searchValue}`)
  }

  return (
    <SearchBarWrapper>
      <div className="search-bar">
        <MSInput
          value={searchValue}
          setValue={setSearchValue}
          placeholder='搜尋 一家團圓'
          onPressEnter={handleSearch}
        />
        <span className='search-bar-btn' onClick={handleSearch}>
          <SearchIcon width={20} height={20} />
        </span>
      </div>
    </SearchBarWrapper>
  )
})

export default SearchBar
