import styled from 'styled-components'

export const MobileBoardListWrapper = styled.div`
  display: none;

  .mobile-board-list {
    position: absolute;
    top: 48px;
    right: 0;
    bottom: 48px;
    left: 0;
    background-color: #fff;
    overflow-y: auto;
  }

  @media screen and (max-width: 996px) {
    display: block;
  }
`
