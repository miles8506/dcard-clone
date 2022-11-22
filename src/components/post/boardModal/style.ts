import styled from 'styled-components'

export const BoardModalWrapper = styled.div`
  .board-modal {
    height: 612px;

    &-top {
      padding: 40px 60px 12px;
      font-size: 24px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      height: calc(100% - 90px);
      padding: 0 60px 48px;
    }

    .filter-board-bar {
      position: relative;

      .search-icon {
        position: absolute;
        top: 50%;
        left: 6px;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
        color: rgba(0, 0, 0, 0.35);
        fill: currentColor;
      }

      & > input {
        width: 100%;
        padding: 10px 14px 10px 40px;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        outline: none;

        &::placeholder {
          font-weight: 200;
        }
      }
    }

    .list {
      flex: 1;
      margin-top: 8px;
      overflow: auto;

      .text {
        padding: 6px 14px;
        color: rgba(0, 0, 0, 0.35);
      }

      .item {
        height: 44px;
        padding: 0 14px;
        line-height: 44px;
        color: rgba(0, 0, 0, 0.75);
        font-size: 16px;

        &:hover {
          background-color: #f2f3f4;
          cursor: pointer;
        }
      }

      &::-webkit-scrollbar {
        width: 7px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #888;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .board-modal {
      &-top {
        padding: 20px 16px 12px;
      }

      &-content {
        padding: 0 16px 0;
      }
    }
  }
`
