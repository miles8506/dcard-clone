import styled from 'styled-components'

export const InfoBarWrapper = styled.div`
  .info-bar {
    .user-info {
      display: flex;
    }

    .avatar {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }

    .detail {
      display: flex;
      flex-direction: column;

      .date {
        color: rgba(0, 0, 0, 0.5);
        font-size: 12px;
      }
    }
  }
`
