import { memo, useState } from 'react'

import { useLogin } from '@/hooks/use-login'

import { FormWrapper } from './style'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import FBIcon from '@/assets/svg/fb-icon'
import GoogleIcon from '@/assets/svg/google-icon'
import AppleIcon from '@/assets/svg/apple-icon'

const Form = memo(() => {
  const {
    state,
    changeAccountValue,
    changePasswordValue,
    verifyInputValue,
    googleLogin,
    facebookLogin,
    normalLogin
  } = useLogin()
  const { accountValue, accountStatus, passwordValue, passwordStatus } = state
  const [isShowThirdPartyLogin, setIsShowThirdPartyLogin] = useState(false)

  const changeIsShowThirdPartyLogin = () =>
    setIsShowThirdPartyLogin((prev) => !prev)

  return (
    <FormWrapper isShowThirdPartyLogin={isShowThirdPartyLogin}>
      <div className="top">
        <div className="title">註冊 / 登入</div>
        <div className="form">
          <div className="account">
            <label htmlFor="account_id">常用信箱</label>
            <input
              type="text"
              id="account_id"
              value={accountValue}
              onChange={changeAccountValue}
              onBlur={() => verifyInputValue('account')}
            />
            { accountStatus && <div className="warn-text">此欄位為必填或確認信箱格式是否正確</div> }
          </div>
          <div className="password">
            <label htmlFor="password_id">密碼</label>
            <input
              type="password"
              id="password_id"
              value={passwordValue}
              onChange={changePasswordValue}
              onBlur={() => verifyInputValue('password')}
            />
            { passwordStatus && <div className="warn-text">此欄位為必填或確認密碼是否正確</div> }
          </div>
        </div>
        <div className="login-btn" onClick={normalLogin}>註冊 / 登入</div>
        <div className="support-bar">
          <div className="support-bar__verify">未收到驗證信</div>
          <span className="support-bar__division"></span>
          <div className="support-bar__forget-psw">忘記密碼</div>
        </div>
        <div
          className="third-party-login-text"
          onClick={changeIsShowThirdPartyLogin}
        >
          <span>其他註冊/登入方式</span>
          <div className="arrow-down-icon">
            <ArrowDownIcon width="18px" height="18px" />
          </div>
        </div>
        <div className="third-party-login-wrap" onClick={facebookLogin}>
          <div className="third-party-login-box">
            <div className="fb-login-btn">
              <div className="fb-icon">
                <FBIcon />
              </div>
              Facebook 註冊 / 登入
            </div>
            <div className="google-login-btn" onClick={googleLogin}>
              <div className="google-icon">
                <GoogleIcon />
              </div>
              Google 註冊 / 登入
            </div>
            <div className="apple-login-btn">
              <div className="apple-icon">
                <AppleIcon />
              </div>
              Apple 註冊 / 登入
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">註冊/登入即代表您同意遵守 <span className='protocol-link'>Dcard 使用協議</span></div>
    </FormWrapper>
  )
})

export default Form
