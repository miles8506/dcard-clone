import styled from 'styled-components'

export const AsideMenuWrapper = styled.div`

  .aside-menu {
    position: sticky;
    top: 68px;
    height: calc(100vh - 68px);
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`
