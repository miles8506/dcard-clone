import styled from 'styled-components'

export const MenuWrapper = styled.div`
  height: calc(100% - 210px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #00324e;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #081826;
  }

  /* .collect-icon {
    display: flex;
    align-items: center;
    color: #3397cf;
    fill: currentColor;
  } */
`
