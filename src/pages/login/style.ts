import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100%;
  padding: 50px 0;

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 115px;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;

    &__form {
      flex-shrink: 0;
      width: 522px;
      background-color: #fff;
    }
  }
`
