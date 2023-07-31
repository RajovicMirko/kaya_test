import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useMemo,
  useState,
} from "react";
import InputAI from "../Input/InputAI/InputAI";
import {
  ChatAIDescriptionWrapper,
  ChatAILogo,
  ChatAIPage,
  ChatAISubTitle,
  ChatAITitle,
  InputWrapper,
} from "./ChatAI.style";
import { INPUT_PLACEHOLDER, SUBTITLE, TITLE } from "./constants";

export type IChatAI = {};

type IChatAIReturn = JSX.Element | null;

const ChatAI = ({}: IChatAI): IChatAIReturn => {
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState<Array<string> | null>(null);

  const isFullscreen = useMemo(() => isSubmittedForm, [isSubmittedForm]);
  const isDisplayProducts = useMemo(
    () => !!inputValue && !!products?.length,
    [inputValue, products]
  );

  const handleInputChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const value = event?.target?.value;

    if (value.includes("products")) {
      setProducts(["test"]);
    } else {
      setProducts(null);
    }

    if (value === "") setIsSubmittedForm(false);

    setInputValue(value);
  };

  const handleInputKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    if (event?.code === "Enter") {
      setIsSubmittedForm(!!inputValue);
    }
  };

  return (
    <ChatAIPage isFullscreen={isFullscreen} isFullHeight={isDisplayProducts}>
      <ChatAIDescriptionWrapper
        isFullscreen={isFullscreen}
        isFullHeight={isDisplayProducts}
      >
        {isFullscreen || isDisplayProducts ? (
          <div>
            <p>display chat component</p>
            <p>
              type sentience with the word products to see split screen with
              chat
            </p>
          </div>
        ) : (
          <>
            <ChatAILogo>Logo</ChatAILogo>

            <ChatAITitle>{TITLE}</ChatAITitle>

            <ChatAISubTitle>{SUBTITLE}</ChatAISubTitle>
          </>
        )}
      </ChatAIDescriptionWrapper>

      <InputWrapper>
        <InputAI
          placeholder={INPUT_PLACEHOLDER}
          endAdornment={<SendIcon />}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        {!isFullscreen && !isDisplayProducts && (
          <Typography>powered by KayaAI</Typography>
        )}
      </InputWrapper>
    </ChatAIPage>
  );
};

export default ChatAI;
