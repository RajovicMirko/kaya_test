/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography } from "@mui/material";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import useChat from "src/context/ChatContext";
import ChatImage from "../components/ChatImage/ChatImage";

export type IChatRight = IScreenSplitComponentProps & {};

type IChatRightReturn = JSX.Element | null;

const ChatRight = ({}: IChatRight): IChatRightReturn => {
  const { isProducts, isProductDescription } = useChat();

  if (isProducts) return <Typography variant="h2">Products list</Typography>;
  if (isProductDescription)
    return <Typography variant="h2">Product description</Typography>;

  return <ChatImage />;
};

export default ChatRight;
