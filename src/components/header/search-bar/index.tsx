import { memo, useCallback, useEffect, useRef, useState } from 'react'

import type { InputRef } from 'antd'

import { useNavigate } from 'react-router-dom'
import { useRouterInfo } from '@/context/router-info-context'
import { MSLocalStore } from '@/utils'
import { DC_SEARCH_RECORD } from '@/constants'

import { SearchBarWrapper } from './style'
import MSInput from '@/base-ui/MSInput'
import SearchIcon from '@/assets/svg/search-icon/search'
import DelValueIcon from '@/components/common/del-value-icon'

const SearchBar = memo(() => {
  const { query } = useRouterInfo()

  const navigate = useNavigate()

  const inputRef = useRef<InputRef>(null)
  const [searchValue, setSearchValue] = useState(() => query ? query : '')

  const changeSearchValue = useCallback((value: string) => setSearchValue(value), [setSearchValue])

  const handleDelValue = useCallback(() => {
    setSearchValue('')
    inputRef.current?.focus()
  }, [setSearchValue, inputRef])

  const handleSearch = () => {
    if (searchValue.trim() === '') return
    const recordList = MSLocalStore.getItem(DC_SEARCH_RECORD)
    MSLocalStore.setItem(DC_SEARCH_RECORD, Array.from(new Set([searchValue.trim(), ...recordList])))
    navigate(`/search/synthesize?query=${searchValue}`)
  }

  useEffect(() => {
    if (query) changeSearchValue(query)
  }, [query])

  return (
    <SearchBarWrapper>
      <div className="search-bar">
        <MSInput
          ref={inputRef}
          value={searchValue}
          setValue={changeSearchValue}
          placeholder='搜尋 一家團圓'
          onPressEnter={handleSearch}
        />
        <span className='search-bar-btn' onClick={handleSearch}>
          <SearchIcon width={20} height={20} />
        </span>
        {
          searchValue.length > 0 && (
            <div className="search-bar-del-icon">
              <DelValueIcon
                width={14}
                height={14}
                handleClick={handleDelValue}
              />
            </div>
          )
        }
      </div>
    </SearchBarWrapper>
  )
})

export default SearchBar
