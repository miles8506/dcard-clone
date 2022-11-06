import { memo } from 'react'

import dayjs from 'dayjs'
import { MSSessionStore } from '@/utils'

import { InfoBarWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'

const InfoBar = memo(() => {
  const { account } = MSSessionStore.getItem('loginInfo')
  const dateTime = dayjs().format('MM月DD日 HH:mm')

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
            <span className="date">{dateTime}</span>
          </div>
        </div>
      </div>
    </InfoBarWrapper>
  )
})

export default InfoBar
