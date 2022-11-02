import styled from 'styled-components'

import { ThemePropsType } from '@/assets/theme'

interface IProps {
  isShowThirdPartyLogin: boolean
}

type PropsType = IProps & ThemePropsType

export const FormWrapper = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 522px;
  padding: 40px 60px 42px;
  background-color: #fff;
  border-radius: 12px;

  .top {
    flex: 1;
    .title {
      margin-bottom: 20px;
      font-size: 32px;
      text-align: center;
    }

    .form {
      .account,
      .password {
        display: flex;
        flex-direction: column;

        & > label {
          padding-bottom: 6px;
          font-size: 14px;
          color: #000;
        }

        & > input {
          font-size: 16px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          outline: none;
        }

        .warn-text {
          padding: 6px 14px 0;
          font-size: 12px;
          color: ${props => props.theme.textColor.warn};
        }
      }

      .account {
        margin-bottom: 20px;

        & > input {
          padding: 10px 14px;
        }
      }

      .password {
        margin-bottom: 35px;

        & > input {
          padding: 10px 40px 10px 14px;
        }
      }
    }

    .login-btn {
      padding: 11px 16px;
      text-align: center;
      background-color: ${(props) => props.theme.textColor.primary};
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #5ab0db;
      }
    }

    .support-bar {
      display: flex;
      justify-content: center;
      padding: 16px 10px;
      color: ${(props) => props.theme.textColor.primary};

      &__verify,
      &__forget-psw {
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
      }

      &__division {
        &::after {
          content: '・';
        }
      }
    }

    .third-party-login-text {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px 6px 14px 8px;
      color: rgba(0, 0, 0, 0.5);
      cursor: pointer;

      .arrow-down-icon {
        display: flex;
        align-items: center;
        fill: currentColor;
        transform: ${(props) =>
          props.isShowThirdPartyLogin ? 'rotate(0)' : 'rotate(180deg)'};
        transition: transform 0.3s ease;
      }
    }

    .third-party-login-wrap {
      height: 180px;
    }

    .third-party-login-box {
      display: flex;
      flex-direction: column;
      gap: 16px 0;
      height: ${(props) => (props.isShowThirdPartyLogin ? '100%' : '0%')};
      opacity: ${(props) => (props.isShowThirdPartyLogin ? '1' : '0')};
      transition: height 0.3s ease, opacity 0.3s ease;
      overflow: hidden;

      div[class$='-btn'] {
        position: relative;
        padding: 11px 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;

        div[class$='-icon'] {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .bottom {
    margin-top: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.35);

    .protocol-link {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
