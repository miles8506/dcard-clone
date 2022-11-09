import { memo, FC, useEffect, Fragment } from 'react'

import { useFilterSelectContext } from '@/context/main-context/filter-select-context'

import { SelectWrapper, SelectItemWrapper } from './style'
import SelectHotIcon from '@/assets/svg/select-hot-icon'
import SelectNewIcon from '@/assets/svg/select-new-icon'
import CorrectIcon from '@/assets/svg/correct-icon'

interface IProps {
  options: string[]
  closeSelect: () => void
}

const Select: FC<IProps> = memo(({ options, closeSelect }) => {
  const { currentStatusIndex, changeStatusIndex } = useFilterSelectContext()

  const checkSvg = (index: number) => {
    switch (index) {
      case 0:
        return <SelectHotIcon />
      case 1:
        return <SelectNewIcon />
    }
  }

  useEffect(() => {
    function handleWindowClick(event: MouseEvent) {
      event.stopPropagation()
      closeSelect()
    }
    window.document.addEventListener('click', handleWindowClick)

    return () => window.document.removeEventListener('click', handleWindowClick)
  }, [])

  return (
    <SelectWrapper>
      <div className="select">
        <div className="select-list">
          {options.map((item, index) => (
            <Fragment key={item}>
              <SelectItemWrapper
                currentIndex={currentStatusIndex}
                itemIndex={index}
              >
                <div className="select-item" onClick={() => changeStatusIndex(index)}>
                  <span className="select-item__sign-icon">{checkSvg(index)}</span>
                  <div className="select-item__text">{item}</div>
                  {
                    currentStatusIndex === index && (
                      <div className="select-item__correct-icon">
                        <CorrectIcon />
                      </div>
                    )
                  }
                </div>
              </SelectItemWrapper>
            </Fragment>
          ))}
        </div>
      </div>
    </SelectWrapper>
  )
})

export default Select
