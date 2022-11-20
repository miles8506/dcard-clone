import { memo } from 'react'

import { AvatarWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'

const Avatar = memo(() => {
  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={100} height={100} /> : <AvatarBoyIcon width={100} height={100} />

  return (
    <AvatarWrapper>
      <div className="avatar">
        <div className="avatar-img">
          { getGender(1) }
        </div>
        <h2 className="avatar-account">a123456fdsffasfasdfas</h2>
      </div>
    </AvatarWrapper>
  )
})

export default Avatar
