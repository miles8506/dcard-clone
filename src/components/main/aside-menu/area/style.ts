import styled from "styled-components"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rankIcon = require('@/assets/img/rank.png')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const gameIcon = require('@/assets/img/game.png')

export const AreaWrapper = styled.div`
  font-size: 16px;
  background-color: transparent;

  .area-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 0 10px 0 20px;
    color: rgba(255, 255, 255, 0.75);
    background-color: inherit;
    cursor: not-allowed;

    &:hover {
      background-color: rgba(0, 0, 0, 0.35);
    }

    &:first-child {
      cursor: pointer;
    }
  }

  .area-icon {
    display: flex;
    align-items: center;
    fill: currentColor;
    color: #fff;

    & > img {
      width: 24px;
      height: 24px;
    }
  }

  .area-text {
    margin: 0 10px 0 8px;
  }

  .rank-icon {
    width: 24px;
    height: 24px;
    mask-image: url(${rankIcon});
    mask-position: center;
    mask-size: 24px;
    mask-type: alpha;
    background-color: #fff;
  }

  .game-icon {
    width: 24px;
    height: 24px;
    mask-image: url(${gameIcon});
    mask-position: center;
    mask-size: 24px;
    mask-type: alpha;
    background-color: #fff;
  }
`
