import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useMemo,
  useState,
} from "react";
import InputAI from "src/components/Input/InputAI/InputAI";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
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
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState<Array<string> | null>(null);

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
      setFullWidth(false);
    } else {
      setProducts(null);
      setFullWidth(true);
    }

    setInputValue(value);
  };

  const handleInputKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    if (event?.code === "Enter") {
      setFullWidth(!!inputValue);
    }
  };

  return (
    <ChatLeftPage>
      <ChatLeftContentWrapper
        isFullscreen={isFullWidth}
        isFullHeight={isDisplayProducts}
      >
        {isFullWidth || isDisplayProducts ? (
          <ChatTextList />
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
        />
        {!isFullWidth && !isDisplayProducts && (
          <Typography>powered by KayaAI</Typography>
        )}
      </InputWrapper>
    </ChatLeftPage>
  );
};

export default ChatLeft;
