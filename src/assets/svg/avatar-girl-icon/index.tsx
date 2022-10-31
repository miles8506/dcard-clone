import { memo, FC } from 'react'

interface IProps {
  width?: number
  height?: number
}


const AvatarGirlIcon: FC<IProps> = memo(({ width = 16, height = 16 }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      focusable="false"
      width={`${width}px`}
      height={`${height}px`}
      className="jsx-952c5c783df17c88 dcard-svg-icon"
    >
      <title>女</title>
      <path fill="#F48FB1" d="M40 20a20 20 0 1 1-40 0 20 20 0 0 1 40 0"></path>
      <path
        fill="#CB3A6B"
        d="M28.7 17.5a9.6 9.6 0 0 0-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 0 0-.7 1.1v.1a4.2 4.2 0 0 0-.4.8l-1.3 3.8a20 20 0 0 0 10.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 0 0-.2-3c.1-1 .2-2.2 0-3.3z"
      ></path>
    </svg>
  )
})

export default AvatarGirlIcon
