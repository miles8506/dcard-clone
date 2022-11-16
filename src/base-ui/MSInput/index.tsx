import { memo, FC, ChangeEvent, Dispatch, SetStateAction } from 'react'

import style from './style.module.scss'
import classNames from 'classnames'

import { Input, InputProps } from 'antd'

interface IProps extends InputProps {
  setValue: Dispatch<SetStateAction<any>>
}

const MSInput: FC<IProps> = memo(({ setValue, ...elseProps  }, ref) => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Input
      ref={ref}
      { ...elseProps }
      onChange={onChangeValue}
      className={classNames([style['ant-input']])}
    />
  )
})

export default MSInput
