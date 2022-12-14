import { memo, useEffect } from 'react'

import { MSSessionStore, formatDate, getCurrentTimeStamp } from '@/utils'
import { usePostContext } from '@/context/post-context'
import { LOGIN_INFO } from '@/constants'

import { InfoBarWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'

const InfoBar = memo(() => {
  const userInfo = MSSessionStore.getItem(LOGIN_INFO)
  const { postDateTime, changePostDateTime } = usePostContext()

  const getGender = (value: number) =>
  value === 0 ? <AvatarGirlIcon width={32} height={32} /> : <AvatarBoyIcon width={32} height={32} />

  useEffect(() => {
    changePostDateTime(formatDate(getCurrentTimeStamp(), 'MM月DD日 HH:mm'))
  }, [])

  return (
    <InfoBarWrapper>
      <div className="info-bar">
        <div className="user-info">
          <div className="avatar">
            { getGender(userInfo?.gender) }
          </div>
          <div className="detail">
            <span className="account">{userInfo?.account}</span>
            <span className="date">{postDateTime}</span>
          </div>
        </div>
      </div>
    </InfoBarWrapper>
  )
})

export default InfoBar
