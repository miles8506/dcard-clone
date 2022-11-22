import { memo, useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import { MSSessionStore } from '@/utils'
import { LOGIN_INFO } from '@/constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeLoginStatus, emptyUserInfo } from '@/store/login'

import { ListWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import CollectIcon from '@/assets/svg/collect-icon'
import ArticleIcon from '@/assets/svg/article-icon'

const List = memo(() => {
  const navigate = useNavigate()
  const dispatch: ReduxDispatchType = useDispatch()

  const userInfo = MSSessionStore.getItem(LOGIN_INFO)

  const getGender = (value: number) =>
    value === 0 ? (<AvatarGirlIcon width={60} height={60} />) : (<AvatarBoyIcon width={60} height={60} />)

  const handleLogout = () => {
    MSSessionStore.removeItem(LOGIN_INFO)
    dispatch(changeLoginStatus(false))
    dispatch(emptyUserInfo())
    navigate('/main')
  }

  useEffect(() => {
    const userInfo = MSSessionStore.getItem(LOGIN_INFO)
    !userInfo?.account && navigate('/login')
  }, [])

  return (
    <ListWrapper>
      <div className="profile-list">
        <div className="user-info">
          <div className="avatar-img">{getGender(userInfo?.gender)}</div>
          <div className="avatar-account">
            <h2>{userInfo?.account}</h2>
          </div>
        </div>
        <div className="list">
          <div className="collect-item" onClick={() => navigate('/profile/collect')}>
            <div className="collect-icon">
              <CollectIcon width={24} height={24} />
            </div>
            <div className="text">我的收藏</div>
          </div>
          <div className="article-item" onClick={() => navigate('/profile/article')}>
            <div className="article-icon">
              <ArticleIcon />
            </div>
            <div className="text">我的文章</div>
          </div>
          <div className="logout" onClick={handleLogout}>登出</div>
        </div>
      </div>
    </ListWrapper>
  )
})

export default List
