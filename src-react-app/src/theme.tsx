import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white'
    }
  },
  spacing: 0
});
export default theme;
