import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  /* .wrapper {
    overflow: auto;
  } */

  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 115px;
    max-width: 1140px;
    margin: 0 auto;
    padding: 50px 0;

    &__form {
      flex-shrink: 0;
      width: 522px;
      background-color: #fff;
    }
  }
`
