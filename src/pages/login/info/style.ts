import styled from 'styled-components'

export const InfoWrapper = styled.div`
  .login-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    .qr-code-wrap {
      position: relative;
    }

    .qr-code-bgc {
      text-align: center;

      & > img {
        width: 332px;
        height: 306px;
      }
    }

    .qr-code {
      position: absolute;
      top: 79px;
      left: 50%;
      transform: translateX(-50%);
      & > img {
        width: 180px;
        height: 180px;
      }
    }

    .qr-code-text {
      position: absolute;
      bottom: 14px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
    }

    .text {
      padding-bottom: 20px;

      & > div {
        font-size: 24px;
        color: hsla(0, 0%, 100%, 0.6);
        text-align: center;

        &:nth-child(1) {
          margin-top: 20px;
          color: #fff;
          font-size: 32px;
          font-weight: 700;
        }
      }
    }

    .navigation {
      padding: 11px 8px;
      cursor: pointer;
      color: #3397cf;
      font-size: 16px;

      &:hover {
        color: #5ab0db;
      }
    }

    .download {
      display: flex;
      gap: 0 16px;
      margin-top: 26px;

      .ios,
      .google {
        width: 164px;
        height: 46px;

        & > img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
`
