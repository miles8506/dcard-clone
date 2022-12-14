import styled from 'styled-components'

export const InterestAreaWrapper = styled.div`
  padding: 40px 60px;
  .interest-area {
    &-title {
      padding: 0 0 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.5);
      font-size: 16px;
    }

    &-content {
      display: flex;
      gap: 0 43px;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 40px 16px;

    .interest-area {
      &-title {
        font-size: 14px;
      }

      &-content {
        flex-direction: column;
        gap: 0;
      }
    }
  }
`
