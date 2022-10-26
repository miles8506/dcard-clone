import { memo, FC, PropsWithChildren } from 'react'

import { MSMenuWrapper } from './style'

interface IProps {
  isShowMenu: boolean
}

const MSMenu: FC<PropsWithChildren<IProps>> = memo(({ children, isShowMenu }) => {
  return (
    <MSMenuWrapper style={{}} isShowMenu={isShowMenu}>
      <div className="triangle-sign"></div>
      {children}
    </MSMenuWrapper>
  )
})

export default MSMenu
