import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 115px;
    max-width: 1140px;
    margin: 0 auto;
    padding: 50px 0;
  }

  @media screen and (max-width: 992px) {
    .login {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`
