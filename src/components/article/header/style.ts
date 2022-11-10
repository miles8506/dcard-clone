import styled from 'styled-components'

export const ArticleHeaderWrapper = styled.div`
  .article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 60px 18px;

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
`
