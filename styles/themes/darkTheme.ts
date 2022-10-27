import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#ff9100",
    },
    success: {
      main: "#00c853",
    },
    error: {
      main: "#f44336",
    },
    info: {
      main: "#ff6d00",
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
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "black",
          color: "white",
          borderRadius: 5,
          border: `1px solid ${colors.primary}`,
        },
      },
    },
  },
});
