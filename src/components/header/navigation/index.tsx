import { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

import { NavigationWrapper } from './style'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import UserIcon from '@/assets/svg/user-icon'
import EmailIcon from '@/assets/svg/email-icon'
import CardIcon from '@/assets/svg/card-icon'
import InfoIcon from '@/assets/svg/info-icon'
import EditIcon from '@/assets/svg/edit-icon'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const QRcodeImage = require('@/assets/img/dcard-qrcode-s.webp')

const Navigation = memo(() => {
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }))

  return (
    <NavigationWrapper>
      {isLogin ? (
        <div className="function-icons">
          <div className="edit-icon">
            <EditIcon />
          </div>
          <div className="info-icon">
            <InfoIcon />
          </div>
          <div className="card-icon">
            <CardIcon />
          </div>
          <div className="email-icon">
            <EmailIcon />
          </div>
          <div className="user-icon">
            <UserIcon />
          </div>
        </div>
      ) : (
        <div className="registry-login">
          <div className="registry-login-btn">註冊 / 登入</div>
        </div>
      )}
      <div className="arrow-down-icon">
        <ArrowDownIcon />
      </div>
      <div className="download">
        <div className="download-btn">下載 App</div>
        <div className="mask-wrap">
          <div className="download-qr-code">
            <img src={QRcodeImage} alt="" />
          </div>
        </div>
      </div>
    </NavigationWrapper>
  )
})

export default Navigation
