import { FC, memo } from 'react'

interface IProps {
  width?: number
  height?: number
}

const CloseIcon: FC<IProps> = memo(({ width = 24, height = 24 }) => {
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
        <path d="m13.2 12 5.6-5.6a.4.4 0 0 0 0-.6l-.6-.6a.4.4 0 0 0-.6 0L12 10.8 6.4 5.2a.4.4 0 0 0-.6 0l-.6.6a.4.4 0 0 0 0 .6l5.6 5.6-5.6 5.6a.4.4 0 0 0 0 .6l.6.6a.4.4 0 0 0 .6 0l5.6-5.6 5.6 5.6a.4.4 0 0 0 .6 0l.6-.6a.4.4 0 0 0 0-.6z"></path>
      </svg>
    </>
  )
})

export default CloseIcon
