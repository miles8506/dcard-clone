import { memo, useEffect } from 'react'

import dayjs from 'dayjs'
import { MSSessionStore } from '@/utils'
import { usePostContext } from '@/context/post-context'

import { InfoBarWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'

const InfoBar = memo(() => {
  const { account } = MSSessionStore.getItem('loginInfo')
  const { postDateTime, changePostDateTime } = usePostContext()

  useEffect(() => {
    changePostDateTime(dayjs().format('MM月DD日 HH:mm'))
  }, [])

  return (
    <InfoBarWrapper>
      <div className="info-bar">
        <div className="user-info">
          <div className="avatar">
            <AvatarBoyIcon
              width={32}
              height={32}
            />
          </div>
          <div className="detail">
            <span className="account">{account}</span>
            <span className="date">{postDateTime}</span>
          </div>
        </div>
      </div>
    </InfoBarWrapper>
  )
})

export default InfoBar
