import { FC, Fragment, memo } from 'react'

import { IComment } from '@/store/article/type'

import { CommentWrapper } from './style'
import CommentItem from '../comment-item'
import FilterBar from '../filter-bar'

interface IProps {
  commentList: IComment[]
}

const CommentArea: FC<IProps> = memo(({ commentList }) => {
  return (
    <CommentWrapper>
      <div className="comment">
        <FilterBar />
        <div className="comment-total">共 { commentList?.length } 則留言</div>
        {
          commentList.map(item => (
            <Fragment key={item.timeAgo}>
              <CommentItem comment={item} />
            </Fragment>
          ))
        }
      </div>
    </CommentWrapper>
  )
})

export default CommentArea
