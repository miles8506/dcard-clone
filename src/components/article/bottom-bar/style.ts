import styled from 'styled-components'

interface IProps {
  isShowDisplayArea: boolean
}

export const BottomBarWrapper = styled.div<IProps>`
  flex-shrink: 0;
  position: sticky;
  bottom: 0px;
  height: ${props => props.isShowDisplayArea ? '48px' : '264px'};
  bottom: 0;
  right: 0;
  padding: 0 60px;
  z-index: 99;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.15);

  .bottom-bar {
    height: 100%;
  }
`
