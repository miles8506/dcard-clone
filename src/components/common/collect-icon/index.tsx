import { FC, memo, MouseEvent } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { findCollectIndex, useChangeCollectStatus } from '@/hooks/use-status'
import { setQuery } from '@/api'
import { requestUserInfo } from '@/store/login/async-thunk'
import { isAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { default as SVGCollectIcon } from '@/assets/svg/collect-icon'

import { CollectIconWrapper } from './style'

interface IProps {
  width: number
  height: number
  articleId: number
  isShowText?: boolean
  isHover?: boolean
}

const CollectIcon: FC<IProps> = memo(({ width, height, articleId, isShowText = false, isHover = true }) => {
  const { userInfo } = useSelector((state: ReduxStateType) => ({
    userInfo: state.login.userInfo
  }), shallowEqual)
  const dispatch: ReduxDispatchType = useDispatch()

  const navigate = useNavigate()

  const changeCollectStatus = async (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()

    const _isAuth = isAuth()
    if (!_isAuth) return navigate('/login')

    const _userInfo = useChangeCollectStatus(articleId, userInfo)
    console.log(_userInfo);
    await setQuery('user', _userInfo.account, _userInfo)
    await dispatch(requestUserInfo())
  }

  return (
    <CollectIconWrapper isHover={isHover}>
      <div
        className={classNames(
          'collect-icon',
          findCollectIndex(articleId, userInfo) !== -1
            ? 'active-collect-icon'
            : ''
        )}
        onClick={changeCollectStatus}
      >
        <SVGCollectIcon width={width} height={height} />
        { isShowText && <span className='collect-icon-text'>收藏</span> }
      </div>
    </CollectIconWrapper>
  )
})

export default CollectIcon
