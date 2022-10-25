import styled from 'styled-components'

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
    display: flex;
    align-items: center;
    fill: currentColor;
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

    &:hover .download-qr-code {
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

    &-qr-code {
      display: none;
      padding: 12px 16px;
      border-radius: 10px;
      background-color: #fff;

      &:hover {
        display: block;
      }

      & > img {
        width: 100px;
        height: 100px;
      }
    }

    .mask-wrap {
      position: absolute;
      top: 40px;
      right: 0;
      padding-top: 20px;
    }
  }
`
