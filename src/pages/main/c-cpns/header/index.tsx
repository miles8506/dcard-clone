import { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

import { HeaderWrapper } from './style'
import Logo from '@/components/header/logo'
import Navigation from '@/components/header/navigation'
import SearchBar from '@/components/header/search-bar'
import SearchIcon from '@/assets/svg/search-icon/search'

const Header = memo(() => {
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }), shallowEqual)

  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <SearchBar />
        <Navigation
          isShowDownload={true}
          isShowLoginButton={!isLogin}
        />
        <div className="mobile-search-icon">
          <SearchIcon />
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default Header
