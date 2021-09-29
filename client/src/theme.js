import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const raceTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b49da',
      light: '#0b49da',
    },
    secondary: {
      main: '#dbeeff',
    },
    borderColour: {
      main: '1px solid #D9D9D9',
    },
    borderRadius: {
      borderRadius: 4,
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    // fontSize: 14,
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: 28,
      lineHeight: '33.89px',
    },
    h2: {
      fontSize: 24,
      lineHeight: '29.05px',
    },
    h3: {
      fontSize: 18,
      lineHeight: '21.78px',
    },
    h4: {
      fontSize: 16,
      lineHeight: '18.15px',
    },
    h5: {
      fontSize: 14,
      lineHeight: '16.94px',
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    // Applied to slider elements
    MuiSlider: {
      thumb: {
        width: 20,
        height: 20,
        marginTop: -9,
        backgroundColor: 'white',
        border: '2px solid rgba(0, 0, 0, 0.23)',
      },
    },
    // Applied to dropdown elements' underline
    MuiInput: {
      underline: {
        '&:hover': {
          '&:not(.Mui-disabled)': {
            '&:before': {
              borderBottom: 'none',
            },
          },
        },
        '&:before': {
          borderBottom: 'none',
          content: 'none',
        },
        '&:after': {
          borderBottom: 'none',
        },
        '&.Mui-disabled:before': {
          borderBottomStyle: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 8,
      },
    },
    MuiCard: {
      root: {
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
});

export default raceTheme;
