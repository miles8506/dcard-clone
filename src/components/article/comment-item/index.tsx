import { FC, memo } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'
import type { IComment, ICommentResponse } from '@/store/article/type'

import classNames from 'classnames'
import { deepCopy, timeGap } from '@/utils'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useChangeCommentLikeStatus } from '@/hooks/use-status'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '@/hooks/use-auth'
import { requestUserInfo } from '@/store/login/async-thunk'
import { requestCommentList } from '@/store/article/async-thunk'
import { setQuery } from '@/api'
import useWindowRWD from '@/hooks/use-window-rwd'

import { CommentItemWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/assets/svg/love-icon'

interface IProps {
  comment: IComment
  commentListId: number
}

const CommentItem: FC<IProps> = memo(({ comment, commentListId }) => {
  const { article, userInfo, commentList } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article,
      userInfo: state.login.userInfo,
      commentList: state.article.commentList
    }),
    shallowEqual
  )
  const dispatch: ReduxDispatchType = useDispatch()

  const navigate = useNavigate()

  const { size } = useWindowRWD()

  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={32} height={32} /> : <AvatarBoyIcon width={32} height={32} />

  const handleLickIconClick = async () => {
    const _isAuth = isAuth()
    if (!_isAuth) return navigate('/login')

    const { _userInfo, isAdd } = useChangeCommentLikeStatus(comment.id, userInfo)
    const _commentList: ICommentResponse = deepCopy(commentList)
    const targetComment = _commentList.comment.find(item => item.id === comment.id)
    if (targetComment?.likeAmount !== undefined) {
      isAdd ? targetComment.likeAmount++ : targetComment.likeAmount--
    }
    await setQuery('user', _userInfo.account, _userInfo)
    await dispatch(requestUserInfo())
    await setQuery('comment', commentListId.toString(), _commentList)
    await dispatch(requestCommentList(commentListId))
  }

  const isLikeComment = () => userInfo?.commentLikeList?.some(item => item === comment.id)

  return (
    <CommentItemWrapper>
      <div className="comment-item">
        <div className="avatar">{ getGender(comment.gender) }</div>
        <div className="main">
          <div className="main-header">
            <div className="main-header-account">{ comment.account }</div>
            <div className="main-header-like">
              <div
                className={classNames(['like-icon', isLikeComment() ? 'active-like-icon' : ''])}
                onClick={handleLickIconClick}
              >
                <LoveIcon
                  width={size.width <= 767 ? 18 : 24}
                  height={size.width <= 767 ? 18 : 24}
                />
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
