/* eslint-disable @typescript-eslint/no-unused-vars */
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import ChatImage from "../components/ChatImage/ChatImage";

export type IChatRight = IScreenSplitComponentProps & {};

type IChatRightReturn = JSX.Element | null;

const ChatRight = ({
  isFullWidth,
  setFullWidth,
}: IChatRight): IChatRightReturn => {
  const isProducts = false;
  const isProductDescription = false;

  if (isProducts) return <div>Products list</div>;
  if (isProductDescription) return <div>Products description</div>;

  return <ChatImage />;
};

export default ChatRight;
