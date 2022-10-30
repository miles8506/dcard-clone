import { memo, FC } from 'react'

interface IProps {
  width?: string
  height?: string
}

const ArrowDownIcon: FC<IProps> = memo(({ width = '24px', height = '24px' }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        role="img"
        aria-hidden="true"
        className="jsx-952c5c783df17c88 dcard-svg-icon"
        width={width}
        height={height}
      >
        <path d="m11.08 15.62-4.69-4.69a1.31 1.31 0 0 1 .92-2.24h9.38a1.31 1.31 0 0 1 .92 2.24l-4.69 4.69a1.3 1.3 0 0 1-1.84 0z"></path>
      </svg>
    </>
  )
})

export default ArrowDownIcon
