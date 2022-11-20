import styled from 'styled-components'
import type { ThemePropsType } from '@/assets/theme'

export const SearchBarWrapper = styled.div`
  flex: 1;

  .search-bar {
    position: relative;
    display: flex;
    width: 602px;
    height: 30px;
    margin: 0 32px;
    border-radius: 4px;
    overflow: hidden;

    &-btn {
      display: flex;
      align-items: center;
      padding: 0 9px;
      border: 1px solid ${(props: ThemePropsType) => props.theme.baseColor.primary};
      line-height: 26px;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
      color: #fff;
      fill: currentColor;

      &::after {
        content: '';
        width: 0px;
        height: 100%;
      }
    }

    &-del-icon {
      position: absolute;
      top: 50%;
      right: 50px;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      color: rgba(255, 255, 255, 0.35);
      fill: currentColor;
    }
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`
