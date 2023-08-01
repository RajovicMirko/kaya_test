import { useEffect, useRef } from "react";
import { IChatContext } from "src/context/ChatContext";
import { ChatTextListStyle } from "./ChatTextList.style";
import ChatTextListItem from "./ChatTextListItem/ChatTextListItem";

export type IChatTextList = {
  conversation: IChatContext["conversation"];
};

type IChatTextListReturn = JSX.Element | null;

const ChatTextList = ({ conversation }: IChatTextList): IChatTextListReturn => {
  const refChatList = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll to bottom of the list on change
    setTimeout(() => {
      if (refChatList?.current) {
        if (
          refChatList?.current?.scrollHeight >=
          refChatList?.current?.offsetHeight
        ) {
          refChatList.current.scrollTo({
            top: refChatList?.current?.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    }, 10);
  }, [conversation]);

  return (
    <ChatTextListStyle ref={refChatList}>
      <p>**** display chat component ****</p>
      <p>
        **** type &quot;products&quot; - to see split screen with products
        component ****
      </p>
      <p>
        **** type &quot;product description&quot; - to see split screen with
        product description component ****
      </p>
      <p>
        **** type &quot;clear products&quot; - to see split screen with product
        description component ****
      </p>
      <p>**** hit &quot;enter key&quot; on empty input to reset all ****</p>
      <p>**** hit &quot;escape key&quot; on input to reset all ****</p>
      {conversation?.map((item) => {
        return <ChatTextListItem key={item.id} {...item} />;
      })}
    </ChatTextListStyle>
  );
};

export default ChatTextList;
