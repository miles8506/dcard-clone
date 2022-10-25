import { memo } from 'react'

import { HeaderWrapper } from './style'
import Logo from './logo'
import SearchBar from './search-bar'
import Navigation from './navigation'

const Header = memo(() => {
  return (
    <HeaderWrapper className="header">
      <Logo />
      <SearchBar />
      <Navigation />
    </HeaderWrapper>
  )
})

export default Header
