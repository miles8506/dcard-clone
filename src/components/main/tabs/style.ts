import styled from "styled-components"

export const TabsWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  min-width: 728px;
  height: 100%;
  margin: 0 12px;

  .tabs {
    height: 100%;

    &-top {
      position: sticky;
      top: 48px;
      padding: 20px 60px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      background-color: #fff;

      &-select {
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(calc(-50% + 8px));
      }
    }

    &-content {
      height: calc(100% - 81px);
    }
  }

  @media screen and (max-width: 992px) {
    min-width: auto;
    height: 100%;
    margin: 0;
    border-radius: 0 0 0 0;

    .tabs-top {
      padding: 0;

      &-select {
        display: none;
      }
    }
  }
`
