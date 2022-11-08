import { memo, FC } from 'react'

import type { IArticle } from '@/store/post/type'

import { ArticleItemMainWrapper } from './style'
import CommentIcon from '@/assets/svg/comment-icon'
import CollectIcon from '@/assets/svg/collect-icon'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loveImage = require('@/assets/img/love.webp')

interface IProps {
  article: IArticle
}

const ArticleItemMain: FC<IProps> = memo(({ article }) => {
  const { title, pureText, commentTotal, likeTotal, firstImage } = article

  return (
    <ArticleItemMainWrapper>
      <div className="main">
        <div className="main-detail">
          <h2 className="title">{ title }</h2>
          <div className="content">{ pureText }</div>
          <div className="footer">
            <div className="emotion">
              <img src={ loveImage } />
              <div className="amount">{ likeTotal }</div>
            </div>
            <div className="comment">
              <div className="comment-icon">
                <CommentIcon />
              </div>
              <div className="amount">{ commentTotal }</div>
            </div>
            <div className="collect">
              <div className="collect-icon">
                <CollectIcon />
              </div>
              <div className="collect-text">收藏</div>
            </div>
          </div>
        </div>
        {
          firstImage &&
          (
            <div className="main-img">
              <img src={firstImage} alt="" />
            </div>
          )
        }
      </div>
    </ArticleItemMainWrapper>
  )
})

export default ArticleItemMain
