import styled from 'styled-components'

interface IProps {
  isShowDisplayArea: boolean
}

export const BottomBarWrapper = styled.div<IProps>`
  flex-shrink: 0;
  position: sticky;
  bottom: 0px;
  height: ${props => props.isShowDisplayArea ? '48px' : '264px'};
  bottom: 0;
  right: 0;
  padding: 0 60px;
  z-index: 99;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.15);

  .bottom-bar {
    height: 100%;

    .display-area {
      display: flex;
      align-items: center;
      height: 100%;

      &__avatar {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      &__comment-input {
        flex: 1;
        color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
        cursor: text;
      }

      &__operation {
        display: flex;
        align-items: center;

        .love-icon,
        .collect-icon {
          display: flex;
          align-items: center;
          margin: 0 8px;
          color: rgba(0, 0, 0, 0.2);
          fill: currentColor;
          cursor: pointer;
        }

        .love-icon {
          &:hover {
            color: ${(props) => props.theme.iconColor.like};
          }
        }

        .collect-icon {
          &:hover {
            color: ${(props) => props.theme.iconColor.collect};
          }
        }
      }
    }
  }
`
