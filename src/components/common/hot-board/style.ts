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

  @media screen and (max-width: 992px) {
    height: auto;
    .hot-board {
      &-title {
        color: #a6a6a6;
        background-color: #f2f3f4;
      }
    }
  }
`
