import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 48px;
  background-color: rgb(0, 106, 166);

  .header {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    padding: 0 20px;

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
        color: #fff;
        fill: currentColor;
      }
    }
  }
`
