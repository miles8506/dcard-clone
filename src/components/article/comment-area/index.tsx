import { FC, Fragment, memo } from 'react'

import type { IComment } from '@/store/article/type'
import type { ReduxStateType } from '@/store'

import { useSelector, shallowEqual } from 'react-redux'

import { CommentWrapper } from './style'
import CommentItem from '../comment-item'
import FilterBar from '../filter-bar'

interface IProps {
  commentList: IComment[]
}

const CommentArea: FC<IProps> = memo(({ commentList }) => {
  const { article } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article
    }),
    shallowEqual
  )

  return (
    <CommentWrapper>
      <div className="comment">
        <FilterBar />
        <div className="comment-total">共 { article.commentTotal } 則留言</div>
        {
          commentList?.map((item, index) => (
            <Fragment key={item.timeAgo}>
              <CommentItem comment={item} floor={index} />
            </Fragment>
          ))
        }
      </div>
    </CommentWrapper>
  )
})

export default CommentArea
