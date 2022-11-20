import { memo, useCallback, useState, useRef, FC, useEffect } from 'react'

import type { InputRef } from 'antd'

import { useNavigate } from 'react-router-dom'
import { useRouterInfo } from '@/context/router-info-context'
import { SearchTab } from '@/enum'
import { MSLocalStore } from '@/utils'
import { DC_SEARCH_RECORD } from '@/constants'

import { SearchBarWrapper } from './style'
import SearchIcon from '@/assets/svg/search-icon/search'
import MSInput from '@/base-ui/MSInput'
import DelValueIcon from '@/components/common/del-value-icon'

interface IProps {
  changeTabIndex: (value: string) => void
}

const SearchBar: FC<IProps> = memo(({ changeTabIndex }) => {
  const navigate = useNavigate()

  const { query } = useRouterInfo()

  const inputRef = useRef<InputRef>(null)
  const [searchValue, setSearchValue] = useState(() => query ? query : '')

  const changeSearchValue = useCallback((value: string) => {
    setSearchValue(value)
  }, [setSearchValue])

  const handleDelValueClick = useCallback(() => {
    setSearchValue('')
    inputRef.current?.focus()
  }, [setSearchValue, inputRef])

  const handleSearch = useCallback(() => {
    if (searchValue.trim() === '') return
    const recordList = MSLocalStore.getItem(DC_SEARCH_RECORD)
    MSLocalStore.setItem(DC_SEARCH_RECORD, Array.from(new Set([searchValue.trim(), ...recordList])))
    changeTabIndex(SearchTab.synthesize)
    navigate(`/search/synthesize?query=${searchValue}`)
  }, [searchValue])

  const handleCancelClick = () => {
    const haveQuery = !!query
    if (haveQuery) {
      init()
    } else {
      navigate('/main')
    }
  }

  const init = () => {
    setSearchValue('')
    changeTabIndex(SearchTab.synthesize)
    navigate(`/search/synthesize`)
  }

  useEffect(() => {
    if (query) setSearchValue(query)
  }, [query])

  return (
    <SearchBarWrapper>
      <div className="search-bar">
        <div className="search-input">
          <div className="search-icon">
            <SearchIcon width={24} height={24} />
          </div>
          <MSInput
            ref={inputRef}
            value={searchValue}
            setValue={changeSearchValue}
            sx={{
              background: '#fff',
              border: '0px',
              color: '#000',
              padding: '0px 6px'
            }}
            onPressEnter={handleSearch}
          />
          {
            searchValue.length > 0 &&
            <div className="del-icon">
              <DelValueIcon handleClick={handleDelValueClick} />
            </div>
          }
        </div>
        <div className="cancel-btn" onClick={handleCancelClick}>取消</div>
      </div>
    </SearchBarWrapper>
  )
})

export default SearchBar
