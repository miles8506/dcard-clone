import { ThemeProps } from 'styled-components'

const theme = {
  baseColor: {
    primary: 'rgb(0, 88, 138)'
  },
  textColor: {
    primary: '#3397CF',
    warn: '#ea5c5c'
  },
  iconColor: {
    like: '#ea5c5c',
    collect: '#3397CF'
  }
}

export default theme
export type ThemePropsType = ThemeProps<typeof theme>
