import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
// External libraries
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next";
// Providers
import { UIProvider } from "@/modules/shared/context";
// Themes
import { darkTheme } from "@/styles/themes";

interface Props {
  children: ReactNode;
}

const MyProviders: FC<Props> = ({ children }) => {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </UIProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProviders>
      <Component {...pageProps} />
    </MyProviders>
  );
}

export default appWithTranslation(MyApp);
