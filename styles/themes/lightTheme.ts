import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00c853",
    },
    secondary: {
      main: "#003c00",
    },
    success: {
      main: "#76ff03",
    },
    error: {
      main: "#f44336",
    },
    info: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "DynaPuff",
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "white",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
