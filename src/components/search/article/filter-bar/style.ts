import styled from 'styled-components'

export const FilterBarWrapper = styled.div`
  padding: 12px 60px;
  background-color: #fff;

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

  @media screen and (max-width: 767px) {
    padding: 12px 16px;
  }

  .mobile-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }


  // transition correlationMenu menu
  .mobile-correlationMenu-enter {
    bottom: -177px;
  }

  .mobile-correlationMenu-active-enter {
    bottom: 0;
    transition: bottom .3s ease;
  }

  .mobile-correlationMenu-exit {
    bottom: 0;
  }

  .mobile-correlationMenu-active-exit {
    bottom: -177px;
    transition: bottom .3s ease;
  }

  // transition time menu
  .mobile-time-enter {
    bottom: -226px;
  }

  .mobile-time-active-enter {
    bottom: 0;
    transition: bottom .3s ease;
  }

  .mobile-time-exit {
    bottom: 0;
  }

  .mobile-time-active-exit {
    bottom: -226px;
    transition: bottom .3s ease;
  }

  // transition mask
  .mobile-mask-enter {
    opacity: 0;
  }

  .mobile-mask-active-enter {
    opacity: 1;
    transition: opacity .3s ease;
  }

  .mobile-mask-exit {
    opacity: 1;
  }

  .mobile-mask-active-exit {
    opacity: 0;
    transition: opacity .3s ease;
  }
`
