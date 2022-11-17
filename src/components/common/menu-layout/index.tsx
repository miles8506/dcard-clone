import { memo, FC, PropsWithChildren, CSSProperties } from 'react'

import { MenuLayoutWrapper } from './style'

interface IProps {
  customStyle?: CSSProperties
  trianglePosition?: string
  triangleTranslateX?: string
}

const MenuLayout: FC<PropsWithChildren<IProps>> = memo(({ children, customStyle = {}, trianglePosition = '10px', triangleTranslateX = '0' }) => {
  return (
    <MenuLayoutWrapper
      style={{
      ...customStyle
      }}
      trianglePosition={trianglePosition}
      triangleTranslateX={triangleTranslateX}
    >
      { children }
    </MenuLayoutWrapper>
  )
})

export default MenuLayout
