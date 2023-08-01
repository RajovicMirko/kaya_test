import { Box, Typography, styled } from "@mui/material";
import { CHAT_MAX_WIDTH } from "../../constants";

export const ChatDescriptionWrapper = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    maxWidth: CHAT_MAX_WIDTH,
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
    marginBottom: "16px",
    lineHeight: "100px",
    maxWidth: "500px",
  };
});

export const ChatDescriptionSubTitle = styled(Typography)(() => {
  return {
    fontSize: "24px",
    margin: 0,
    lineHeight: "30px",
  };
});
