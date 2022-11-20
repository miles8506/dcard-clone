import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 20px;
    background-color: rgb(0, 106, 166);
    z-index: 9;

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
