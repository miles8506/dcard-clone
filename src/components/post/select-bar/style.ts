import styled from 'styled-components'

export const SelectBarWrapper = styled.div`
  .select-bar {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    &__box {
      display: flex;
      padding: 6px 4px 6px 8px;
      border-radius: 8px;
      background-color: rgba(0, 16, 32, 0.06);
      cursor: pointer;

      .text {
        color: rgba(0, 0, 0, 0.75);
      }

      .arrow-down-icon {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        fill: currentColor;
      }
    }

    &__rule {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.25);
      cursor: pointer;

      &:hover {
        color: #3397cf;
      }

      .point-icon {
        display: flex;
        align-items: center;
        margin-right: 4px;
        fill: currentColor;
      }
    }
  }
`
