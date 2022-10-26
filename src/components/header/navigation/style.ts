import styled from 'styled-components'
import { ThemePropsType } from '@/assets/theme'

export const NavigationWrapper = styled.div`
  display: flex;
  height: 100%;
  color: #fff;

  .registry-login {
    display: flex;
    align-items: center;
    padding: 0 16px;

    &-btn {
      font-weight: 200;
    }
  }

  .arrow-down-icon {
    position: relative;
    display: flex;
    align-items: center;
    fill: currentColor;
  }

  .menu {
    position: absolute;
    top: 48px;
    right: -6px;
  }

  .function-icons {
    display: flex;

    & > div[class$="icon"] {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      fill: currentColor;
    }
  }

  .registry-login,
  .arrow-down-icon,
  .function-icons {
    cursor: pointer;
  }

  .download {
    position: relative;
    display: flex;
    align-items: center;

    &:hover .download-wrap {
      display: block;
    }

    &-btn {
      margin-left: 15px;
      padding: 5px 13px;
      border-radius: 8px;
      background-color: #3397cf;
      cursor: pointer;
      transition: background-color .2s ease;

      &:hover {
        background-color: #5ab0db;
      }
    }

    &-wrap {
      display: none;
      background-color: #fff;
      padding: 12px 16px;
      border-radius: 10px;
    }

    &-qr-code {
      &:hover {
        display: block;
      }

      & > img {
        width: 100px;
        height: 100px;
      }
    }

    &-text {
      margin-bottom: 3px;
      text-align: center;
      color: #000;
      font-weight: 200;
    }

    &-enlarge {
      margin-top: 5px;
      text-align: center;
      color: ${(props: ThemePropsType) => props.theme.textColor.primary};
      font-weight: 200;
      cursor: pointer;
    }

    .mask-wrap {
      position: absolute;
      top: 35px;
      right: 0;
      padding-top: 20px;
    }
  }

  .modal-content {
    padding: 0 60px;
  }
`
