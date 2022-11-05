import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 20px;
    background-color: rgb(0, 106, 166);
  }

  .mobile-search-icon {
    display: none;
  }

  @media screen and (max-width: 992px) {
    justify-content: space-between;

    .mobile-search-icon {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
    }
  }
`
