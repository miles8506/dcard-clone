import { memo, useCallback, useState, MouseEvent, Fragment } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

import { NavigationWrapper } from './style'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import UserIcon from '@/assets/svg/user-icon'
import EmailIcon from '@/assets/svg/email-icon'
import CardIcon from '@/assets/svg/card-icon'
import InfoIcon from '@/assets/svg/info-icon'
import EditIcon from '@/assets/svg/edit-icon'
import MSModal from '@/base-ui/MSModal'
import ModalContent from '../modal-content'
import MSMenu from '@/base-ui/MSMenu'
import MSMenuItem from '@/base-ui/MSMenuItem'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QRcodeImage = require('@/assets/img/dcard-qrcode-s.webp')

const Navigation = memo(() => {
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }), shallowEqual)

  const [isShowQRcode, setIsShowQRcode] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [menuList, setMenuList] = useState(['服務條款', '常見問題', '回報問題', '品牌識別', '徵才', '商業合作', '免費下載 App', '設定'])

  const changeShowMenu = () => setIsShowMenu(prev => !prev)

  const changeIsShowQRcode = useCallback((val: boolean) => {
    setIsShowQRcode(val)
  }, [setIsShowQRcode])

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
      <div className="arrow-down-icon" onClick={changeShowMenu}>
        <ArrowDownIcon />
          <div className="menu">
          <MSMenu isShowMenu={isShowMenu}>
              {
                menuList.map(item => (
                  <div key={item} onClick={changeShowMenu}>
                    <MSMenuItem>{item}</MSMenuItem>
                  </div>
                ))
              }
            </MSMenu>
          </div>
      </div>
      <div className="download">
        <div className="download-btn">下載 App</div>
        <div className="mask-wrap">
          <div className="download-wrap" onClick={() => changeIsShowQRcode(true)}>
            <div className="download-text">手機掃描下載</div>
            <div className="download-qr-code">
              <img src={QRcodeImage} alt="" />
            </div>
            <div className="download-enlarge">
              <span>放大</span>
            </div>
          </div>
        </div>
      </div>
      <MSModal
        open={isShowQRcode}
        onCancel={() => setIsShowQRcode}
        style={{
          top: 'calc(50% - 236px)',
          borderRadius: '12px'
        }}
      >
        <ModalContent setIsShowQRcode={changeIsShowQRcode} />
      </MSModal>
    </NavigationWrapper>
  )
})

export default Navigation
