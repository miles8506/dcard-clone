import { memo, FC, PropsWithChildren } from 'react'

import { Tabs , TabsProps } from '@mui/material'

const MSTabs: FC<PropsWithChildren<TabsProps>> = memo(({ children, ...elseProps }) => {
  return (
    <Tabs {...elseProps}>
      {children}
    </Tabs>
  )
})

export default MSTabs
