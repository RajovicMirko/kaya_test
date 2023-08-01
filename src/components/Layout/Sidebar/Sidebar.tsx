import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, useTheme } from "@mui/material";
import SidebarButton from "src/components/Button/SidebarButton/SidebarButton";
import {
  SidebarContainer,
  SidebarDivider,
  SidebarPaper,
  SidebarTopContainer,
} from "./Sidebar.style";
import { DARK_TEXT, LIGHT_TEXT } from "./constants";

export type ISidebar = {};

type ISidebarReturn = JSX.Element | null;

const Sidebar = ({}: ISidebar): ISidebarReturn => {
  const theme = useTheme();
  return (
    <SidebarPaper>
      <SidebarTopContainer>
        <SidebarButton
          icon={theme.isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          onClick={theme.toggleMode}
        >
          {theme.isDarkMode ? LIGHT_TEXT : DARK_TEXT}
        </SidebarButton>
      </SidebarTopContainer>

      <SidebarDivider />

      <SidebarContainer>
        <SidebarButton icon={<SettingsIcon />} onClick={() => {}}>
          Settings
        </SidebarButton>
        <SidebarButton icon={<MessageIcon />} onClick={() => {}}>
          Feedback
        </SidebarButton>
        <Avatar sx={{ width: 36, height: 36 }} />
      </SidebarContainer>
    </SidebarPaper>
  );
};

export default Sidebar;
