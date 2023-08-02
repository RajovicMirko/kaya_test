import { Typography } from "@mui/material";
import ProductsList from "src/components/List/ProductsList/ProductsList";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import useChat from "src/context/ChatContext";
import ChatImage from "../components/ChatImage/ChatImage";

export type IChatRight = IScreenSplitComponentProps & {};

type IChatRightReturn = JSX.Element | null;

const ChatRight = ({}: IChatRight): IChatRightReturn => {
  const { isConversation, isProducts, isProductDescription } = useChat();

  if (isProducts && !isProductDescription) return <ProductsList />;

  if (isProductDescription)
    return <Typography variant="h2">Product description</Typography>;

  if (!isConversation) return <ChatImage />;

  return null;
};

export default ChatRight;
