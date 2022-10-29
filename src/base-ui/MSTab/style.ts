import styled from 'styled-components'

interface IProps {
  height?: number
  color?: string
}

export const MSTabWrapper = styled.div<IProps>`
  display: flex;
  width: 100%;
  height: ${props => props.height ? props.height + 'px' : '60px'};
  color: ${props => props.color ? props.color : 'rgba(0, 0, 0, 0.35)'};
  background-color: inherit;
`
