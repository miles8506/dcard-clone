import { FC, memo } from 'react'

interface IProps {
  width?: number
  height?: number
}

const AvatarBoyIcon: FC<IProps> = memo(({ width = 16, height = 16 }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      focusable="false"
      width={`${width}px`}
      height={`${height}px`}
      className="jsx-952c5c783df17c88 dcard-svg-icon"
    >
      <title>男</title>
      <path fill="#81D4FA" d="M40 20a20 20 0 1 1-40 0 20 20 0 0 1 40 0"></path>
      <path
        fill="#2490BF"
        d="M16 7.9C12.4 7.4 9.3 6 9.3 6s5.5 4.3 5 5.3c-.4 1-4.2 0-4.2 0l4 2a9.7 9.7 0 0 0-1.5 4.6l.1 3.4a1.5 1.5 0 1 0 .8 2.9 8.3 8.3 0 0 0 6.2 5.3c.6 0 .6 2 .6 3.2-1.6 1-2.5 3-2 5v2.2a20.2 20.2 0 0 0 9.9-1.6l-.7-2.7v-.4l-.2-.4-.2-.4-.2-.3-.2-.3c-.7-1-1.7-1.6-2.9-1.8l.6-2.3s1.4-1 3-2.6l.4 1.3 1.4-2.5.9-1.8s3.8-10.3.8-13.9c-2.6-3-11-1.9-14.7-2.3"
      ></path>
    </svg>
  )
})

export default AvatarBoyIcon
