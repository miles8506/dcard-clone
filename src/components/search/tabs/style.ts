import styled from 'styled-components'

interface IProps {
  isShowHeader: boolean
}

export const TabsWrapper = styled.div<IProps>`
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  min-width: 728px;
  margin: 0 12px 47px;

  .tabs {
    height: 100%;

    &-top {
      position: sticky;
      top: ${(props) => (props.isShowHeader ? '48px' : '0px')};
      padding: 20px 60px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      background-color: #fff;
      z-index: 99;
    }

    &-content {
      height: calc(100% - 81px);
    }
  }

  @media screen and (max-width: 992px) {
    min-width: auto;
    height: 100%;
    margin: 0 0 47px;
    border-radius: 0 0 0 0;

    .tabs {
      &-top {
        top: ${(props) => (props.isShowHeader ? '48px' : '44px')};
        padding: 0;

        &-select {
          display: none;
        }
      }

      &-content {
        height: ${(props) => props.isShowHeader ? 'calc(100% - 81px)' : 'calc(100% - 61px)'};
        padding-top: 43px;
      }
    }
  }
`
