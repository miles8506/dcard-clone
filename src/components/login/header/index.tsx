import { memo } from 'react'

import { HeaderWrapper } from './style'
import Logo from '@/components/header/logo'
import Navigation from '@/components/header/navigation'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <Navigation
          isShowDownload={false}
          isShowLoginButton={false}
        />
      </div>
    </HeaderWrapper>
  )
})

export default Header
