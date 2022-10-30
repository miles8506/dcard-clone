import styled from "styled-components"

export const TabsWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  .tabs {
    &-top {
      position: relative;
      padding: 20px 60px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);

      &-select {
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(calc(-50% + 8px));
      }
    }
  }
`
