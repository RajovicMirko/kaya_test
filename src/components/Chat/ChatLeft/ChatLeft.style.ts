/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { ChatCoordinates, getChatCoordinates } from "../constants";

export const ChatLeftPage = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.chat,
  };
});

export const getChatLeftContentWrapperAnimation = (
  isFullscreen: boolean,
  isFullHeight: boolean
) => {
  const isFull = isFullscreen || isFullHeight;

  const fullHeight =
    window.innerHeight -
    getChatCoordinates(ChatCoordinates.inputHeight) -
    getChatCoordinates(ChatCoordinates.inputMargin) -
    getChatCoordinates(ChatCoordinates.inputSubtextHeight);

  const height = isFull ? fullHeight : 460;

  return {
    flexFlow: isFull ? "column-reverse" : "column",
    alignItems: isFull ? "stretch" : "center",
    minHeight: `${height}px`,
    maxHeight: `${height}px`,
  };
};

export const ChatLeftContentWrapper = styled(motion.div)(() => {
  return {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "100vh",
    display: "flex",
    justifyContent: "space-between",
    margin: 0,
  };
});

export const InputWrapper = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    maxWidth: getChatCoordinates(ChatCoordinates.maxWidth).toPx(),
    height: getChatCoordinates(ChatCoordinates.inputHeight).toPx(),
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    margin: `${getChatCoordinates(ChatCoordinates.inputMargin).toPx()} 0`,
    ...theme.mixins.chatInnerComponentPaddingSmall,
    p: {
      alignSelf: "flex-end",
      fontSize: "14px",
      margin: "10px 18px 0",
      color: theme.palette.grey[500],
    },
  };
});
