import { memo } from 'react'

import { HeaderWrapper } from './style'
import Logo from '@/components/header/logo'
import Navigation from '@/components/header/navigation'
import SearchBar from '@/components/header/search-bar'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <Logo />
      <SearchBar />
      <Navigation
        isShowDownload={true}
        isShowFunctionBar={false}
        isShowLoginButton={true}
      />
    </HeaderWrapper>
  )
})

export default Header
