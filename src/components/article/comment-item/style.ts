import styled from 'styled-components'

export const CommentItemWrapper = styled.div`
  .comment-item {
    display: flex;
    padding: 20px 0 16px;
    border-bottom: 1px solid rgb(233, 233, 233);

    .avatar {
      width: 32px;
      margin-right: 8px;
    }

    .main {
      flex: 1;

      &-header {
        display: flex;
        justify-content: space-between;

        &-account {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &-like {
          display: flex;

          .like-icon {
            color: rgba(0, 0, 0, 0.35);
            fill: currentColor;
            cursor: pointer;

            &:hover {
              color: #ea5c5c;
            }
          }

          .amount {
            padding: 0 0 0 8px;
            color: rgba(0, 0, 0, 0.35);
          }
        }
      }

      &-content {
        white-space: break-spaces;
        word-break: break-word;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.75);
      }

      &-footer {
        display: flex;
        color: rgba(0, 0, 0, 0.75);

        .floor {
          &::after {
            content: '．';
          }
        }
      }
    }
  }
`
