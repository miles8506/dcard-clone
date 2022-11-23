import styled from 'styled-components'

export const MobileListWrapper = styled.div`
  display: none;
  height: 100%;

  .mobile-list-wrap {
    display: flex;
    flex-direction: column;
    height: calc(100% - 96px);

    .mobile-list {
      flex: 1;
      background-color: #fff;
    }
  }

  @media screen and (max-width: 992px) {
    display: block;
    .mobile-list {
      padding: 0 0 48px;
    }
  }
`
