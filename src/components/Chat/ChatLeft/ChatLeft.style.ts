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
  const inputHeight = document.querySelector(".ai-input")?.clientHeight ?? 0;

  const height = isFull ? window.innerHeight - inputHeight : 460;

  return {
    flexFlow: isFull ? "column-reverse" : "column",
    alignItems: isFull ? "stretch" : "center",
    height: `${height}px`,
  };
};

export const getChatLeftContentWrapperInitial = () => {
  return {
    width: "100%",
    height: `100vh`,
    flexFlow: "column",
  };
};

export const ChatLeftContentWrapper = styled(motion.div)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    margin: 0,
  };
});

ChatLeftContentWrapper.defaultProps = {
  transition: {
    duration: 0.6,
  },
};

export const InputWrapper = styled(Box)(({ theme }) => {
  const paddingTop = getChatCoordinates(
    ChatCoordinates.inputWrapperMarginTop
  ).toPx();
  const paddingBottom = getChatCoordinates(
    ChatCoordinates.inputWrapperMarginBottom
  ).toPx();

  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop,
    paddingBottom,

    p: {
      alignSelf: "flex-end",
      fontSize: "14px",
      margin: "10px 18px 0 18px",
      color: theme.palette.grey[500],
    },

    ".container": {
      width: "100%",
      maxWidth: getChatCoordinates(ChatCoordinates.maxWidth).toPx(),
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      ...theme.mixins.chatInnerComponentPaddingSmall,
    },
  };
});
