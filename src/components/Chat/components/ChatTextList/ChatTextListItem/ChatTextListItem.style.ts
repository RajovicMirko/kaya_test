import { Box, styled } from "@mui/material";
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

export interface IChatTextListItem {
  type?: IConversationType;
}

export const ChatTextListItemStyled = styled(Box, {
  shouldForwardProp,
})<IChatTextListItem>(({ theme, type }) => {
  return {
    display: "flex",
    justifyContent: "center",
    padding: "16px 0",
    backgroundColor:
      type === "bot"
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
