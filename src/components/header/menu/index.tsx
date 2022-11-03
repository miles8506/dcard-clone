import { memo, FC, MouseEvent } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'
import { MSSessionStore } from '@/utils'
import { useNavigate } from 'react-router-dom'

import { MenuWrapper } from './style'
import MenuItem from '../menu-item'

interface IProps {
  changeShowMenu: (event: MouseEvent<HTMLDivElement>, item?: string) => void
}

const Menu: FC<IProps> = memo(({ changeShowMenu }) => {
  const navigate = useNavigate()
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }), shallowEqual)
  const menuList = ['服務條款', '常見問題', '回報問題', '品牌識別', '徵才', '商業合作', '免費下載 App', '設定']

  const handleLogout = () => {
    MSSessionStore.removeItem('loginInfo')
    navigate('/main')
  }

  return (
    <MenuWrapper>
      <div className="menu">
        {menuList.map((item) => (
          <div
            key={item}
            onClick={(e: MouseEvent<HTMLDivElement>) => changeShowMenu(e, item)}
          >
            <MenuItem>{item}</MenuItem>
          </div>
        ))}
        { isLogin && <MenuItem><span onClick={handleLogout}>登出</span></MenuItem> }
      </div>
    </MenuWrapper>
  )
})

export default Menu
