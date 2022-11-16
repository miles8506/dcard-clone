import styled from 'styled-components'

export const BoardItemWrapper = styled.div`
  flex-shrink: 0;
  width: 146px;
  height: 110px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  .board-item {
    display: flex;
    flex-direction: column;
    height: 100%;

    &-bg {
      position: relative;
      flex: 1;
      flex-shrink: 0;

      & > img {
        width: 100%;
        height: 100%;
      }

      .board-logo {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 35%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }

    &-title {
      margin-top: 15px;
      text-align: center;
    }

    &-discussion {
      margin-bottom: 10px;
      padding: 0 20px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.35);
    }
  }
`
