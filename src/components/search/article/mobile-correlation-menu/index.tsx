import { memo, FC } from 'react'

import { correlationList } from '@/enum/main'

import { MobileCorrelationMenuWrapper } from './style'
import MenuItem from '@/components/common/menu-item'

interface IProps {
  currentCorrelationItem: number
  changeCurrentCorrelation: (value: number) => void
}

const MobileCorrelationMenu: FC<IProps> = memo(
  ({ currentCorrelationItem, changeCurrentCorrelation }) => {
    return (
      <MobileCorrelationMenuWrapper>
        {correlationList.map((item, index) => (
          <div
            key={item.id}
            onClick={() => changeCurrentCorrelation(index)}
          >
            <MenuItem
              isShowCorrectIcon={currentCorrelationItem === index}
              isMobile={true}
            >
              {item.name}
            </MenuItem>
          </div>
        ))}
      </MobileCorrelationMenuWrapper>
    )
  }
)

export default MobileCorrelationMenu
