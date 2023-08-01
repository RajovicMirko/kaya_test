export type IChatTextList = {};

type IChatTextListReturn = JSX.Element | null;

const ChatTextList = ({}: IChatTextList): IChatTextListReturn => {
  return (
    <div>
      <p>display chat component</p>
      <p>type sentience with the word products to see split screen with chat</p>
    </div>
  );
};

export default ChatTextList;
