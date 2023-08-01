import { Box } from "@mui/material";
import { SUBTITLE, TITLE } from "../../constants";
import {
  ChatDescriptionLogo,
  ChatDescriptionSubTitle,
  ChatDescriptionTitle,
} from "./ChatDescription.style";

export type IChatDescription = {};

type IChatDescriptionReturn = JSX.Element | null;

const ChatDescription = ({}: IChatDescription): IChatDescriptionReturn => {
  return (
    <Box>
      <ChatDescriptionLogo>Logo</ChatDescriptionLogo>

      <ChatDescriptionTitle>{TITLE}</ChatDescriptionTitle>

      <ChatDescriptionSubTitle>{SUBTITLE}</ChatDescriptionSubTitle>
    </Box>
  );
};

export default ChatDescription;
