import { memo } from 'react'

import { CommentItemWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/assets/svg/love-icon'

const CommentItem = memo(() => {
  const getGender = (value: number) => value === 0 ? <AvatarGirlIcon width={32} height={32} /> : <AvatarBoyIcon width={32} height={32} />

  return (
    <CommentItemWrapper>
      <div className="comment-item">
        <div className="avatar">{ getGender(0) }</div>
        <div className="main">
          <div className="main-header">
            <div className="main-header-account">a09112332@gmial.com</div>
            <div className="main-header-like">
              <div className="icon">
              <LoveIcon />
              </div>
              <div className="amount">111</div>
            </div>
          </div>
          <div className="main-content">現在就已經快睡著==想來一杯了</div>
          <div className="main-footer">
            <div className="floor">B1</div>
            <div className="time-ago">6 小時前</div>
          </div>
        </div>
      </div>
    </CommentItemWrapper>
  )
})

export default CommentItem
