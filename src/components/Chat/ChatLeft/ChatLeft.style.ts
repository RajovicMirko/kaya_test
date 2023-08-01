/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, styled } from "@mui/material";

const STYLE_CONSTANTS = {
  width: "90%",
  maxWidth: "1200px",
};

const customProps = ["isFullscreen", "isFullHeight"];
const shouldForwardProp = (prop: string) =>
  !customProps.includes(prop as string);

export interface IChatAIPage {
  isFullscreen?: boolean;
  isFullHeight?: boolean;
}

export const ChatLeftPage = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    backgroundColor: theme.palette.background.chat,
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 0",
    transition: theme.transitions.create(["width"]),
  };
});

export const ChatLeftContentWrapper = styled(Box, {
  shouldForwardProp,
})<IChatAIPage>(({ theme, isFullscreen, isFullHeight }) => {
  const dynamicStyle =
    isFullscreen || isFullHeight
      ? {
          height: "100%",
          display: "flex",
          flexFlow: "column-reverse",
          paddingBottom: "20px",
        }
      : {
          height: "490px",
        };

  return {
    width: STYLE_CONSTANTS.width,
    maxWidth: STYLE_CONSTANTS.maxWidth,
    margin: 0,
    padding: "20px 30px",
    transition: theme.transitions.create(["all"]),
    ...dynamicStyle,
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
