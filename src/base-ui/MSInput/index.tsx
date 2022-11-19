import {
  memo,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  forwardRef
} from 'react'

import style from './style.module.scss'
import classNames from 'classnames'

import { Input, InputProps, InputRef } from 'antd'
import { CSSProperties } from 'styled-components'

interface IProps extends InputProps {
  setValue: Dispatch<SetStateAction<any>>
  sx?: CSSProperties
}

const MSInput = memo(
  forwardRef<InputRef, IProps>(({ setValue, sx, ...elseProps }, ref) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    return (
      <Input
        ref={ref}
        {...elseProps}
        onChange={onChangeValue}
        className={classNames([style['ant-input']])}
        style={sx}
      />
    )
  })
)

export default MSInput
