import styled from 'styled-components'

export const ArticleItemMainWrapper = styled.div`
  .main {
    display: flex;
    align-items: center;
    margin-top: 12px;

    &-detail {
      flex: 1;

      .title {
        margin: 0;
        font-size: 18px;
      }

      .content {
        display: -webkit-box;
        width: 100%;
        margin-top: 4px;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .footer {
        display: flex;
        align-items: center;
        gap: 0 16px;
        margin-top: 16px;
        color: rgba(0, 0, 0, 0.35);

        .emotion {
          display: flex;
          align-items: center;
          & > img {
            width: 16px;
            height: 16px;
          }
        }

        .comment {
          display: flex;

          &-icon {
            display: flex;
            align-items: center;
            color: #3397cf;
            fill: currentColor;
          }
        }

        .collect {
          display: flex;

          &-icon {
            display: flex;
            align-items: center;
            color: #e1e1e1;
            fill: currentColor;
          }
        }

        .amount {
          padding-left: 6px;
        }
      }
    }

    &-img {
      width: 84px;
      height: 84px;
      margin-left: 20px;
      background-color: rgba(0,0,0,0.1);
      border-radius: 10px;
      overflow: hidden;

      & > img {
        object-fit: contain;
      }
    }
  }
`
