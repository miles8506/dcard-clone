import { FC, memo } from 'react'

import type { IHotBoard } from '@/store/main/type'

import { useNavigate } from 'react-router-dom'

import { BoardBannerItemWrapper } from './style'

interface IProps {
  hotBoard: IHotBoard
}

const BoardBannerItem: FC<IProps> = memo(({ hotBoard }) => {
  const { name, imgUrl, bgImg, path } = hotBoard

  const navigate = useNavigate()

  return (
    <BoardBannerItemWrapper>
      <div className="board-item" onClick={() => navigate(`/main/${path}/all`)}>
        <div className="board-item-bg">
          <img src={bgImg} alt="" className="board-img" />
          <div className="board-logo">
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <div className="board-item-title">{name}</div>
        <div className="board-item-discussion ms-overflow">{ `這裡是專屬於${name}的版面` }</div>
      </div>
    </BoardBannerItemWrapper>
  )
})

export default BoardBannerItem
