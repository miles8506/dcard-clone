import { memo, FC } from 'react'

import { ReduxStateType } from '@/store'
import { useSelector, shallowEqual } from 'react-redux'

import { ArticleWrapper } from './style'
import BottomBar from './bottom-bar'
import ArticleHeader from './header'
import ArticleMain from './main'
import InterestArea from './interest-area'
import CommentArea from './comment-area'

interface IProps {
  onCancel: () => void
}

const Article: FC<IProps> = memo(({ onCancel }) => {
  const { article, articleList, hotBoardList, commentList } = useSelector((state: ReduxStateType) => ({
    article: state.article.article,
    articleList: state.article.articleList,
    hotBoardList: state.main.hotBoardList,
    commentList: state.article.commentList
  }), shallowEqual)

  return (
    <ArticleWrapper>
      <div className="article">
        <ArticleHeader onCancel={onCancel} />
        <ArticleMain
          article={article}
          hotBoardList={hotBoardList}
        />
        <InterestArea articleList={articleList} />
        <CommentArea commentList={commentList} />
        <BottomBar />
      </div>
    </ArticleWrapper>
  )
})

export default Article
