import { memo, useState, useEffect, MouseEvent, FC } from 'react'

import { correlationList, timeList } from '@/enum/main'

import { FilterBarWrapper } from './style'
import CheckBox from '../check-box'
import CorrelationMenu from '../correlation-menu'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import TimeMenu from '../time-menu'

interface IProps {
  isInnerContent: boolean
  changeInnerContent: (value: boolean) => void
  currentCorrelationItem: number
  changeCurrentCorrelation: (value: number) => void
  currentTimeItem: number
  changeCurrentTime: (value: number) => void
}

const FilterBar: FC<IProps> = memo(
  ({
    isInnerContent,
    changeInnerContent,
    currentCorrelationItem,
    changeCurrentCorrelation,
    currentTimeItem,
    changeCurrentTime
  }) => {
    const [isShowCorrelationMenu, setIsShowCorrelationMenu] = useState(false)
    const [isShowTimeMenu, setIsShowTimeMenu] = useState(false)

    const handleShowMenu = (
      event: MouseEvent,
      type: 'correlation' | 'time'
    ) => {
      event.stopPropagation()
      if (type === 'correlation') {
        !isShowCorrelationMenu && setIsShowTimeMenu(false)
        setIsShowCorrelationMenu((prev) => !prev)
      } else {
        !isShowTimeMenu && setIsShowCorrelationMenu(false)
        setIsShowTimeMenu((prev) => !prev)
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
              isChecked={isInnerContent}
              onChangeStatus={changeInnerContent}
              value="含內文"
            />
          </div>
          <div
            className="correlation-item"
            onClick={(event: any) => handleShowMenu(event, 'correlation')}
          >
            <div className="text">
              {correlationList[currentCorrelationItem].name}
            </div>
            <div className="down-icon">
              <ArrowDownIcon width="18" height="18" />
            </div>
            {isShowCorrelationMenu && (
              <CorrelationMenu
                currentCorrelationItem={currentCorrelationItem}
                changeCurrentCorrelation={changeCurrentCorrelation}
              />
            )}
          </div>
          <div
            className="time-item"
            onClick={(event: any) => handleShowMenu(event, 'time')}
          >
            <div className="text">{timeList[currentTimeItem].name}</div>
            <div className="down-icon">
              <ArrowDownIcon width="18" height="18" />
            </div>
            {isShowTimeMenu && (
              <TimeMenu
                currentTimeItem={currentTimeItem}
                changeCurrentTime={changeCurrentTime}
              />
            )}
          </div>
        </div>
      </FilterBarWrapper>
    )
  }
)

export default FilterBar
