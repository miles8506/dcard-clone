import { FC, memo } from 'react'

import CircleCancelIcon from '@/assets/svg/circle-cancel-icon'

import { DelValueWrapper } from './style'

interface IProps {
  width?: number
  height?: number
  handleClick: () => void
}

const DelValueIcon: FC<IProps> = memo(
  ({ width = 18, height = 18, handleClick }) => {
    return (
      <DelValueWrapper onClick={() => handleClick()}>
        <CircleCancelIcon width={width} height={height} />
      </DelValueWrapper>
    )
  }
)

export default DelValueIcon
