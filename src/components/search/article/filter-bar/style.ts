import styled from 'styled-components'

export const FilterBarWrapper = styled.div`
  padding: 12px 60px;

  .filter-bar {
    display: flex;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);

    & > div[class$='item'] {
      border-right: 1px solid rgb(233, 233, 233);
      cursor: pointer;
      user-select: none;

      & > div[class$="icon"] {
        display: flex;
        align-items: center;
        padding: 0 0 0 3px;
        fill: currentColor;
      }

      &:last-child {
        border-right: 0;
      }
    }

    .inner-content-item {
      display: flex;
      align-items: center;
      padding: 0 12px 0 8px;
    }

    .correlation-item,
    .time-item {
      position: relative;
      display: flex;
      padding: 11px 14px;
    }
  }
`
