import { memo, FC, useEffect, SyntheticEvent, Fragment } from 'react'

import { SelectWrapper, SelectItemWrapper } from './style'
import SelectHotIcon from '@/assets/svg/select-hot-icon'
import SelectNewIcon from '@/assets/svg/select-new-icon'
import CorrectIcon from '@/assets/svg/correct-icon'

interface IProps {
  options: string[]
  currentIndex: number;
  closeSelect: () => void
  changeCurrentIndex: (index: number) => void
}

const Select: FC<IProps> = memo(({ options, currentIndex, closeSelect, changeCurrentIndex }) => {
  const checkSvg = (index: number) => {
    switch (index) {
      case 0:
        return <SelectHotIcon />
      case 1:
        return <SelectNewIcon />
    }
  }

  const handleItemClick = (index: number) => {
    changeCurrentIndex(index)
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
                currentIndex={currentIndex}
                itemIndex={index}
              >
                <div className="select-item" onClick={() => handleItemClick(index)}>
                  <span className="select-item__sign-icon">{checkSvg(index)}</span>
                  <div className="select-item__text">{item}</div>
                  {
                    currentIndex === index && (
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
