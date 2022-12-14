import { memo } from 'react'

import type { IArticle } from '@/store/article/type'

import { ArticleMainWrapper } from './style'
import CollectIcon from '@/components/common/collect-icon'
import { IHotBoard } from '@/store/main/type'
import LoveIcon from '@/components/common/love-icon'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loveImg = require('@/assets/img/love.webp')

interface IProps {
  article: IArticle
  hotBoardList: IHotBoard[]
}

const ArticleMain = memo<IProps>(({ article, hotBoardList }) => {
  const { likeTotal, commentTotal, id } = article

  return (
    <ArticleMainWrapper>
      <div className="article-main">
        <h2 className="article-main-title">{ article.title }</h2>
        <div className="article-main-info">
          <div className="article-main-info-sort">
            { hotBoardList[article.sort].name }
          </div>
          <span className="article-main-info-division">·</span>
          <div className="article-main-info-date">{article.date}</div>
        </div>
        <div className="article-main-content">
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>
        <div className="article-main-function-bar">
          <div className="detail">
            <div className="emotion-img">
              <img src={loveImg} alt="" />
            </div>
            <span>{likeTotal}・留言 { commentTotal }</span>
          </div>
          <div className="operation">
            <LoveIcon />
            <CollectIcon
              width={24}
              height={24}
              articleId={id}
            />
          </div>
        </div>
      </div>
    </ArticleMainWrapper>
  )
})

export default ArticleMain
