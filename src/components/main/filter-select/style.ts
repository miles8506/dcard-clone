import styled from 'styled-components'

export const FilterSelectWrapper = styled.div`
  .filter-select {
    display: flex;
    align-items: center;
    height: 100%;

    .text {
      padding: 0 10px;
      color: rgba(0, 0, 0, 0.5);
    }

    .current-option {
      display: flex;
      align-items: center;
      padding: 6px 4px 6px 8px;
      border-radius: 8px;
      color: rgba(0, 0, 0, 0.75);
      background-color: rgba(0, 16, 32, 0.06);
      cursor: pointer;

      .arrow-icon {
        display: flex;
        align-items: center;
        fill: currentColor;
        color: rgba(0, 0, 0, 0.5);
      }

      &-text {
        color: rgba(0,0,0,0.75);
        user-select: none;
      }
    }
  }

  // transition
  .filter-select-enter {
    opacity: 0;
  }

  .filter-select-active-enter {
    opacity: 1;
    transition: opacity .1s ease;
  }

  .filter-select-exit {
    opacity: 1;
  }

  .filter-select-active-exit {
    opacity: 0;
    transition: opacity .1s ease;
  }
`
