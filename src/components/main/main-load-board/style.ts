import styled from 'styled-components'

export const MainLoadBoardWrapper = styled.div`
  overflow: auto;

  .main-load-board {
    display: grid;
    grid-template-columns: 208px 1fr 300px;
    grid-template-rows: 1fr;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding-top: 68px;
  }
`
