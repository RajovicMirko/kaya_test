import { Button, styled } from "@mui/material";

export const SidebarButtonStyle = styled(Button)(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    color: theme.isDarkMode
      ? theme.palette.common.white
      : theme.palette.grey[500],

    ":hover": {
      backgroundColor: theme.isDarkMode
        ? theme.palette.background.default
        : theme.palette.grey[100],
    },

    "> p": {
      fontSize: "10px",
    },
  };
});
