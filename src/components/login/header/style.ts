import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  flex-shrink: 0;
  height: 48px;
  padding: 0 20px;
  background-color: rgb(0, 106, 166);
  z-index: 9;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
  }
`
