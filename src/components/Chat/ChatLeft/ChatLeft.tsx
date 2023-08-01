import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
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

  const [inputValue, setInputValue] = useState("");

  const handleInputChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    setInputValue(event?.target?.value);
  };

  const handleInputKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    if (event?.code === "Escape") {
      setInputValue("");
      setConversation([]);
      setProducts([]);
      setSelectedProduct(null);
    }

    if (event?.code === "Enter") {
      const tmpInputValue = inputValue;

      if (inputValue) {
        setConversation((prevState) => {
          const tmpConversation = [
            ...prevState,
            {
              id: prevState?.length?.toString(),
              type: IConversationType.client,
              text: inputValue,
            },
          ];
          return [
            ...tmpConversation,
            {
              id: prevState?.length?.toString() + 1,
              type: "bot",
              text: `ANSWER ON QUESTION: "${inputValue}"`,
            } as IConversation,
          ];
        });
        setInputValue("");
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
        isFullscreen={isFullWidth}
        isFullHeight={isConversation && (isProducts || isProductDescription)}
      >
        {isConversation ? (
          <ChatTextList conversation={conversation} />
        ) : (
          <ChatDescription />
        )}
      </ChatLeftContentWrapper>

      <InputWrapper>
        <InputAI
          placeholder={INPUT_PLACEHOLDER}
          endAdornment={<SendIcon />}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={inputValue}
          autoFocus
        />
        {<Typography>powered by KayaAI</Typography>}
      </InputWrapper>
    </ChatLeftPage>
  );
};

export default ChatLeft;
