import { FC, memo } from 'react'

import { timeList } from '@/enum/main'

import { MobileTimeMenuWrapper } from './style'
import MenuItem from '@/components/common/menu-item'

interface IProps {
  currentTimeItem: number
  changeCurrentTime: (value: number) => void
}

const MobileTimeMenu: FC<IProps> = memo(({ currentTimeItem, changeCurrentTime }) => {
  return (
    <MobileTimeMenuWrapper>
      {timeList.map((item, index) => (
        <div key={item.id} onClick={() => changeCurrentTime(index)}>
          <MenuItem
            isShowCorrectIcon={currentTimeItem === index}
            isMobile={true}
          >
            {item.name}
          </MenuItem>
        </div>
      ))}
    </MobileTimeMenuWrapper>
  )
})

export default MobileTimeMenu
