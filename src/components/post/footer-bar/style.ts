import styled from 'styled-components'

import { ThemePropsType } from '@/assets/theme'

export const FooterBarWrapper = styled.div<ThemePropsType>`
  .footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__function-box {
      color: rgba(0, 0, 0, 0.5);
      fill: currentColor;

      .pic-icon {
        cursor: pointer;
      }
    }

    &__step-box {
      display: flex;
      gap: 16px;

      /* .cancel-button {
        padding: 11px 8px;
        color: rgba(0,0,0,0.5);
      }

      .step-button {
        color: #fff;
        padding: 11px 16px;
        border-radius: 10px;
        user-select: none;
      }

      .cancel-button {
        cursor: pointer;
        user-select: none;
      }

      .active {
        background-color: ${(props: ThemePropsType) => props.theme.textColor.primary};
        cursor: pointer;
      }

      .disabled {
        background-color: rgba(0, 0, 0, 0.5);
        opacity: .2;
        cursor: not-allowed;
      } */
    }
  }

  .file-input {
    display: none;
  }
`
