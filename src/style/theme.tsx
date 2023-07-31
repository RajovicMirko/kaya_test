import { PaletteMode, Theme, createTheme } from "@mui/material";
import components from "./bones/components";
import mixins from "./bones/mixins";
import darkPalette from "./bones/palette/dark";
import lightPalette from "./bones/palette/light";
import { MUI_MODE } from "./constants";

export type IToggleMode = () => void;

export type IThemeProps = { mode: PaletteMode; toggleMode: IToggleMode };

export type ITheme = ({ mode, toggleMode }: IThemeProps) => Theme;

const theme: ITheme = ({ mode, toggleMode }) => {
  return createTheme({
    mixins: mixins,
    components: components,
    palette: mode === MUI_MODE.light ? lightPalette : darkPalette,
    //   shadows?: Shadows;
    //   transitions?: TransitionsOptions;
    //   typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    //   zIndex?: ZIndexOptions;

    // CUSTOM PROPS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    toggleMode,
    isDarkMode: mode === MUI_MODE.dark,
  });
};

export default theme;
