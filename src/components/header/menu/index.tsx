import { memo, FC, MouseEvent } from 'react'

import type { ReduxDispatchType } from '@/store'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { ReduxStateType } from '@/store'
import { MSSessionStore } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { changeLoginStatus, emptyUserInfo } from '@/store/login'
import { LOGIN_INFO } from '@/constants'

import { MenuWrapper } from './style'
import MenuLayout from '@/components/common/menu-layout'
import MenuItem from '@/components/common/menu-item'

interface IProps {
  changeShowMenu: (event: MouseEvent<HTMLDivElement>, item?: string) => void
}

const Menu: FC<IProps> = memo(({ changeShowMenu }) => {
  const dispatch: ReduxDispatchType = useDispatch()
  const navigate = useNavigate()
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }), shallowEqual)
  const menuList = ['服務條款', '常見問題', '回報問題', '品牌識別', '徵才', '商業合作', '免費下載 App', '設定']

  const handleLogout = () => {
    MSSessionStore.removeItem(LOGIN_INFO)
    dispatch(changeLoginStatus(false))
    dispatch(emptyUserInfo())
    navigate('/main')
  }

  return (
    <MenuLayout>
      <MenuWrapper>
        <div className="menu">
          {
            menuList.map((item) => (
              <div
                key={item}
                onClick={(e: MouseEvent<HTMLDivElement>) => changeShowMenu(e, item)}
              >
                <MenuItem isMobile={false}>{item}</MenuItem>
              </div>
            ))
          }
          { isLogin && <MenuItem isMobile={false}><div onClick={handleLogout}>登出</div></MenuItem> }
        </div>
      </MenuWrapper>
    </MenuLayout>
  )
})

export default Menu
