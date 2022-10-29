import styled from 'styled-components'

export const HotBoardWrapper = styled.div`
  .hot-board {
    &-title {
      height: 44px;
      padding: 0 10px 0 20px;
      line-height: 44px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.35);
    }
  }

  .board {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px 0 20px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.35);
    }

    &-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    &-text {
      flex: 1;
      padding: 0 10px 0 8px;
      color: rgba(255, 255, 255, 0.75);

      &::after {
        content: '';
        display: inline-block;
        width: 0px;
        height: 100%;
        vertical-align: middle;
      }

      & > span {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
`
