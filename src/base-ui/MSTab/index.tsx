import { FC, memo, PropsWithChildren } from 'react'

import { MSTabWrapper } from './style'
import MSTabProvider from './tab-context'

export interface IProps {
  value: string | number | null
  onChange: null | ((newValue: any) => void)
}

const MSTab: FC<PropsWithChildren> = memo(({ children }) => {
  return <MSTabWrapper>{children}</MSTabWrapper>
})

export default MSTabProvider(MSTab)
