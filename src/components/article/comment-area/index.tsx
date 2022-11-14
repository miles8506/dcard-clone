import { FC, Fragment, memo } from 'react'

import type { ICommentResponse, IComment } from '@/store/article/type'
import type { ReduxStateType } from '@/store'

import { useSelector, shallowEqual } from 'react-redux'
import { useArticleContext } from '@/context/article-context'
import { ArticleFilter } from '@/enum'

import { CommentWrapper } from './style'
import CommentItem from '../comment-item'
import FilterBar from '../filter-bar'

interface IProps {
  commentList: ICommentResponse
}

const CommentArea: FC<IProps> = memo(({ commentList }) => {
  const { article } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article
    }),
    shallowEqual
  )

  const { filterSort } = useArticleContext()

  const filterCommentList = (commentList: IComment[]) => {
    switch (filterSort) {
      case ArticleFilter.hot:
        return commentList?.slice()?.sort((a, b) => b.likeAmount - a.likeAmount)
      case ArticleFilter.time:
        return commentList?.slice()?.sort((a, b) => a.timeAgo - b.timeAgo)
      default:
        return commentList
    }
  }

  return (
    <CommentWrapper>
      <div className="comment">
        <FilterBar />
        <div className="comment-total">共 { article.commentTotal } 則留言</div>
        {
          filterCommentList(commentList?.comment)?.map(item => (
            <Fragment key={item.timeAgo}>
              <CommentItem
                comment={item}
                commentListId={commentList.id}
              />
            </Fragment>
          ))
        }
      </div>
    </CommentWrapper>
  )
})

export default CommentArea
