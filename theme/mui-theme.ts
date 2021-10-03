import { createTheme } from '@mui/material/styles';

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#606c38",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dda15e",
      contrastText: "#ffffff",
    },
    success: {
      main: "#54D62C",
    },
    error: {
      main: "#FF4842",
    },
    warning: {
      main: "#FFC107",
    },
    info: {
      main: "#33B5E5",
    },
    text: {
      primary: "#454F5B",
      secondary: "#9e9e9e",
      disabled: "#919EAB",
    },
  },
  shadows: [
    "none",
    "rgb(145 158 171 / 24%) 0px 1px 2px 0px",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
    "rgb(145 158 171 / 24%) 0px 8px 16px 0px",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
    "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 12px 24px 0px",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
    "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
    "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 20px 40px -4px",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
    "rgb(145 158 171 / 24%) 0px 0px 4px 0px, rgb(145 158 171 / 24%) 0px 24px 48px 0px",
  ],
  typography: {
    body1: {
      fontSize: "16px",
    },
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: "-0.24px",
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: "-0.24px",
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: "-0.06px",
    },
    h4: {
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "-0.06px",
    },
    h5: {
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: "-0.05px",
    },
    h6: {
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: "-0.05px",
    },
    overline: {
      fontWeight: 500,
    },
    button: {
      fontSize: 16,
      textTransform: "none",
      fontWeight: "normal",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default MuiTheme;
