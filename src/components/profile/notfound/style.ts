import styled from 'styled-components'

export const NotfoundWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 280px;
  .notfound {
    &-img {
      & > img {
        width: 100%;
        height: 100%;
      }
    }

    &-info {
      & > h2 {
        margin-top: 16px;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
      }

      & > p {
        margin: 12px 0 16px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
      }
    }

    &-operation {
      text-align: center;
    }
  }
`
