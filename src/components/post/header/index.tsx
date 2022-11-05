import { memo } from 'react'

import { HeaderWrapper } from './style'
import Logo from '@/components/header/logo'
import SearchBar from '@/components/header/search-bar'
import Navigation from '@/components/header/navigation'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <SearchBar />
        <Navigation
          isShowDownload={true}
          isShowLoginButton={false}
        />
      </div>
    </HeaderWrapper>
  )
})

export default Header
