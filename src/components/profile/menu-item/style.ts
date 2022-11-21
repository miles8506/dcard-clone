import styled from "styled-components";

interface IProps {
  customColor: string
  isActive: boolean
}

export const MenuItemWrapper = styled.div<IProps>`
  width: 100%;

  .menu-item {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 16px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.isActive ? 'rgba(255, 255, 255, 0.3)' : 'inherit'};

    &:hover {
      /* background-color: rgba(0, 8, 16, 0.4); */
      background-color: ${props => props.isActive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 8, 16, 0.4)'};
    }

    &-icon {
      display: flex;
      align-items: center;
      margin-right: 12px;
      color: ${props => props.customColor};
      fill: currentColor;
    }

    &-text {
      font-size: 16px;
      color: #fff;
    }
  }
`
