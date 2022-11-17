import { FC, memo } from 'react'

import { timeList } from '@/enum/main'

import { TimeMenuWrapper } from './style'
import MenuLayout from '@/components/common/menu-layout'
import MenuItem from '@/components/common/menu-item'

interface IProps {
  currentTimeItem: number
  changeCurrentTime: (value: number) => void
}

const TimeMenu: FC<IProps> = memo(({ currentTimeItem, changeCurrentTime }) => {
  return (
    <MenuLayout
      customStyle={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 30px',
        top: '57px',
        right: '-27px'
      }}
      trianglePosition="46%"
    >
      <TimeMenuWrapper>
        {
          timeList.map((item, index) => (
            <div key={item.id} onClick={() => changeCurrentTime(index)}>
              <MenuItem isShowCorrectIcon={currentTimeItem === index}>{item.name}</MenuItem>
            </div>
          ))
        }
      </TimeMenuWrapper>
    </MenuLayout>
  )
})

export default TimeMenu
