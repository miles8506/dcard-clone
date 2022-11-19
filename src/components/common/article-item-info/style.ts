import styled from 'styled-components'

export const ArticleItemInfoWrapper = styled.div`
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
`
