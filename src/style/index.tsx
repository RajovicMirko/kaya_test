import { CssBaseline, PaletteMode, Theme, ThemeProvider } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { MUI_MODE } from "./constants";
import globalStyles from "./globalStyles";
import theme, { IToggleMode } from "./theme";

const MUIProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>(MUI_MODE.light);

  const handleToggleMode: IToggleMode = () => {
    setMode((prevMode) => {
      return prevMode === MUI_MODE.light ? MUI_MODE.dark : MUI_MODE.light;
    });
  };

  const provide: Theme = theme({ mode, toggleMode: handleToggleMode });

  return (
    <ThemeProvider theme={provide}>
      <CssBaseline />
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};

export default MUIProvider;
