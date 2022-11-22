import styled from 'styled-components'

export const MobileNavigationWrapper = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    background-color: #fff;

    .m-navigation {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.15);

      & > [class$="-icon"] {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 12px;
        color: rgba(0, 0, 0, 0.2);
        fill: currentColor;
      }

      .active {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 12px;

        svg {
          fill: #3397cf;
        }
      }
    }
  }
`
