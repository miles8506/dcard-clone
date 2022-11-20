import styled from 'styled-components'

interface IProps {
  isShowCorrectIcon: boolean
  isMobile: boolean
}

export const MenuItemWrapper = styled.div<IProps>`
  .menu-item {
    display: flex;
    padding: ${props => props.isMobile ? '12px 16px' : '8px 12px 8px 21px'};
    background-color: inherit;
    color: rgba(0, 0, 0, 0.75);
    font-size: ${props => props.isMobile ? '16px' : '14px'};
    cursor: pointer;

    &:hover {
      background-color: rgb(242, 243, 244);
    }

    .text {
      flex: 1;
    }

    .icon {
      display: flex;
      align-items: center;
      width: 18px;
      color: rgb(51, 151, 207);
      fill: currentColor;
    }

    .active-text {
      color: rgb(51, 151, 207);
    }
  }
`
