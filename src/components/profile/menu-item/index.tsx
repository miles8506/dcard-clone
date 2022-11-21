import { FC, memo, PropsWithChildren, ReactNode } from 'react'

import { useNavigate } from 'react-router-dom'

import { MenuItemWrapper } from './style'

interface IProps {
  customColor: string
  path: string
  isActive: boolean
}

const MenuItem: FC<PropsWithChildren<IProps>> = memo(({ children, customColor, path, isActive }) => {
  const navigate = useNavigate()

  const handleItemClick = (path: string) => navigate(`/profile/${path}`)

  return (
    <MenuItemWrapper
      customColor={customColor}
      isActive={isActive}
      onClick={() => handleItemClick(path)}
    >
      <div className="menu-item">
        <div className="menu-item-icon">{ (children as ReactNode[])[0] }</div>
        <div className="menu-item-text">{ (children as ReactNode[])[1] }</div>
      </div>
    </MenuItemWrapper>
  )
})

export default MenuItem
