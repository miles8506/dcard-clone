import styled from 'styled-components'

export const EditorWrapper = styled.div`
  flex: 1;
  margin-top: 24px;

  .editor {
    display: flex;
    flex-direction: column;
    height: 100%;

    &-title {
      & > textarea {
        width: 100%;
        border: 0;
        outline: none;
        font-size: 28px;
        font-weight: 500;

        &::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }
      }
    }

    &-body {
      flex: 1;
    }
  }
`
