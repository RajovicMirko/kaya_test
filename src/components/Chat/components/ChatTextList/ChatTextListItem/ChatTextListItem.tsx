import { Avatar, Box, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Dots from "src/components/Loading/Dots/Dots";
import { IConversation, IConversationType } from "src/context/ChatContext";
import {
  ChatTextListItemAvatarWrapper,
  ChatTextListItemContainer,
  ChatTextListItemStyled,
  ChatTextListItemTextWrapper,
  getChatTextListItemStyledAnimate,
  getChatTextListItemStyledInitial,
  getChatTextListItemStyledTransition,
} from "./ChatTextListItem.style";

export type IChatTextListItem = IConversation;

type IChatTextListItemReturn = JSX.Element | null;

const ChatTextListItem = ({
  type,
  text,
}: IChatTextListItem): IChatTextListItemReturn => {
  return (
    <AnimatePresence>
      <ChatTextListItemStyled
        type={type}
        initial={getChatTextListItemStyledInitial({ type })}
        animate={getChatTextListItemStyledAnimate({ type })}
        transition={getChatTextListItemStyledTransition({ type })}
      >
        <ChatTextListItemContainer>
          <ChatTextListItemAvatarWrapper>
            <Avatar />
          </ChatTextListItemAvatarWrapper>
          <ChatTextListItemTextWrapper>
            {type === IConversationType.loading ? (
              <Box
                sx={{
                  margin: "8px 0 0 14px",
                }}
              >
                <Dots />
              </Box>
            ) : (
              <Typography>{text}</Typography>
            )}
          </ChatTextListItemTextWrapper>
        </ChatTextListItemContainer>
      </ChatTextListItemStyled>
    </AnimatePresence>
  );
};

export default ChatTextListItem;
