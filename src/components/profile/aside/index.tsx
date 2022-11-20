import { memo } from 'react'

import { AsideWrapper } from './style'
import Avatar from '../avatar'
import Menu from '../menu'

const Aside = memo(() => {
  return (
    <AsideWrapper>
      <Avatar />
      <Menu />
    </AsideWrapper>
  )
})

export default Aside
