import { memo, FC, PropsWithChildren } from 'react'

import classNames from 'classnames'

import { MenuItemWrapper } from './style'
import CorrectIcon from '@/assets/svg/correct-icon'

interface IProps {
  isShowCorrectIcon?: boolean
}

const MenuItem: FC<PropsWithChildren<IProps>> = memo(({ children, isShowCorrectIcon = false }) => {
  return (
    <MenuItemWrapper isShowCorrectIcon={isShowCorrectIcon}>
      <div className="menu-item">
        <div className={classNames(['text', isShowCorrectIcon ? 'active-text' : ''])}>{children}</div>
        <div className="icon">
          { isShowCorrectIcon && <CorrectIcon /> }
        </div>
      </div>
    </MenuItemWrapper>
  )
})

export default MenuItem
