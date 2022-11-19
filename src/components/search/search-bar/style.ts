import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 12px;

  .search-bar {
    display: flex;
    height: 28px;

    .search-input {
      flex: 1;
      height: 100%;

      & > input {
        width: 100%;
        height: 100%;
      }
    }
  }
`
