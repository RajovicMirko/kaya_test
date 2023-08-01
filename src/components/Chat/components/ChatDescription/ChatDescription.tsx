import { SUBTITLE, TITLE } from "../../constants";
import {
  ChatDescriptionLogo,
  ChatDescriptionSubTitle,
  ChatDescriptionTitle,
  ChatDescriptionWrapper,
} from "./ChatDescription.style";

export type IChatDescription = {};

type IChatDescriptionReturn = JSX.Element | null;

const ChatDescription = ({}: IChatDescription): IChatDescriptionReturn => {
  return (
    <ChatDescriptionWrapper>
      <ChatDescriptionLogo>Logo</ChatDescriptionLogo>

      <ChatDescriptionTitle>{TITLE}</ChatDescriptionTitle>

      <ChatDescriptionSubTitle>{SUBTITLE}</ChatDescriptionSubTitle>
    </ChatDescriptionWrapper>
  );
};

export default ChatDescription;
