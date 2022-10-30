import styled from 'styled-components'

interface IProps {
  currentIndex: number
  itemIndex: number
}

export const SelectWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 160px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 15px 1px rgb(0, 0, 0, 3%);
  background-color: #fff;

  .select {
    &-list {
      padding: 6px 0;
    }
  }
`

export const SelectItemWrapper = styled.div<IProps>`
  .select-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: rgb(242, 243, 244);
    }

    &__sign-icon {
      display: flex;
      align-items: center;
      color: ${(props) =>
        props.currentIndex === props.itemIndex
          ? 'rgb(51, 151, 207)'
          : 'rgba(0, 0, 0, 0.35)'};
      fill: currentColor;
    }

    &__text {
      flex: 1;
      margin-left: 9px;
      color: ${(props) =>
        props.currentIndex === props.itemIndex
          ? 'rgb(51, 151, 207)'
          : 'rgba(0, 0, 0, 0.75)'};
      user-select: none;
    }

    &__correct-icon {
      display: flex;
      align-items: center;
      color: rgb(51, 151, 207);
      fill: currentColor;
    }
  }
`
