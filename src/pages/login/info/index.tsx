import { memo } from 'react'

import { InfoWrapper } from './style'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const backgroundImg = require('@/assets/img/login-bgc.webp')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const qrCode = require('@/assets/img/dcard-qrcode-s.webp')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const google = require('@/assets/img/google-play.webp')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ios = require('@/assets/img/ios.webp')

const Info = memo(() => {
  return (
    <InfoWrapper>
      <div className="login-info">
        <div className="qr-code-wrap">
          <div className="qr-code-bgc">
            <img src={backgroundImg} alt="" />
          </div>
          <div className="qr-code">
            <img src={qrCode} alt="" />
          </div>
          <div className="qr-code-text">立即掃描下載 Dcard App !</div>
        </div>
        <div className="text">
          <div>年輕人都在 Dcard 上討論</div>
          <div>不想錯過任何有趣的話題嗎？</div>
          <div>趕快加入我們吧！</div>
        </div>
        <span className="navigation">先看討論區</span>
        <div className="download">
          <div className="google">
            <img src={google} alt="" />
          </div>
          <div className="ios">
            <img src={ios} alt="" />
          </div>
        </div>
      </div>
    </InfoWrapper>
  )
})

export default Info
