import { ThemeProps } from "styled-components"

const theme = {
  baseColor: {
    primary: 'rgb(0, 88, 138)'
  }
}

export default theme
export type ThemePropsType = ThemeProps<typeof theme>
