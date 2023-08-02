import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import {
  ChatCoordinates,
  getChatCoordinates,
} from "src/components/Chat/constants";

import { IConversationType } from "src/context/ChatContext";

const STYLE_CONSTANTS = {
  padding: "8px",
};

const customProps = ["type"];
const shouldForwardProp = (prop: string) =>
  !customProps.includes(prop as string);

const botTypes = [IConversationType.bot, IConversationType.loading];

export interface IChatTextListItem {
  type: IConversationType;
}

export const getChatTextListItemStyledInitial = ({
  type,
}: IChatTextListItem) => {
  return botTypes.includes(type)
    ? {
        opacity: 0,
        scale: 0.7,
      }
    : {
        scale: 0.7,
      };
};
export const getChatTextListItemStyledAnimate = ({
  type,
}: IChatTextListItem) => {
  return botTypes.includes(type)
    ? {
        opacity: 1,
        scale: 1,
      }
    : {
        scale: 1,
      };
};
export const getChatTextListItemStyledTransition = ({
  type,
}: IChatTextListItem) => {
  return botTypes.includes(type)
    ? {
        delay: 0.2,
        duration: 0.4,
      }
    : {
        duration: 0.2,
      };
};

export const ChatTextListItemStyled = styled(motion.div, {
  shouldForwardProp,
})<IChatTextListItem>(({ theme, type }) => {
  return {
    display: "flex",
    justifyContent: "center",
    padding: "16px 0",
    backgroundColor: botTypes.includes(type)
      ? theme.palette.background.input
      : theme.palette.background.default,
  };
});

export const ChatTextListItemContainer = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    columnGap: "10px",
    width: "100%",
    maxWidth: getChatCoordinates(ChatCoordinates.maxWidth).toPx(),
    ...theme.mixins.chatInnerComponentPaddingBig,
  };
});

export const ChatTextListItemAvatarWrapper = styled(Box)(() => {
  return {
    height: "100%",
    padding: STYLE_CONSTANTS.padding,
  };
});

export const ChatTextListItemTextWrapper = styled(Box)(() => {
  return {
    height: "100%",
    paddingTop: `calc(${STYLE_CONSTANTS.padding} + 8px)`,
  };
});
