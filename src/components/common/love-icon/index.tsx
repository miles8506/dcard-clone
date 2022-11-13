import { FC, memo } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { findArticleLoveIndex, useChangeArticleLikeStatus, useChangeCommentLikeStatus } from '@/hooks/use-status'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '@/hooks/use-auth'
import { setQuery } from '@/api'
import { requestUserInfo } from '@/store/login/async-thunk'
import { requestArticle } from '@/store/article/async-thunk'

import { LoveIconWrapper } from './style'
import { default as SVGLoveIcon } from '@/assets/svg/love-icon'

const LoveIcon = memo(() => {
  const { userInfo, article } = useSelector((state: ReduxStateType) => ({
    userInfo: state.login.userInfo,
    article: state.article.article
  }), shallowEqual)
  const dispatch: ReduxDispatchType = useDispatch()

  const navigate = useNavigate()

  const changeLikeStatus = async () => {
    const _isAuth = isAuth()
    if (!_isAuth) return navigate('/login')

      const { _userInfo, isAdd } = useChangeArticleLikeStatus(article.id, userInfo)
      await setQuery('user', _userInfo.account, _userInfo)
      await dispatch(requestUserInfo())
      await setQuery('post', article.id.toString(), Object.assign({}, {
        ...article,
        likeTotal: isAdd ? article.likeTotal + 1 : article.likeTotal - 1
      }))
      await dispatch(requestArticle(article.id))
  }

  return (
    <LoveIconWrapper>
      <div
        className={classNames([
          'love-icon',
          findArticleLoveIndex(article.id, userInfo) !== -1 ? 'active-love-icon' : ''
        ])}
        onClick={changeLikeStatus}
      >
        <SVGLoveIcon />
      </div>
    </LoveIconWrapper>
  )
})

export default LoveIcon
