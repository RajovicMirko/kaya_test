import { Box, Typography, styled } from "@mui/material";

export const ChatDescriptionWrapper = styled(Box)(({ theme }) => {
  return {
    ...theme.mixins.chatInnerComponentPaddingBig,
  };
});

export const ChatDescriptionLogo = styled(Typography)(() => {
  return {
    fontSize: "70px",
    marginBottom: "100px",
  };
});

export const ChatDescriptionTitle = styled(Typography)(() => {
  return {
    fontSize: "100px",
    margin: 0,
    lineHeight: 1,
    maxWidth: "500px",
  };
});

export const ChatDescriptionSubTitle = styled(Typography)(() => {
  return {
    fontSize: "24px",
    margin: 0,
    lineHeight: 1,
  };
});
