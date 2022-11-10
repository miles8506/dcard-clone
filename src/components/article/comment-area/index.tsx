import { memo } from 'react'
import CommentItem from '../comment-item'
import FilterBar from '../filter-bar'

import { CommentWrapper } from './style'

const CommentArea = memo(() => {
  return (
    <CommentWrapper>
      <div className="comment">
        <FilterBar />
        <div className="comment-total">共 80 則留言</div>
        <CommentItem />
      </div>
    </CommentWrapper>
  )
})

export default CommentArea
