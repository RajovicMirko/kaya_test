import { Box, Paper, styled } from "@mui/material";

export const SidebarPaper = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "80px",
  height: "100vh",
  borderRadius: 0,
}));

export const SidebarContainer = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "34px",
    padding: "30px 0",
  };
});

export const SidebarTopContainer = styled(SidebarContainer)(() => {
  return {
    flex: 1,
    justifyContent: "flex-start",
  };
});

export const SidebarDivider = styled(Box)(({ theme }) => {
  return {
    width: "80%",
    height: "2px",
    backgroundColor: theme.palette.grey[200],
  };
});
