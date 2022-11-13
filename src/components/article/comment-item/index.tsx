import { FC, memo } from 'react'

import type { ReduxStateType } from '@/store'

import { IComment } from '@/store/article/type'
import { timeGap } from '@/utils'
import { useSelector, shallowEqual } from 'react-redux'
import { useChangeCommentLikeStatus } from '@/hooks/use-status'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '@/hooks/use-auth'

import { CommentItemWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/assets/svg/love-icon'
// import LoveIcon from '@/components/common/love-icon'

interface IProps {
  comment: IComment
  floor: number
}

const CommentItem: FC<IProps> = memo(({ comment, floor }) => {
  const { article, userInfo } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article,
      userInfo: state.login.userInfo
    }),
    shallowEqual
  )

  const navigate = useNavigate()

  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={32} height={32} /> : <AvatarBoyIcon width={32} height={32} />

  const handleLickIconClick = () => {
    const _isAuth = isAuth()
    if (!_isAuth) return navigate('/login')

    const { _userInfo, isAdd } = useChangeCommentLikeStatus(comment.timeAgo, userInfo)
    console.log( _userInfo )
  }

  return (
    <CommentItemWrapper>
      <div className="comment-item">
        <div className="avatar">{ getGender(article.gender) }</div>
        <div className="main">
          <div className="main-header">
            <div className="main-header-account">{ comment.account }</div>
            <div className="main-header-like">
              <div className="like-icon" onClick={handleLickIconClick}>
                <LoveIcon />
              </div>
              <div className="amount">{ comment.likeAmount }</div>
            </div>
          </div>
          <div className="main-content">{ comment.content }</div>
          <div className="main-footer">
            <div className="floor">B{ floor + 1 }</div>
            <div className="time-ago">{ timeGap(comment.timeAgo) }</div>
          </div>
        </div>
      </div>
    </CommentItemWrapper>
  )
})

export default CommentItem
