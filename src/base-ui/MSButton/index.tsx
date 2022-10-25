import { memo, FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import styled from './style.module.scss'

import { Button, ButtonProps } from 'antd'

type MSButtonType = ButtonProps & PropsWithChildren

const MSButton: FC<MSButtonType> = memo(({ children, ...elseProps }) => {
  return (
    <Button
      {...elseProps}
      className={classNames([styled['ant-btn']])}
    >
      {children}
    </Button>
  )
})

export default MSButton
