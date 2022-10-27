import styled from 'styled-components'

export const MenuWrapper = styled.div`
    position: absolute;
    top: 48px;
    right: -6px;
  width: 160px;
  padding: 6px 0;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: opacity .2s ease;

  .triangle-sign {
    position: absolute;
    top: -16px;
    right: 10px;
    border-top: 8px solid transparent;
    border-right: 8px solid #fff;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(90deg);
  }
`
