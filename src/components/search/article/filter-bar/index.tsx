import { memo, useState, useEffect, MouseEvent, FC } from 'react'

import { correlationList, timeList } from '@/enum/main'
import useWindowRWD from '@/hooks/use-window-rwd'

import { FilterBarWrapper } from './style'
import CheckBox from '../check-box'
import CorrelationMenu from '../correlation-menu'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import TimeMenu from '../time-menu'
import MobileCorrelationMenu from '../mobile-correlation-menu'
import MobileTimeMenu from '../mobile-time-menu'
import { CSSTransition } from 'react-transition-group'

interface IProps {
  isInnerContent: boolean
  changeInnerContent: (value: boolean) => void
  currentCorrelationItem: number
  changeCurrentCorrelation: (value: number) => void
  currentTimeItem: number
  changeCurrentTime: (value: number, ) => void
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
    const { size } = useWindowRWD()

    const [isShowCorrelationMenu, setIsShowCorrelationMenu] = useState(false)
    const [isShowTimeMenu, setIsShowTimeMenu] = useState(false)
    const [isShowMask, setIsShowMask] = useState(false)

    const handleShowMenu = (
      event: MouseEvent,
      type: 'correlation' | 'time'
    ) => {
      event.stopPropagation()
      if (size.width <= 996) setIsShowMask(true)
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

    useEffect(() => {
      if (size.width > 996) return
      if (!isShowCorrelationMenu && isShowMask) setIsShowMask(false)
    }, [isShowCorrelationMenu, size])

    useEffect(() => {
      if (size.width > 996) return
      if (!isShowTimeMenu && isShowMask) return setIsShowMask(false)
    }, [isShowTimeMenu, size])

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
            {isShowCorrelationMenu && size.width > 996 && (
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
            {isShowTimeMenu && size.width > 996 && (
              <TimeMenu
                currentTimeItem={currentTimeItem}
                changeCurrentTime={changeCurrentTime}
              />
            )}
          </div>
        </div>
        <CSSTransition
          in={isShowMask}
          classNames={{
            enter: 'mobile-mask-enter',
            enterActive: 'mobile-mask-active-enter',
            exit: 'mobile-mask-exit',
            exitActive: 'mobile-mask-active-exit'
          }}
          timeout={300}
          unmountOnExit
        >
          <div className="mobile-mask" onClick={() => setIsShowMask(false)} />
        </CSSTransition>
        {size.width <= 996 && (
          <CSSTransition
            in={isShowCorrelationMenu}
            classNames={{
              enter: 'mobile-correlationMenu-enter',
              enterActive: 'mobile-correlationMenu-active-enter',
              exit: 'mobile-correlationMenu-exit',
              exitActive: 'mobile-correlationMenu-active-exit'
            }}
            timeout={300}
            unmountOnExit
          >
            <MobileCorrelationMenu
              currentCorrelationItem={currentCorrelationItem}
              changeCurrentCorrelation={changeCurrentCorrelation}
            />
          </CSSTransition>
        )}
        {size.width <= 996 && (
          <CSSTransition
            in={isShowTimeMenu}
            classNames={{
              enter: 'mobile-time-enter',
              enterActive: 'mobile-time-active-enter',
              exit: 'mobile-time-exit',
              exitActive: 'mobile-time-active-exit'
            }}
            timeout={300}
            unmountOnExit
          >
            <MobileTimeMenu
              currentTimeItem={currentTimeItem}
              changeCurrentTime={changeCurrentTime}
            />
          </CSSTransition>
        )}
      </FilterBarWrapper>
    )
  }
)

export default FilterBar
