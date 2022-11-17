import styled from 'styled-components'

interface IProps {
  trianglePosition: string
  triangleTranslateX: string
}

export const MenuLayoutWrapper = styled.div<IProps>`
  position: absolute;
  top: 48px;
  right: -6px;
  width: 160px;
  padding: 6px 0;
  background-color: #fff;
  border-radius: 12px;
  transition: opacity .2s ease;
  box-shadow: 0px 1px 1px 0.5px #ebebeb;

  &::after {
    content: '';
    position: absolute;
    top: -16px;
    right: ${props => props.trianglePosition};
    height: 15px;
    width: 15px;
    border-top: 8px solid transparent;
    border-right: 8px solid #fff;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(90deg) translateX(${props => props.triangleTranslateX});
  }
`
