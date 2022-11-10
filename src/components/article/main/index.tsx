import { memo } from 'react'

import { ReduxStateType } from '@/store'
import { useSelector, shallowEqual } from 'react-redux'

import { ArticleMainWrapper } from './style'
import LoveIcon from '@/assets/svg/love-icon'
import CollectIcon from '@/assets/svg/collect-icon'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loveImg = require('@/assets/img/love.webp')

const ArticleMain = memo(() => {
  const { article, hotBoardList } = useSelector((state: ReduxStateType) => ({
    article: state.main.article,
    hotBoardList: state.main.hotBoardList
  }), shallowEqual)
  const { likeTotal, commentTotal } = article

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
            <div className="love-icon">
              <LoveIcon />
            </div>
            <div className="collect-icon">
              <CollectIcon width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </ArticleMainWrapper>
  )
})

export default ArticleMain
