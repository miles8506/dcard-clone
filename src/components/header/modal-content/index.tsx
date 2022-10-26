import { memo, FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QRcodeImage = require('@/assets/img/dcard-qrcode-s.webp')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const google = require('@/assets/img/google-play.webp')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ios = require('@/assets/img/ios.webp')

import { ModalContentWrapper } from './style'
import CloseIcon from '@/assets/svg/close-icon'

interface IProps {
  setIsShowQRcode: (val: boolean) => void
}

const ModalContent: FC<IProps> = memo(({ setIsShowQRcode }) => {
  return (
    <ModalContentWrapper>
      <div className="modal-content">
        <div className="modal-content-header">
          <h4 className="modal-content-header__text">
            立即掃描下載 Dcard App！
          </h4>
          <span
            className="modal-content-header__close-icon"
            onClick={() => setIsShowQRcode(false)}
          >
            <CloseIcon />
          </span>
        </div>
        <div className="modal-content-body">
          <div className="modal-content-body__qr-code">
            <img src={QRcodeImage} alt="" />
          </div>
        </div>
        <div className="modal-content-footer">
          <div className="google">
            <img src={google} alt="" />
          </div>
          <div className="ios">
            <img src={ios} alt="" />
          </div>
        </div>
      </div>
    </ModalContentWrapper>
  )
})

export default ModalContent
