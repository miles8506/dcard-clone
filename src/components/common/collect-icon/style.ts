import styled from 'styled-components'
import { ThemePropsType } from '@/assets/theme'

interface IProps {
  isHover: boolean
}

export const CollectIconWrapper = styled.div<ThemePropsType & IProps>`
  .collect-icon {
    display: flex;
    align-items: center;
    color: #e1e1e1;
    fill: currentColor;

    &:hover {
      color: ${(props) => (props.isHover ? props.theme.iconColor.collect : '#e1e1e1')};
    }

    &-text {
      padding-left: 6px;
      color: #00000059;
    }
  }

  .active-collect-icon {
    color: ${(props) => props.theme.iconColor.collect};

    &:hover {
      color: ${(props) => props.theme.iconColor.collect};
    }
  }
`
