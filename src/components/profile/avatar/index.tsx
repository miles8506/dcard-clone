import { memo } from 'react'

import { MSSessionStore } from '@/utils'
import { LOGIN_INFO } from '@/constants'

import { AvatarWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'

const Avatar = memo(() => {
  const userInfo = MSSessionStore.getItem(LOGIN_INFO)

  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={100} height={100} /> : <AvatarBoyIcon width={100} height={100} />

  return (
    <AvatarWrapper>
      <div className="avatar">
        <div className="avatar-img">
          { getGender(userInfo?.gender) }
        </div>
        <h2 className="avatar-account">{userInfo?.account}</h2>
      </div>
    </AvatarWrapper>
  )
})

export default Avatar
