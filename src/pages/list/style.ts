import styled from 'styled-components'

export const MobileListWrapper = styled.div`
  display: none;

  .mobile-list {
    position: absolute;
    top: 48px;
    right: 0;
    bottom: 48px;
    left: 0;
    background-color: #fff;
    overflow-y: auto;
  }

  @media screen and (max-width: 992px) {
    display: block;
  }
`
