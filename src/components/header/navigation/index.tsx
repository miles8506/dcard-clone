import { memo, FC, useEffect, useCallback, useState, MouseEvent } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'

import type { ReduxStateType } from '@/store'

import { CSSTransition } from 'react-transition-group'
import { NavigationWrapper } from './style'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import UserIcon from '@/assets/svg/user-icon'
import EditIcon from '@/assets/svg/edit-icon'
import MSModal from '@/base-ui/MSModal'
import ModalContent from '../modal-content'
import Menu from '@/components/header/menu'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QRcodeImage = require('@/assets/img/dcard-qrcode-s.webp')

interface IProps {
  isShowDownload: boolean
  isShowLoginButton: boolean
}

const Navigation: FC<IProps> = memo(({ isShowDownload, isShowLoginButton }) => {
  const navigate = useNavigate()
  const info = useRouterInfo()
  const {pathname} = info
  const { isLogin } = useSelector((state: ReduxStateType) => ({
    isLogin: state.login.isLogin
  }), shallowEqual)

  const [isShowQRcode, setIsShowQRcode] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)

  const changeShowMenu = useCallback((event: MouseEvent<HTMLDivElement>, item?: string) => {
    event.stopPropagation()
    setIsShowMenu(prev => {
      return !prev
    })
    if (item) {
      // do something
    }
  }, [setIsShowMenu])

  const changeIsShowQRcode = useCallback((val: boolean) => {
    setIsShowQRcode(val)
  }, [setIsShowQRcode])

  const goPostPage = () => navigate('/post')

  const goProfilePage = () => navigate('/profile')

  useEffect(() => {
    const handleMenuListener = () => {
      if (isShowMenu) setIsShowMenu(false)
    }
    window.document.addEventListener('click', handleMenuListener)
    return window.removeEventListener('click', handleMenuListener)
  }, [isShowMenu])
  return (
    <NavigationWrapper pathname={pathname}>
      {
        isLogin && (
          <div className="functions">
            <div className="functions__post-icon" onClick={goPostPage}>
              <EditIcon />
            </div>
            <div className="functions__user-icon" onClick={goProfilePage}>
              <UserIcon />
            </div>
          </div>
        )
      }
      {
        isShowLoginButton && (
          <div className="registry-login">
            <div className="registry-login__btn" onClick={() => navigate('/login')}>註冊 / 登入</div>
          </div>
        )
      }
      <div className="arrow-down" onClick={(e: MouseEvent<HTMLDivElement>) => changeShowMenu(e)}>
        <ArrowDownIcon />
        <CSSTransition
          in={isShowMenu}
          timeout={1000}
          classNames={{
            enter: 'header-menu-enter',
            enterActive: 'header-menu-enter-active',
            exit: 'header-menu-exit',
            exitActive: 'header-menu-exit-active'
          }}
          unmountOnExit
        >
          <Menu changeShowMenu={changeShowMenu} />
        </CSSTransition>
      </div>
      {
        isShowDownload && (
          <div className="download">
            <div className="download__btn">下載 App</div>
            <div className="download__mask-wrap">
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
        )
      }
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
