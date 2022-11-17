import { memo, useState, useCallback, useEffect, MouseEvent } from 'react'

import { correlationList, timeList } from '@/enum/main'

import { FilterBarWrapper } from './style'
import CheckBox from '../article-check-box'
import CorrelationMenu from '../correlation-menu'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import TimeMenu from '../article-time-menu'

const FilterBar = memo(() => {
  const [isChecked, setIsChecked] = useState(true)
  const changeChecked = useCallback((value: boolean) => setIsChecked(value), [setIsChecked])

  const [isShowCorrelationMenu, setIsShowCorrelationMenu] = useState(false)
  const [currentCorrelationItem, setCurrentCorrelationItem] = useState(0)
  const changeCurrentCorrelation = useCallback((value: number) => setCurrentCorrelationItem(value), [setCurrentCorrelationItem])

  const [isShowTimeMenu, setIsShowTimeMenu] = useState(false)
  const [currentTimeItem, setCurrentTimeItem] = useState(0)
  const changeCurrentTime = useCallback((value: number) => setCurrentTimeItem(value), [setCurrentTimeItem])

  const handleShowMenu = (event: MouseEvent, type: 'correlation' | 'time') => {
    event.stopPropagation()
    if (type === 'correlation') {
      !isShowCorrelationMenu && setIsShowTimeMenu(false)
      setIsShowCorrelationMenu(prev => !prev)
    } else {
      !isShowTimeMenu && setIsShowCorrelationMenu(false)
      setIsShowTimeMenu(prev => !prev)
    }
  }

  useEffect(() => {
    function handleClick(event: any) {
      event.stopPropagation()
      setIsShowCorrelationMenu(false)
      setIsShowTimeMenu(false)
    }
    window.document.addEventListener('click', handleClick)

    return () => window.document.removeEventListener('click', handleClick)
  }, [])

  return (
    <FilterBarWrapper>
      <div className="filter-bar">
        <div className="inner-content-item">
          <CheckBox
            isChecked={isChecked}
            onChangeStatus={changeChecked}
            value="含內文"
          />
        </div>
        <div className="correlation-item" onClick={(event: any) => handleShowMenu(event, 'correlation')}>
          <div className="text">{correlationList[currentCorrelationItem].name}</div>
          <div className="down-icon">
            <ArrowDownIcon width="18" height='18' />
          </div>
          {
            isShowCorrelationMenu &&
            <CorrelationMenu
              currentCorrelationItem={currentCorrelationItem}
              changeCurrentCorrelation={changeCurrentCorrelation}
            />
          }
        </div>
        <div className="time-item" onClick={(event: any) => handleShowMenu(event, 'time')}>
          <div className="text">{timeList[currentTimeItem].name}</div>
          <div className="down-icon">
            <ArrowDownIcon width="18" height='18' />
          </div>
          {
            isShowTimeMenu &&
            <TimeMenu
              currentTimeItem={currentTimeItem}
              changeCurrentTime={changeCurrentTime}
            />
          }
        </div>
      </div>
    </FilterBarWrapper>
  )
})

export default FilterBar
