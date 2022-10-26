import styled from 'styled-components'

export const ModalContentWrapper = styled.div`
  padding: 40px 60px 36px;

  .modal-content {
    &-header {
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 12px;

      &__text {
        margin-bottom: 0;
        font-size: 24px;
      }

      &__close-icon {
        position: absolute;
        top: 50%;
        right: 0;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }

    &-body {
      display: flex;
      justify-content: center;

      &__qr-code {
        width: 230px;
        height: 230px;
        margin: 20px 0 40px;

        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }

    &-footer {
      display: flex;
      gap: 0 16px;

      .google,
      .ios {
        flex: 1;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
