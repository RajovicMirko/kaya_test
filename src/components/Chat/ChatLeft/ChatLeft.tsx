/* eslint-disable @typescript-eslint/no-unused-vars */
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import { KeyboardEventHandler, useEffect, useRef } from "react";
import InputAI from "src/components/Input/InputAI/InputAI";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import useChat, {
  IConversation,
  IConversationType,
} from "src/context/ChatContext";
import ChatDescription from "../components/ChatDescription/ChatDescription";
import ChatTextList from "../components/ChatTextList/ChatTextList";
import { INPUT_PLACEHOLDER } from "../constants";
import {
  ChatLeftContentWrapper,
  ChatLeftPage,
  InputWrapper,
  getChatLeftContentWrapperAnimation,
} from "./ChatLeft.style";

export type IChatLeft = IScreenSplitComponentProps & {};

type IChatLeftReturn = JSX.Element | null;

const ChatLeft = ({
  isFullWidth,
  setFullWidth,
}: IChatLeft): IChatLeftReturn => {
  const {
    conversation,
    setConversation,
    setProducts,
    setSelectedProduct,
    isConversation,
    isProducts,
    isProductDescription,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    if (!inputRef?.current) return;

    if (event?.code === "Escape") {
      inputRef.current.value = "";
      setConversation([]);
      setProducts([]);
      setSelectedProduct(null);
    }

    if (event?.code === "Enter") {
      const tmpInputValue = inputRef?.current?.value;

      if (tmpInputValue) {
        const tmpConversation = [
          ...conversation,
          {
            id: conversation?.length?.toString(),
            type: IConversationType.client,
            text: tmpInputValue,
          },
          {
            id: (conversation?.length + 1).toString(),
            type: IConversationType.loading,
            text: "",
          },
        ];
        setConversation([...tmpConversation]);

        setTimeout(() => {
          const newConversation = [...tmpConversation];
          const replacingConversation = newConversation.pop() as IConversation;

          setConversation([
            ...newConversation,
            {
              id: replacingConversation.id,
              type: IConversationType.bot,
              text: `ANSWER ON QUESTION: "${tmpInputValue}"`,
            },
          ]);
        }, 2000);

        inputRef.current.value = "";
      } else {
        setConversation([]);
      }

      if (tmpInputValue.includes("products")) {
        setProducts(["test"]);
      }

      if (tmpInputValue.includes("product description")) {
        setSelectedProduct({ test: "test" });
      }

      if (tmpInputValue.includes("clear products")) {
        setProducts([]);
        setSelectedProduct(null);
      }
    }
  };

  useEffect(() => {
    setFullWidth(isConversation && !isProducts && !isProductDescription);
  }, [isConversation, isProducts, isProductDescription]);

  return (
    <ChatLeftPage>
      <ChatLeftContentWrapper
        animate={getChatLeftContentWrapperAnimation(
          isFullWidth,
          isConversation && (isProducts || isProductDescription)
        )}
        transition={{
          duration: 0.4,
        }}
      >
        {isConversation ? (
          <ChatTextList conversation={conversation} />
        ) : (
          <ChatDescription />
        )}
      </ChatLeftContentWrapper>

      <InputWrapper>
        <InputAI
          inputRef={inputRef}
          autoFocus
          placeholder={INPUT_PLACEHOLDER}
          endAdornment={<SendIcon />}
          onKeyDown={handleInputKeyDown}
        />
        {<Typography>powered by KayaAI</Typography>}
      </InputWrapper>
    </ChatLeftPage>
  );
};

export default ChatLeft;
