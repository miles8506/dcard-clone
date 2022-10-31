import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  height: calc(100%);
  /* padding: 24px 0 48px; */

  .article {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 60px;

      &-user {
        display: flex;
        align-items: center;

        .user-avatar {
          margin-right: 8px;
        }
      }

      &-close-icon {
        display: flex;
        align-items: center;
        fill: currentColor;
        color: rgb(196, 196, 196);
        cursor: pointer;

        &:hover {
          color: rgb(51, 151, 207);
        }
      }
    }

    &-title {
      margin-bottom: 12px;
      padding: 0 60px;
      font-size: 28px;
    }

    &-info {
      display: flex;
      padding: 0 60px;

      &-sort {
        color: #3397cf;
        font-weight: 300;
        cursor: pointer;
      }

      &-division {
        padding: 0 7px;
        color: rgba(0, 0, 0, 0.35);
      }

      &-date {
        color: rgba(0, 0, 0, 0.35);
      }
    }

    &-content {
      padding: 0 60px;
    }
  }
`
