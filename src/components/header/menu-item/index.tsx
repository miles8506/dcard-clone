import { memo, FC, PropsWithChildren } from 'react'

import { MenuItemWrapper } from './style'

const MenuItem: FC<PropsWithChildren> = memo(({ children }) => {
  return (
    <MenuItemWrapper>
      {children}
    </MenuItemWrapper>
  )
})

export default MenuItem
