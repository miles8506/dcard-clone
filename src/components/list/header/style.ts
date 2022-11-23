import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 48px;
  flex-shrink: 0;
  background-color: rgb(0, 106, 166);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 4px 0 16px;

    &-search-icon {
      display: flex;
      align-items: center;
      padding: 0 12px;
      color: #fff;
      fill: currentColor;
    }
  }
`
