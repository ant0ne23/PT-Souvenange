import { createMuiTheme } from '@material-ui/core/styles'
import { lighten, darken } from '@material-ui/core/styles/colorManipulator'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: lighten('#948EBA', 0.12),
      main: '#948EBA',
      dark: darken('#948EBA', 0.12),
      contrastText: '#fff',
    },
    secondary: {
      light: lighten('#78D0E9', 0.12),
      main: '#78D0E9',
      dark: darken('#78D0E9', 0.12),
      contrastText: '#fff',
    },
  },
})
