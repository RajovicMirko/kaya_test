import { Box, Typography, styled } from "@mui/material";

const STYLE_CONSTANTS = {
  width: "70%",
  maxWidth: "1200px",
  transition: (attribute: string) => `${attribute} 0.4s ease`,
};

const customProps = ["isFullscreen"];
const shouldForwardProp = (prop: string) =>
  !customProps.includes(prop as string);

export interface IChatAIPage {
  isFullscreen: boolean;
}

export const ChatAIPage = styled(Box, {
  shouldForwardProp,
})<IChatAIPage>(({ isFullscreen }) => {
  return {
    width: isFullscreen ? "100%" : "50%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: STYLE_CONSTANTS.transition("width"),
    padding: "30px 0",
  };
});

export const ChatAIDescriptionWrapper = styled(Box, {
  shouldForwardProp,
})<IChatAIPage>(({ isFullscreen }) => {
  const fullscreenStyle = isFullscreen
    ? {
        display: "flex",
        flexFlow: "column-reverse",
        paddingBottom: "20px",
      }
    : {};
  return {
    width: STYLE_CONSTANTS.width,
    maxWidth: STYLE_CONSTANTS.maxWidth,
    height: isFullscreen ? "100%" : "470px",
    margin: 0,
    transition: STYLE_CONSTANTS.transition("all"),
    ...fullscreenStyle,
  };
});

export const ChatAILogo = styled(Typography)(() => {
  return {
    fontSize: "70px",
    marginBottom: "100px",
  };
});

export const ChatAITitle = styled(Typography)(() => {
  return {
    fontSize: "100px",
    margin: 0,
    lineHeight: 1,
    maxWidth: "500px",
  };
});

export const ChatAISubTitle = styled(Typography)(() => {
  return {
    fontSize: "24px",
    margin: 0,
    lineHeight: 1,
  };
});

export const InputWrapper = styled(Box)(({ theme }) => {
  return {
    width: STYLE_CONSTANTS.width,
    maxWidth: STYLE_CONSTANTS.maxWidth,
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    p: {
      alignSelf: "flex-end",
      margin: "10px 18px 0",
      color: theme.palette.grey[500],
    },
  };
});
