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
  }
`
