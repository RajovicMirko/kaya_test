import { IChatContext } from "src/context/ChatContext";
import ChatTextListItem from "./ChatTextListItem/ChatTextListItem";

export type IChatTextList = {
  conversation: IChatContext["conversation"];
};

type IChatTextListReturn = JSX.Element | null;

const ChatTextList = ({ conversation }: IChatTextList): IChatTextListReturn => {
  return (
    <div style={{ overflow: "hidden", overflowY: "auto" }}>
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
    </div>
  );
};

export default ChatTextList;
