import { memo, FC, PropsWithChildren } from 'react'

import { MenuItem, MenuItemProps } from '@mui/material'

const MSMenuItem: FC<PropsWithChildren<MenuItemProps>> = memo(({ children, ...elseProps }) => {
  return (
    <MenuItem {...elseProps} >{children}</MenuItem>
  )
})

export default MSMenuItem
