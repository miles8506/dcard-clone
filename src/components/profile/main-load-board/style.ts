import styled from "styled-components";

export const MainLoadBoardWrapper = styled.div`
  height: 100%;
  overflow: auto;

  .main-load-board {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 68px;
  }

  @media screen and (max-width: 992px) {
    .main-load-board {
      padding-top: 0;
    }
  }
`
