import { Avatar, Typography } from "@mui/material";
import { IConversation } from "src/context/ChatContext";
import {
  ChatTextListItemAvatarWrapper,
  ChatTextListItemContainer,
  ChatTextListItemStyled,
  ChatTextListItemTextWrapper,
} from "./ChatTextListItem.style";

export type IChatTextListItem = IConversation;

type IChatTextListItemReturn = JSX.Element | null;

const ChatTextListItem = ({
  type,
  text,
}: IChatTextListItem): IChatTextListItemReturn => {
  return (
    <ChatTextListItemStyled type={type}>
      <ChatTextListItemContainer>
        <ChatTextListItemAvatarWrapper>
          <Avatar />
        </ChatTextListItemAvatarWrapper>
        <ChatTextListItemTextWrapper>
          <Typography>{text}</Typography>
        </ChatTextListItemTextWrapper>
      </ChatTextListItemContainer>
    </ChatTextListItemStyled>
  );
};

export default ChatTextListItem;
