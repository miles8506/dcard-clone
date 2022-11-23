import styled from 'styled-components'
import { ThemePropsType } from '@/assets/theme'

export const ArticleMainWrapper = styled.div<ThemePropsType>`
  flex: 1;

  .article-main {
    &-title {
      margin-bottom: 12px;
      padding: 0 60px;
      font-size: 28px;
    }

    &-info {
      display: flex;
      padding: 0 60px;

      &-sort {
        color: #3397cf;
        font-weight: 300;
      }

      &-division {
        padding: 0 7px;
        color: rgba(0, 0, 0, 0.35);
      }

      &-date {
        color: rgba(0, 0, 0, 0.35);
      }
    }

    &-content {
      flex: 1;
      padding: 20px 60px 40px;
    }

    &-function-bar {
      display: flex;
      justify-content: space-between;
      padding: 6px 60px;

      .detail {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);

        .emotion-img {
          width: 24px;
          height: 24px;

          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > span {
          padding-left: 6px;
          font-size: 18px;
        }
      }

      .operation {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .article-main {
      &-title {
        font-size: 24px;
      }

      &-info {
        &-sort,
        &-division,
        &-date {
          font-size: 13px;
        }
      }

      &-function-bar {
        .detail {
          .emotion-img {
            & > img {
              width: 21px;
              height: 21px;
            }
          }

          & > span {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .article-main {
      &-title {
        padding: 0 16px;
      }

      &-info {
        padding: 0 16px;
      }

      &-content {
        padding: 20px 16px 40px;

      }

      &-function-bar {
        padding: 6px 16px;
      }
    }
  }
`
