import { FC, memo } from 'react'

import type { IArticle } from '@/store/post/type'

import { InterestItemWrapper } from './style'



const InterestItem: FC<{ article: IArticle }> = memo(({ article }) => {
  const { title, likeTotal, commentTotal, firstImage } = article

  return (
    <InterestItemWrapper>
      <div className="interest-item">
        <div className="interest-item-info">
          <div className="title">
            <div className="text">{ title }</div>
          </div>
          <div className="detail">
            <span className="emotion">心情 { likeTotal }</span>
            <span className="comment">留言 { commentTotal }</span>
          </div>
        </div>
        <div className="interest-item-img">
          { firstImage && <img src={firstImage} /> }
        </div>
      </div>
    </InterestItemWrapper>
  )
})

export default InterestItem
