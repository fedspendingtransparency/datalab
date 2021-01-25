import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  typography: {
    fontFamily: [
      'Source Sans Pro'
      ]
  },
  palette: {
  background: {
  default: '#ffffff'
  }
}
});

export default theme;
