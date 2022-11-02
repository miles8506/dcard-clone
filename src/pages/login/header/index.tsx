import { memo } from 'react'

import { HeaderWrapper } from './style'
import Logo from '@/components/header/logo'
import Navigation from '@/components/header/navigation'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navigation
        isShowFunctionBar={false}
        isShowLoginButton={false}
        isShowDownload={false}
      />
    </HeaderWrapper>
  )
})

export default Header
