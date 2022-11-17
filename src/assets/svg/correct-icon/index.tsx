import { memo, FC } from 'react'

interface IProps {
  width?: number
  height?: number
}

const CorrectIcon: FC<IProps> = memo(({ width = 18, height = 18 }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      role="img"
      aria-hidden="true"
      className="jsx-952c5c783df17c88 dcard-svg-icon"
      width={width}
      height={height}
    >
      <path d="M9 16.17 5.53 12.7a1 1 0 0 0-1.4 0h-.01a1 1 0 0 0 0 1.41L8.3 18.3a1 1 0 0 0 1.4 0L20.3 7.7a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0z"></path>
    </svg>
  )
})

export default CorrectIcon
