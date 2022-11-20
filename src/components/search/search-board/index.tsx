import { memo, useEffect, useState } from 'react'

import { MSLocalStore } from '@/utils'
import { DC_SEARCH_RECORD } from '@/constants'
import { useNavigate } from 'react-router-dom'

import { SearchBoardWrapper } from './style'
import RecordItem from '../record-item'

const SearchBoard = memo(() => {
  const navigate = useNavigate()

  const [searchRecordList, setSearchRecordList] = useState<string[]>([])

  const handleRecordClick = (recordName: string) => {
    const recordList = MSLocalStore.getItem(DC_SEARCH_RECORD)
    MSLocalStore.setItem(DC_SEARCH_RECORD, Array.from(new Set([recordName.trim(), ...recordList])))
    navigate(`/search/synthesize?query=${recordName}`)
  }

  const handleCancel = () => {
    MSLocalStore.clear()
    MSLocalStore.setItem(DC_SEARCH_RECORD, [])
    setSearchRecordList([])
  }

  useEffect(() => {
    const searchRecord = MSLocalStore.getItem(DC_SEARCH_RECORD)
    setSearchRecordList([...searchRecord])
  }, [])

  return (
    <SearchBoardWrapper>
      <div className="search-board">
        <div className="record">
          <div className="record-header">
            <h4 className='record-title'>最近搜尋紀錄</h4>
            <div className="record-cancel-btn" onClick={handleCancel}>
              清除
            </div>
          </div>
          <div className="record-list">
            {searchRecordList.map((item) => (
              <div
                className="record-item"
                key={item}
                onClick={() => handleRecordClick(item)}
              >
                <RecordItem record={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SearchBoardWrapper>
  )
})

export default SearchBoard
