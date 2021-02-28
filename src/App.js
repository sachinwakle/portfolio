import React, { createContext, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BaseGrid from "./components/BaseGrid";
import { createMuiTheme } from "@material-ui/core/styles";

const ThemeConext = createContext();

export default function App() {
  const [appTheme, setAppTheme] = useState("light");
  const theme = createMuiTheme({
    palette: {
      type: appTheme,
    },
  });

  const AppThemeProvider = ThemeConext.Provider;

  const changeTheme = () => {
    setAppTheme((preTheme) => {
      return preTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppThemeProvider value={changeTheme}>
        <div className="App">
          <BaseGrid />
        </div>
      </AppThemeProvider>
    </ThemeProvider>
  );
}

export { ThemeConext };
