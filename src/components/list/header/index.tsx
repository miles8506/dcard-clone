import { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import { HeaderWrapper } from './style'
import Logo from '@/components/header/logo'
import SearchIcon from '@/assets/svg/search-icon/search'

const Header = memo(() => {
  const navigate = useNavigate()

  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <div
          className="header-search-icon"
          onClick={() => navigate('/search/synthesize')}
        >
          <SearchIcon width={24} height={24} />
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default Header
