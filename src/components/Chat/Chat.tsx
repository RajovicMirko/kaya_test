import { ChatProvider } from "src/context/ChatContext";
import ScreenSplit from "../ScreenSplit/ScreenSplit";
import ChatLeft from "./ChatLeft/ChatLeft";
import ChatRight from "./ChatRight/ChatRight";

export type IChat = {};

type IChatReturn = JSX.Element | null;

const Chat = ({}: IChat): IChatReturn => {
  return (
    <ChatProvider>
      <ScreenSplit renderLeft={ChatLeft} renderRight={ChatRight} />
    </ChatProvider>
  );
};

export default Chat;
