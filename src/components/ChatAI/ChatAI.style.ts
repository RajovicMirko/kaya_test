import { Box, Typography, styled } from "@mui/material";

const STYLE_CONSTANTS = {
  maxWidth: "70%",
};

export interface IChatAIPage {
  isFullscreen: boolean;
}

export const ChatAIPage = styled(Box, {
  shouldForwardProp: (prop) => !["isFullscreen"].includes(prop as string),
})<IChatAIPage>(({ isFullscreen }) => {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "50px",
    width: isFullscreen ? "100%" : "50%",
    height: "100%",
  };
});

export const ChatAIDescriptionWrapper = styled(Box)(() => {
  return {
    maxWidth: STYLE_CONSTANTS.maxWidth,
    margin: 0,
  };
});

export const ChatAILogo = styled(Typography)(() => {
  return {
    fontSize: "70px",
    margin: "100px 0",
  };
});

export const ChatAITitle = styled(Typography)(() => {
  return {
    fontSize: "100px",
    margin: 0,
    lineHeight: 1,
  };
});

export const ChatAISubTitle = styled(Typography)(() => {
  return {
    fontSize: "30px",
    margin: 0,
    lineHeight: 1,
  };
});

export const InputWrapper = styled(Box, {
  shouldForwardProp: (prop) => !["isFullscreen"].includes(prop as string),
})<IChatAIPage>(({ theme, isFullscreen }) => {
  const baseStyle = {
    width: "100%",
    maxWidth: STYLE_CONSTANTS.maxWidth,
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    p: {
      alignSelf: "flex-end",
      margin: "10px 18px 0",
      color: theme.palette.grey[500],
    },
  };

  return {
    ...baseStyle,
    ...(isFullscreen
      ? {
          position: "absolute",
          bottom: "40px",
        }
      : {
          flexDirection: "column",
        }),
  };
});
