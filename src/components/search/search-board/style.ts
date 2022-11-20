import styled from 'styled-components'
import type { ThemePropsType } from '@/assets/theme'

export const SearchBoardWrapper = styled.div<ThemePropsType>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 16px;
  padding: 12px 0;
  background-color: #fff;

  .record-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0 8px;

    .record-item {
      margin-top: 8px;
    }
  }

  .record-header {
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px;

    .record-title {
      color: #000000BF;
    }

    .record-cancel-btn {
      color: ${props => props.theme.textColor.primary};
      cursor: pointer;
    }
  }
`
