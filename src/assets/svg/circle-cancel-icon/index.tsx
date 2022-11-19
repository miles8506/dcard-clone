import { FC, memo } from 'react'

interface IProps {
  width?: number
  height?: number
}

const CircleCancelIcon: FC<IProps> = memo(({ width = 18, height = 18 }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      focusable="false"
      role="img"
      aria-hidden="true"
      className="jsx-952c5c783df17c88 dcard-svg-icon"
      width={width}
      height={height}
    >
      <path d="M16.8 9a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 1.8 9a7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 1 16.8 9zm-6.44 0 2.47-2.47a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L9.3 7.94 6.83 5.47a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06L8.24 9l-2.47 2.47a.75.75 0 0 0 0 1.06.75.75 0 0 0 .53.22.75.75 0 0 0 .53-.22l2.47-2.47 2.47 2.47a.75.75 0 0 0 .53.22.75.75 0 0 0 .53-.22.75.75 0 0 0 0-1.06z"></path>
    </svg>
  )
})

export default CircleCancelIcon
