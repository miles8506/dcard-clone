import { memo, useState, useCallback, useMemo, MouseEvent } from 'react'

import { FilterSelectWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import Select from './select'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'

const FilterSelect = memo(() => {
  const options = useMemo(() => ['熱門', '最新'], [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isShowSelect, setIsShowSelect] = useState(false)
  const closeSelect = useCallback(() => setIsShowSelect(false), [setIsShowSelect])
  const changeCurrentIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [setCurrentIndex])

  const handleOptionClick = (event: MouseEvent) => {
    event.stopPropagation()
    setIsShowSelect(prev => !prev)
  }

  return (
    <FilterSelectWrapper>
      <div className="filter-select">
        <div className="text">文章排序依</div>
        <div className="current-option" onClick={(event: MouseEvent) => handleOptionClick(event)}>
          <div className="current-option-text">{options[currentIndex]}</div>
          <div className="arrow-icon">
            <ArrowDownIcon width='18px' height='18px' />
          </div>
        </div>
        <CSSTransition
          in={isShowSelect}
          timeout={100}
          classNames={{
            enter: 'filter-select-enter',
            enterActive: 'filter-select-active-enter',
            exit: 'filter-select-exit',
            exitActive: 'filter-select-active-exit'
          }}
          unmountOnExit
        >
          <Select
            options={options}
            currentIndex={currentIndex}
            closeSelect={closeSelect}
            changeCurrentIndex={changeCurrentIndex}
          />
        </CSSTransition>
      </div>
    </FilterSelectWrapper>
  )
})

export default FilterSelect
