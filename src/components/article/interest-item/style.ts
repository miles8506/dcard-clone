import styled from 'styled-components'
import type { ThemePropsType } from '@/assets/theme'

export const InterestItemWrapper = styled.div<ThemePropsType>`
  flex: calc(50% - 21.5px);
  margin-top: 10px;

  .interest-item {
    display: flex;
    padding: 8px 0 8px 15px;
    cursor: pointer;

    &-info {
      flex: 1;

      .title {
        .text {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        position: relative;
        color: #000;
        font-weight: 600;
        font-size: 16px;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -15px;
          transform: translateY(-50%);
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: ${(props) => props.theme.textColor.primary};
        }
      }

      .detail {
        color: rgba(0, 0, 0, 0.35);

        .emotion {
          &::after {
            content: '・';
          }
        }
      }
    }

    &-img {
      display: flex;
      align-items: center;
      width: 40px;
      margin-left: 16px;
      border-radius: 10px;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 40px;
        object-fit: contain;
        background-color: rgba(0,0,0,0.1);
      }
    }
  }
`
