import styled from 'styled-components'

export const ArticleItemWrapper = styled.div`
  .article-item {
    margin: 0 60px;
    padding: 20px 0;
    border-bottom: 1px solid rgb(233, 233, 233);
    cursor: pointer;

    .info {
      display: flex;
      color: rgba(0, 0, 0, 0.5);

      .avatar {
        display: flex;
        align-items: center;
        margin-right: 8px;
      }

      .sort {
        &::after {
          content: '・';
        }
      }

      .name {
        &::after {
          content: '・';
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .article-item {
      margin: 0 16px;
    }
  }
`
