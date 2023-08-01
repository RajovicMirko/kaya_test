/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, styled } from "@mui/material";

const STYLE_CONSTANTS = {
  width: "90%",
  maxWidth: "1200px",
  inputHeight: "108px",
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
    position: "relative",
    height: "100vh",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.chat,
    transition: theme.transitions.create(["width"]),
  };
});

export const ChatLeftContentWrapper = styled(Box, {
  shouldForwardProp,
})<IChatAIPage>(({ theme, isFullscreen, isFullHeight }) => {
  const dynamicStyle =
    isFullscreen || isFullHeight
      ? {
          display: "flex",
          flexFlow: "column-reverse",
          maxHeight: `calc(100vh - ${STYLE_CONSTANTS.inputHeight})`,
        }
      : {
          maxHeight: "450px",
        };

  return {
    height: "100%",
    width: STYLE_CONSTANTS.width,
    maxWidth: STYLE_CONSTANTS.maxWidth,
    margin: 0,
    padding: "0 30px",
    transition: theme.transitions.create(["all"], { duration: 1000 }),
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
    height: STYLE_CONSTANTS.inputHeight,
    padding: "30px 0",
    p: {
      alignSelf: "flex-end",
      margin: "10px 18px 0",
      color: theme.palette.grey[500],
    },
  };
});
