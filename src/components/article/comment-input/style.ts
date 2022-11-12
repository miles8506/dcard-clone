import styled from 'styled-components'

export const CommentInputWrapper = styled.div`
  .comment-input {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px 60px;
    z-index: 999;
    background-color: #fff;
    overflow: hidden;

    &-top {
      display: flex;
      padding: 16px 0;

      .avatar {
        display: flex;
        align-items: center;
        padding: 0 8px 0 0;
      }

      .account {
        line-height: 20px;
        font-weight: 500;
      }

      .detail {
        color: rgba(0, 0, 0, 0.5);
        font-size: 12px;

        .floor {
          &::after {
            content: '・';
          }
        }
      }
    }

    &-main {
      flex: 1;
      padding: 8px 0;

      .main-input {
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        resize: none;
        font-size: 16px;

        &::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }

        &::-webkit-scrollbar {
          width: 5px;
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

    &-bottom {
      display: flex;
      justify-content: flex-end;
      padding-top: 12px;
    }
  }
`
