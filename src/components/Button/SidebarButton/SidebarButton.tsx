import { ButtonProps, Typography } from "@mui/material";
import { SidebarButtonStyle } from "./SidebarButton.style";

export type ISidebarButton = ButtonProps & {
  icon: JSX.Element;
};

type ISidebarButtonReturn = JSX.Element | null;

const SidebarButton = ({
  icon,
  children,
  onClick,
  disableRipple = true,
  ...rest
}: ISidebarButton): ISidebarButtonReturn => {
  return (
    <SidebarButtonStyle
      onClick={onClick}
      {...rest}
      disableRipple={disableRipple}
    >
      {icon}
      <Typography>{children}</Typography>
    </SidebarButtonStyle>
  );
};

export default SidebarButton;
