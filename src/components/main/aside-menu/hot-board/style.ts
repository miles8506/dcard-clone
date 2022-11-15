import styled from 'styled-components'

export const HotBoardWrapper = styled.div`
  height: calc(100% - 220px);

  .hot-board {
    height: 100%;

    &-title {
      height: 44px;
      padding: 0 10px 0 20px;
      line-height: 44px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.35);
    }

    &-list {
      height: calc(100% - 44px);
      overflow: auto;

      &::-webkit-scrollbar {
        width: 7px;
      }

      &::-webkit-scrollbar-track {
        background: #00324e;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: #081826;
      }
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

  @media screen and (max-width: 996px) {
    height: auto;
    .hot-board {
      &-title {
        color: #a6a6a6;
        background-color: #f2f3f4;
      }
    }

    .board {
      &:hover {
        background-color: #fff;
      }

      &-text {
        color: #000000BF;
        font-size: 16px;
      }
    }
  }
`
