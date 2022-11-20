import styled from "styled-components";

export const MainLoadBoardWrapper = styled.div`
  height: 100%;
  overflow: auto;

  .main-load-board {
    display: grid;
    grid-template-columns: 208px 1fr 300px;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding-top: 68px;
  }

  @media screen and (max-width: 992px) {
    .main-load-board {
      grid-template-columns: 1fr;
      padding-top: 48px;
    }
  }
`
