import { memo, FC } from 'react'

import type { IArticle } from '@/store/article/type'

import { ArticleItemMainWrapper } from './style'
import CommentIcon from '@/assets/svg/comment-icon'
import CollectIcon from '@/components/common/collect-icon'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loveImage = require('@/assets/img/love.webp')

interface IProps {
  article: IArticle
}

const ArticleItemMain: FC<IProps> = memo(({ article }) => {
  const { title, pureText, commentTotal, likeTotal, firstImage, id } = article

  return (
    <ArticleItemMainWrapper>
      <div className="main">
        <div className="main-detail">
          <h2 className="title ms-overflow">{ title }</h2>
          <div className="content ms-overflow">{ pureText }</div>
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
              <CollectIcon
                width={20}
                height={20}
                articleId={id}
                isShowText={true}
                isHover={false}
              />
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
