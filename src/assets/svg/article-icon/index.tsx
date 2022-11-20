import { FC, memo } from 'react'

interface IProps {
  width?: number
  height?: number
}

const ArticleIcon: FC<IProps> = memo(({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      width={width}
      height={height}
      role="img"
      aria-hidden="true"
      className="jsx-952c5c783df17c88 dcard-svg-icon"
    >
      <path
        d="M20 4v16a2.006 2.006 0 0 1-2 2H6a2.006 2.006 0 0 1-2-2V9h5a2 2 0 0 0 2-2V2h7a2.006 2.006 0 0 1 2 2zM9 2 4 7h4.5a.5.5 0 0 0 .5-.5zM7 16.5l-.852 2.981a.3.3 0 0 0 .371.37L9.5 19l7-7L14 9.5zm11.293-7.707-1.086-1.086a1 1 0 0 0-1.414 0L15 8.5l2.5 2.5.793-.793a1 1 0 0 0 0-1.414z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
})

export default ArticleIcon
