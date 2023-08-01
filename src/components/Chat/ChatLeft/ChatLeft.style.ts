/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, styled } from "@mui/material";
import {
  CHAT_INPUT_HEIGHT,
  CHAT_INPUT_MARGIN,
  CHAT_MAX_WIDTH,
  CHAT_POWERED_BY_KAYA_HEIGHT,
} from "../constants";

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
          flexFlow: "column-reverse",
          justifyContent: "flex-start",
          alignItems: "stretch",
          maxHeight: `calc(100vh - ${CHAT_INPUT_HEIGHT} - (${CHAT_INPUT_MARGIN}) - ${CHAT_POWERED_BY_KAYA_HEIGHT})`,
        }
      : {
          maxHeight: "460px",
        };

  return {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    transition: theme.transitions.create(["all"], { duration: 1000 }),
    ...dynamicStyle,
  };
});

export const InputWrapper = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    maxWidth: CHAT_MAX_WIDTH,
    height: CHAT_INPUT_HEIGHT,
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    margin: `${CHAT_INPUT_MARGIN} 0`,
    ...theme.mixins.chatInnerComponentPaddingSmall,
    p: {
      alignSelf: "flex-end",
      fontSize: "14px",
      margin: "10px 18px 0",
      color: theme.palette.grey[500],
    },
  };
});
