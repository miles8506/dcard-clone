import styled from 'styled-components'

export const DisplayAreaWrapper = styled.div`
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
    }
  }
`
