import { memo } from 'react'

import { ReduxStateType } from '@/store'
import { useSelector, shallowEqual } from 'react-redux'

import { ArticleMainWrapper } from './style'
import BottomBar from '../bottom-bar'

const ArticleMain = memo(() => {
  const { article, hotBoardList } = useSelector((state: ReduxStateType) => ({
    article: state.main.article,
    hotBoardList: state.main.hotBoardList
  }), shallowEqual)

  return (
    <ArticleMainWrapper>
      <div className="article-main">
        <h2 className="article-main-title">{article.title}</h2>
        <div className="article-main-info">
          <div className="article-main-info-sort">
            {hotBoardList[article.sort].name}
          </div>
          <span className="article-main-info-division">·</span>
          <div className="article-main-info-date">{article.date}</div>
        </div>
        <div className="article-main-content">
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>
      </div>
    </ArticleMainWrapper>
  )
})

export default ArticleMain
