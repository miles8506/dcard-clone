import { memo } from 'react'

import LogoSvg from '@/assets/svg/logo'

import { LogoWrapper } from './style'

const Logo = memo(() => {
  return (
    <LogoWrapper>
      <LogoSvg />
    </LogoWrapper>
  )
})

export default Logo
