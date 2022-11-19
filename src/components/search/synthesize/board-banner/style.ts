import styled from 'styled-components'

export const BoardBannerWrapper = styled.div`
  .board-banner {
    padding: 20px 0;
    margin: 0 60px;
    border-bottom: 1px solid rgb(233, 233, 233);

    &-title {
      margin-bottom: 8px;
      color: rgba(0, 0, 0, 0.75);
    }

    &-box {
      display: flex;
      gap: 0 8px;
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .board-banner {
      margin: 0 16px;
    }
  }
`
