import styled from 'styled-components'
import type { ThemePropsType } from '@/assets/theme'

export const FilterBarWrapper = styled.div<ThemePropsType>`
  margin: 0 0 20px;

  .filter-bar {
    .hot-btn,
    .sort-btn {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 16px;
      font-weight: 300;
      background-color: rgba(0,16,32,0.06);
      color: #000;
      cursor: pointer;
    }

    .hot-btn {
      margin: 0 10px 0 0;
    }

    .active {
      background-color: ${props => props.theme.textColor.primary};
      color: #fff;

      &:hover {
        background-color: #5ab0db;
      }
    }
  }
`
