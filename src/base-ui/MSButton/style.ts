import styled from 'styled-components'

interface Props {
  msDisabled?: string
  bgHoverColor: string
}

export const MSButtonWrapper = styled.div<Props>`
  .ms-button {
    outline: none;
    border: 0px;
    user-select: none;
    font-size: 16px;
    border-radius: 10px;
    background-color: ${(props) =>
      props.msDisabled === 'disabled' ? 'rgba(0, 0, 0, 0.5)' : 'inherit'};
    cursor: ${(props) =>
      props.msDisabled === 'disabled' ? 'not-allowed' : 'pointer'};
    opacity: ${(props) => (props.msDisabled === 'disabled' ? '0.2' : '1')};

    &:hover {
      background-color: ${(props) => props.bgHoverColor} !important;
    }

    .ms-ring {
      display: inline-block;
      position: relative;
      width: 18px;
      height: 18px;
      margin-right: 10px;

      & > div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 22px;
        height: 22px;
        border: 3px solid #fff;
        border-radius: 50%;
        animation: ms-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
      }

      & > div:nth-child(1) {
        animation-delay: -0.45s;
      }
      & > div:nth-child(2) {
        animation-delay: -0.3s;
      }
      & > div:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
    @keyframes ms-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
