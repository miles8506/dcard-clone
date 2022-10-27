import { memo, FC, MouseEvent } from 'react'

import { MenuWrapper } from './style'
import MenuItem from '../menu-item'

interface IProps {
  changeShowMenu: (event: MouseEvent<HTMLDivElement>, item?: string) => void
}

const Menu: FC<IProps> = memo(({ changeShowMenu }) => {
  const menuList = ['服務條款', '常見問題', '回報問題', '品牌識別', '徵才', '商業合作', '免費下載 App', '設定']

  return (
    <MenuWrapper>
      <div className="menu">
        <div className="triangle-sign"></div>
        {menuList.map((item) => (
          <div
            key={item}
            onClick={(e: MouseEvent<HTMLDivElement>) => changeShowMenu(e, item)}
          >
            <MenuItem>{item}</MenuItem>
          </div>
        ))}
      </div>
    </MenuWrapper>
  )
})

export default Menu
