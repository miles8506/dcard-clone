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
        cursor: pointer;
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

        div[class$="icon"] {
          display: flex;
          align-items: center;
          padding: 0 8px;
          color: rgba(0, 0, 0, 0.2);
          fill: currentColor;
          cursor: pointer;
        }

        .love-icon {
          &:hover {
            color: ${props => props.theme.iconColor.like};
          }
        }

        .collect-icon {
          &:hover {
            color: ${props => props.theme.iconColor.collect};
          }
        }
      }
    }
  }
`
