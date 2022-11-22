import styled from 'styled-components'

import { ThemePropsType } from '@/assets/theme'

export const RuleModalWrapper = styled.div<ThemePropsType>`
  max-width: 720px;

  .rule-modal {
    &-header {
      padding: 40px 60px 12px;
      font-size: 24px;
      text-align: center;
    }

    &-body {
      padding: 0px 60px 12px;

      .rule-list {
        margin: 0 80px;
      }

      .item {
        display: flex;
        margin: 15px 0;
        font-size: 16px;
      }

      .text {
        font-size: 16px;

        .link {
          color: ${props => props.theme.textColor.primary};
          cursor: pointer;
        }
      }
    }

    &-footer {
      display: flex;
      justify-content: flex-end;
      padding: 12px 60px 24px;

      & > button {
        padding: 11px 16px;
        background-color: ${props => props.theme.textColor.primary};
        border-radius: 10px;
        border: 0;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }


  @media screen and (max-width: 992px) {
    margin: 0 auto;

    .rule-modal {
      &-header {
        padding: 20px 16px 12px;
      }

      &-body {
        padding: 0 16px 12px;

        .rule-list {
          margin: 0;
        }
      }

      &-footer {
        padding: 12px 16px 24px;
      }
    }
  }
`
