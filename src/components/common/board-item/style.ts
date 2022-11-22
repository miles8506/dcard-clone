import styled from 'styled-components'

interface IProps {
  isSearchBoard: boolean
}

export const BoardItemWrapper = styled.div<IProps>`
  .board-item {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px 0 20px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.isSearchBoard ? '#fff' : 'rgba(0, 0, 0, 0.35)'};
    }

    &-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    &-text {
      flex: 1;
      padding: 0 10px 0 8px;
      color: ${props => props.isSearchBoard ? '#000' : 'rgba(255, 255, 255, 0.75)'};
      font-size: ${props => props.isSearchBoard ? '16px' : '14px'};

      &::after {
        content: '';
        display: inline-block;
        width: 0px;
        height: 100%;
        vertical-align: middle;
      }

      & > span {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .board-item {
      &:hover {
        background-color: #fff;
      }

      &-text {
        color: ${props => props.isSearchBoard ? '#000' : '#000000BF'};
        font-size: 16px;
      }
    }
  }
`
