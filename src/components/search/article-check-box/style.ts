import styled from 'styled-components'

interface IProps {
  isChecked: boolean
}

export const ArticleCheckBoxWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  .check-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border: 2px solid;
    background-color: ${props => props.isChecked ? '#3397cf' : '#fff'};
    border-color: ${props => props.isChecked ? '#3397cf' : 'rgba(0, 0, 0, 0.35)'};
    border-radius: 2px;
    color: #fff;
    fill: currentColor;
  }

  .label {
    padding: 0 0 0 8px;
    font-size: inherit;
    color: inherit;
  }
`
