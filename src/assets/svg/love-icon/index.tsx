import { FC, memo } from 'react'

interface IProps {
  width?: number
  height?: number
}

const LoveIcon: FC<IProps> = memo(({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
      role="img"
      aria-hidden="true"
      className="jsx-952c5c783df17c88 undefined dcard-svg-icon"
      width={width}
      height={height}
    >
      <path
        d="M16.5 4A5.49 5.49 0 0 0 12 6.344 5.49 5.49 0 0 0 7.5 4 5.5 5.5 0 0 0 2 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0 0 16.5 4z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
})

export default LoveIcon
