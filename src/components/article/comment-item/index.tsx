import { FC, memo } from 'react'

import { IComment } from '@/store/article/type'
import { timeGap } from '@/utils'

import { CommentItemWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/assets/svg/love-icon'

interface IProps {
  comment: IComment
}

const CommentItem: FC<IProps> = memo(({ comment }) => {
  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={32} height={32} /> : <AvatarBoyIcon width={32} height={32} />

  return (
    <CommentItemWrapper>
      <div className="comment-item">
        <div className="avatar">{ getGender(0) }</div>
        <div className="main">
          <div className="main-header">
            <div className="main-header-account">{ comment.account }</div>
            <div className="main-header-like">
              <div className="icon">
              <LoveIcon />
              </div>
              <div className="amount">{ comment.likeAmount }</div>
            </div>
          </div>
          <div className="main-content">{ comment.content }</div>
          <div className="main-footer">
            <div className="floor">B{ comment.floor }</div>
            <div className="time-ago">{ timeGap(comment.timeAgo) }</div>
          </div>
        </div>
      </div>
    </CommentItemWrapper>
  )
})

export default CommentItem
