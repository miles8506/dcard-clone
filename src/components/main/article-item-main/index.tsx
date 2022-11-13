import { memo, FC, MouseEvent } from 'react'

import type { IArticle } from '@/store/article/type'
// import type { ReduxStateType, ReduxDispatchType } from '@/store'
// import type { IUserInfo } from '@/store/login/type'

// import { setQuery } from '@/api'
// import { isAuth } from '@/hooks/use-auth'
// import { useSelector, shallowEqual, useDispatch } from 'react-redux'
// import { findCollectIndex } from '@/hooks/use-status'
// import { useNavigate } from 'react-router-dom'
// import { useChangeCollectStatus } from '@/hooks/use-status'
// import { requestUserInfo } from '@/store/login/async-thunk'

import { ArticleItemMainWrapper } from './style'
import CommentIcon from '@/assets/svg/comment-icon'
// import CollectIcon from '@/assets/svg/collect-icon'
import CollectIcon from '@/components/common/collect-icon'
// import classNames from 'classnames'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loveImage = require('@/assets/img/love.webp')

interface IProps {
  article: IArticle
}

const ArticleItemMain: FC<IProps> = memo(({ article }) => {
  const { title, pureText, commentTotal, likeTotal, firstImage, id } = article

  // const navigate = useNavigate()

  // const { userInfo } = useSelector(
  //   (state: ReduxStateType) => ({
  //     userInfo: state.login.userInfo
  //   }),
  //   shallowEqual
  // )
  // const dispatch: ReduxDispatchType = useDispatch()

  // const hasCollect = (id: number, userInfo: IUserInfo) => {
  //   const _isAuth = isAuth()
  //   if (!_isAuth) return -1

  //   return findCollectIndex(id, userInfo)
  // }

  // const changeCollectStatus = async (event: MouseEvent<HTMLDivElement>) => {
  //   event.stopPropagation()

  //   const _isAuth = isAuth()
  //   if (!_isAuth) return navigate('/login')

  //   const _userInfo = useChangeCollectStatus(article.id, userInfo)
  //   await setQuery('user', _userInfo.account, _userInfo)
  //   await dispatch(requestUserInfo())
  // }

  return (
    <ArticleItemMainWrapper>
      <div className="main">
        <div className="main-detail">
          <h2 className="title">{ title }</h2>
          <div className="content">{ pureText }</div>
          <div className="footer">
            <div className="emotion">
              <img src={ loveImage } />
              <div className="amount">{ likeTotal }</div>
            </div>
            <div className="comment">
              <div className="comment-icon">
                <CommentIcon />
              </div>
              <div className="amount">{ commentTotal }</div>
            </div>
            <div className="collect">
              <CollectIcon
                width={20}
                height={20}
                articleId={id}
                isShowText={true}
                isHover={false}
              />
              {/* <div className="collect-text">收藏</div> */}
            </div>
          </div>
        </div>
        {
          firstImage &&
          (
            <div className="main-img">
              <img src={firstImage} alt="" />
            </div>
          )
        }
      </div>
    </ArticleItemMainWrapper>
  )
})

export default ArticleItemMain
