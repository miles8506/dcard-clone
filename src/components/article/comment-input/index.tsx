import { FC, memo, useState, ChangeEvent } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'
import type { IRequestComment } from '@/store/article/type'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { requestCommentList, setCommentList } from '@/store/article/async-thunk'
import { isAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { MSSessionStore, getCurrentTimeStamp } from '@/utils'
import { useArticleContext } from '@/context/article-context'
import { setQuery } from '@/api'
import { requestArticle } from '@/store/article/async-thunk'

import { CommentInputWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import MSButton from '@/base-ui/MSButton'

interface IProps {
  changeIsShowDisplayArea: (value: boolean) => void
}

const CommentInput: FC<IProps> = memo(({ changeIsShowDisplayArea }) => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { article, commentList } = useSelector((state: ReduxStateType) => ({
    article: state.article.article,
    commentList: state.article.commentList
  }), shallowEqual)

  const navigation = useNavigate()

  const { articleRef } = useArticleContext()

  const [commentValue, setCommentValue] = useState('')
  const changeCommentValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.target.value)
  }

  const handSendMessage = async() => {
    const _isAuth = isAuth()
    if (!_isAuth) return navigation('/login')

    const { account, gender } = MSSessionStore.getItem('loginInfo')
    await dispatch(requestCommentList(article.id))
    const timeStamp = getCurrentTimeStamp()
    const request: IRequestComment = {
      id: timeStamp,
      account,
      content: commentValue.trim(),
      gender,
      likeAmount: 0,
      timeAgo: timeStamp,
      floor: commentList.comment.length + 1
    }
    await dispatch(setCommentList({ articleId: article.id, request }))
    await dispatch(requestCommentList(article.id))
    await setQuery('post', article.id.toString(), Object.assign({}, {
      ...article,
      commentTotal: article.commentTotal + 1
    }))
    await dispatch(requestArticle(article.id))
    articleRef.current?.scrollTo(0, articleRef.current?.scrollHeight as number)
    changeIsShowDisplayArea(true)
  }

  const getGender = (value: number) =>
    value === 0 ? <AvatarGirlIcon width={28} height={28} /> : <AvatarBoyIcon width={28} height={28} />

  return (
    <CommentInputWrapper>
      <div className="comment-input">
        <div className="comment-input-top">
          <div className="avatar">{ getGender(article.gender) }</div>
          <div className="info">
            <div className="account">123@gmail.com</div>
            <div className="detail">
              <span className="floor">B302</span>
              <span className="date">11月12日 12:12</span>
            </div>
          </div>
        </div>
        <div className="comment-input-main">
          <textarea
            className='main-input'
            placeholder='留言前請詳閱全站戰規本板板規'
            value={commentValue}
            onInput={(event: ChangeEvent<HTMLTextAreaElement>) => changeCommentValue(event)}
          />
        </div>
        <div className="comment-input-bottom">
          <MSButton
            sx={{
              padding: '9px 8px',
              color: 'rgba(0, 0, 0, 0.5)'
            }}
            onClick={() => changeIsShowDisplayArea(true)}
          >取消</MSButton>
          <MSButton
            msDisabled={commentValue.length === 0 ? 'disabled' : ''}
            bgHoverColor={commentValue.length > 0 ? '#5ab0db' : 'none'}
            sx={{
              padding: '9px 16px',
              color: '#fff',
              backgroundColor: commentValue.length === 0 ? 'rgba(0, 0, 0, 0.5)' : '#3397CF',
              marginLeft: '16px'
            }}
            onClick={handSendMessage}
          >
            送出
          </MSButton>
        </div>
      </div>
    </CommentInputWrapper>
  )
})

export default CommentInput
