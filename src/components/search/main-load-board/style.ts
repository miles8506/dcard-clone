import styled from 'styled-components'

interface IProps {
  isShowHeader: boolean
}

export const MainLoadBoardWrapper = styled.div<IProps>`
  height: 100%;
  overflow: auto;

  .main-load-board {
    display: grid;
    grid-template-columns: 208px 1fr 300px;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding-top: ${props => props.isShowHeader ? '68px' : '0px'};
  }

  @media screen and (max-width: 992px) {
    .main-load-board {
      grid-template-columns: 1fr;
      padding-top: ${props => props.isShowHeader ? '48px' : '0px'};
    }
  }
`
