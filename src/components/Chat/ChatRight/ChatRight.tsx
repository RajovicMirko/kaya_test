import { AnimatePresence, motion } from "framer-motion";
import ProductsList from "src/components/List/ProductsList/ProductsList";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import useChat from "src/context/ChatContext";
import ChatImage from "../components/ChatImage/ChatImage";

export type IChatRight = IScreenSplitComponentProps & {};

type IChatRightReturn = JSX.Element | null;

const ChatRight = (): IChatRightReturn => {
  const { isConversation, isProducts } = useChat();

  if (isProducts) {
    return <ProductsList key="product-list" />;
  }

  return (
    <AnimatePresence>
      {!isConversation && (
        <motion.div
          initial={{
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <ChatImage />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatRight;
