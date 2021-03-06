import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
export const theme = createMuiTheme({
  // typography: {
  //   fontFamily: [
  //     'Chilanka',
  //     'cursive',
  //   ].join(','),
  // },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  spacing:  10,
});
