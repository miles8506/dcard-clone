import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  background-color: inherit;
  flex: 1;

  .article {
    height: 100%;
    padding: 20px 60px;

    &-header {
      font-size: 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      line-height: 59px;

      .back-icon {
        display: none;
        color: rgba(0, 0, 0, 0.5);
        fill: currentColor;
      }
    }

    &-main {
      position: relative;
      height: calc(100% - 48px);
      padding: 24px 0;
    }

    &-list {
      border-radius: 12px;
      overflow: hidden;
    }

    &-item {
      background-color: #fff;
    }
  }

  @media screen and (max-width: 992px) {
    .article {
      padding: 0;

      &-header {
        position: relative;
        display: flex;
        justify-content: center;
        font-size: 18px;
        line-height: 44px;
        color: #000;
        background-color: #fff;

        .back-icon {
          position: absolute;
          top: 50%;
          left: 14px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
        }
      }

      &-list {
        border-radius: 0;
      }
    }
  }
`
