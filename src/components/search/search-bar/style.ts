import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 12px;
  z-index: 99;
  background-color: #fff;

  .search-bar {
    display: flex;
    height: 28px;

    .search-input {
      position: relative;
      flex: 1;
      display: flex;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.15);

      .search-icon {
        display: flex;
        align-items: center;
        padding-left: 6px;
        color: #c1c2c5;
        fill: currentColor;
      }
    }

    .cancel-btn {
      padding: 0 0 0 12px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      line-height: 28px;
    }

    .del-icon {
      position: absolute;
      top: 50%;
      right: 6px;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      color: rgba(0, 0, 0, 0.35);
      fill: currentColor;
    }
  }
`
