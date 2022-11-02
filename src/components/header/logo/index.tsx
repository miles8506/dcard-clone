import { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import LogoSvg from '@/assets/svg/logo'
import { LogoWrapper } from './style'

const Logo = memo(() => {
  const navigate = useNavigate()

  return (
    <LogoWrapper>
      <div className="logo" onClick={() => navigate('/main')}>
        <LogoSvg />
      </div>
    </LogoWrapper>
  )
})

export default Logo
