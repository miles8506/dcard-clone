import styled from 'styled-components'
import { ThemePropsType } from '@/assets/theme'

export const LoveIconWrapper = styled.div<ThemePropsType>`
  .love-icon {
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.iconColor.like};
    }
  }

  .active-love-icon {
    color: ${(props) => props.theme.iconColor.like};
  }
`
