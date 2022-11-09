import styled from 'styled-components'

export const ArticleMainWrapper = styled.div`
  flex: 1;

  .article-main {
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
      flex: 1;
      padding: 20px 60px 40px;
    }
  }
`