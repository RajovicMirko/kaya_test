import {
  Duration as MuiDuration,
  Mixins as MuiMixins,
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
  TypeBackground as MuiTypeBackground,
} from "@mui/material/styles";
import { CSSProperties } from "react";
import { IToggleMode } from "./style/theme";

declare module "@mui/material/styles" {
  interface ThemeCustom {
    toggleMode: IToggleMode;
    isDarkMode: boolean;
  }
  interface ThemeOptions extends MuiThemeOptions, ThemeCustom {}
  interface Theme extends MuiTheme, ThemeCustom {}

  interface TypeBackground extends MuiTypeBackground {
    input: string;
    chat: string;
  }

  interface Mixins extends MuiMixins {
    chatInnerComponentPaddingBig: CSSProperties | undefined;
    chatInnerComponentPaddingSmall: CSSProperties | undefined;
  }

  interface Duration extends MuiDuration {
    splitScreen: number;
  }
}
