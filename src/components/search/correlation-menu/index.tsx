import { FC, memo } from 'react'

import { correlationList } from '@/enum/main'

import { CorrelationMenuWrapper } from './style'
import MenuLayout from '@/components/common/menu-layout'
import MenuItem from '@/components/common/menu-item'

interface IProps {
  currentCorrelationItem: number
  changeCurrentCorrelation: (value: number) => void
}

const CorrelationMenu: FC<IProps> = memo(({ currentCorrelationItem, changeCurrentCorrelation }) => {
  return (
    <MenuLayout
      customStyle={{
        transform: 'translateX(35%)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 30px',
        top: '57px',
        right: '23px'
      }}
      trianglePosition="45%"
    >
      <CorrelationMenuWrapper>
        {
          correlationList.map((item, index) => (
            <div key={item.id} onClick={() => changeCurrentCorrelation(index)}>
              <MenuItem isShowCorrectIcon={currentCorrelationItem === index}>{item.name}</MenuItem>
            </div>
          ))
        }
      </CorrelationMenuWrapper>
    </MenuLayout>
  )
})

export default CorrelationMenu
