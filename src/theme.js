import { createMuiTheme } from '@material-ui/core/styles';

import HeavyRain from './fonts/HeavyRain.ttf';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=B71C1C&secondary.color=6D4C41&primary.text.color=ffffff

const heavyRain = {
  fontFamily: 'Heavy Rain',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('HeavyRain'),
    url(${HeavyRain}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f05545',
      main: '#b71c1c',
      dark: '#7f0000',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#6d4c41',
      main: '#6d4c41',
      dark: '#40241a',
      contrastText: '#ffffff'
    }
  },
  typography: {
    h3: {
      fontFamily: heavyRain.fontFamily,
      fontDisplay: heavyRain.fontDisplay,
      fontWeight: heavyRain.fontWeight
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [heavyRain]
      }
    }
  }
});

export default theme