/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler, useEffect } from "react";
import { ProductCardStyled } from "src/components/Card/ProductCard/ProductCard.style";
import ProductsList from "src/components/List/ProductsList/ProductsList";
import ScreenSplit, {
  IScreenSplitComponentProps,
} from "src/components/ScreenSplit/ScreenSplit";
import useChat from "src/context/ChatContext";
import ChatImage from "../components/ChatImage/ChatImage";

export type IChatRight = IScreenSplitComponentProps & {};

type IChatRightReturn = JSX.Element | null;

const ProductDetails = ({ setFullWidth }: IScreenSplitComponentProps) => {
  const { selectedProduct, setSelectedProduct } = useChat();

  const handleClose: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setSelectedProduct(null);
  };

  useEffect(() => {
    setFullWidth(!!selectedProduct);
  }, [selectedProduct]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "50px",
        overflowY: "auto",
      }}
    >
      <motion.div
        initial={{ height: "100%", width: "100%" }}
        animate={{
          opacity: selectedProduct ? 1 : 0,
          transition: {
            duration: 0.2,
            delay: selectedProduct ? 0.4 : 0,
          },
        }}
      >
        <ProductCardStyled
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "100%",
          }}
        >
          <motion.div
            animate={{
              opacity: selectedProduct ? 1 : 0,
              transition: {
                duration: selectedProduct ? 0.2 : 0,
                delay: selectedProduct ? 0.6 : 0,
              },
            }}
          >
            {/* Display your back content here */}
            <Button onClick={handleClose}>X</Button>
            <Typography>{JSON.stringify(selectedProduct)}</Typography>
          </motion.div>
        </ProductCardStyled>
      </motion.div>
    </Box>
  );
};

const ChatRight = (): IChatRightReturn => {
  const { isConversation, isProducts } = useChat();

  if (isProducts) {
    return (
      <ScreenSplit renderLeft={ProductsList} renderRight={ProductDetails} />
    );
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
