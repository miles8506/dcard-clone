import { memo, FC, PropsWithChildren } from 'react'

import { MSMenuItemWrapper } from './style'

const MSMenuItem: FC<PropsWithChildren> = memo(({ children }) => {
  return (
    <MSMenuItemWrapper>
      {children}
    </MSMenuItemWrapper>
  )
})

export default MSMenuItem
