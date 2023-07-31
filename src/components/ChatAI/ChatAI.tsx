import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import { ChangeEventHandler, useMemo, useState } from "react";
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
  const [inputValue, setInputValue] = useState("");
  const isFullscreen = useMemo(() => !!inputValue, [inputValue]);

  const handleInputChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    setInputValue(event?.target?.value);
  };

  return (
    <ChatAIPage isFullscreen={isFullscreen}>
      <ChatAIDescriptionWrapper isFullscreen={isFullscreen}>
        {isFullscreen ? (
          "display chat component"
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
        />
        {!isFullscreen && <Typography>powered by KayaAI</Typography>}
      </InputWrapper>
    </ChatAIPage>
  );
};

export default ChatAI;
