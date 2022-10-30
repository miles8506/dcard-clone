import styled from 'styled-components'

interface IProps {
  width?: number
  padding?: string | number
  isActive: boolean
}

export const MSTabsWrapper = styled.div<IProps>`
  flex-shrink: 0;
  height: 100%;
  background-color: inherit;
  cursor: pointer;
  border-bottom: ${props => props.isActive ? '2px solid rgb(51, 151, 207)' : '2px solid #fff'};
  font-weight: 500;

  &:hover {
    color: #000;
  }

  .ms-tabs {
    height: 100%;
    padding: ${props => props.padding ? props.padding : '0 16px'};

    &::after {
      content: '';
      display: inline-block;
      width: 0px;
      height: 100%;
      vertical-align: middle;
    }

    &-text {
      /* display: inline-block; */
      vertical-align: middle;
      color: ${props => props.isActive ? '#000' : 'inherit'};
    }
  }
`
