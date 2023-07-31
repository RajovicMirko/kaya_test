import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles";
import { IToggleMode } from "./style/theme";

declare module "@mui/material/styles" {
  interface ThemeOptions extends MuiThemeOptions {
    toggleMode: IToggleMode;
  }

  interface Theme extends MuiTheme {
    toggleMode: IToggleMode;
  }
}
