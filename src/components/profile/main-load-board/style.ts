import styled from "styled-components";

export const MainLoadBoardWrapper = styled.div`
  height: 100%;

  .main-load-board {
    display: flex;
    justify-content: center;
    padding-top: 68px;
    min-height: 728px;
  }

  @media screen and (max-width: 992px) {
    background-color: #fff;

    .main-load-board {
      padding-top: 0;
    }
  }
`
