import { memo, FC } from 'react'

import { ReduxStateType } from '@/store'
import { useSelector, shallowEqual } from 'react-redux'
import ArticleProvider, { useArticleContext } from '@/context/article-context'

import { ArticleWrapper } from './style'
import BottomBar from './bottom-bar'
import ArticleHeader from './header'
import ArticleMain from './main'
import InterestArea from './interest-area'
import CommentArea from './comment-area'

export interface IProps {
  onCancel: () => void
}

const Article: FC<IProps> = memo(({ onCancel }) => {
  const { article, articleList, hotBoardList, commentList } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article,
      articleList: state.article.articleList,
      hotBoardList: state.main.hotBoardList,
      commentList: state.article.commentList
    }),
    shallowEqual
  )

  const { articleRef } = useArticleContext()

  return (
    <ArticleWrapper>
      <div className="article" ref={articleRef}>
        <ArticleHeader onCancel={onCancel} />
        <ArticleMain article={article} hotBoardList={hotBoardList} />
        <InterestArea articleList={articleList} />
        <CommentArea commentList={commentList} />
        <BottomBar />
      </div>
    </ArticleWrapper>
  )
})

export default ArticleProvider(Article)
