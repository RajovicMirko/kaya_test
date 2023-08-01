import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export type IChatContext = {
  conversation: Array<any>;
  setConversation: Dispatch<SetStateAction<any>>;
  products: Array<any>;
  setProducts: Dispatch<SetStateAction<any>>;
  selectedProduct: object | null;
  setSelectedProduct: Dispatch<SetStateAction<any>>;
  isConversation: boolean;
  isProducts: boolean;
  isProductDescription: boolean;
};

export const ChatContext = createContext<IChatContext>({
  conversation: [],
  setConversation: () => null,
  products: [],
  setProducts: () => null,
  selectedProduct: null,
  setSelectedProduct: () => null,
  isConversation: false,
  isProducts: false,
  isProductDescription: false,
});

const useChat = () => {
  const context = useContext(ChatContext);

  if (!context || !Object.keys(context)?.length) {
    throw new Error("useChat must be used under ChatProvider");
  }

  return context;
};

export type IChatProvider = PropsWithChildren & {};

export const ChatProvider = ({ children }: IChatProvider) => {
  const [conversation, setConversation] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isConversation = useMemo(() => !!conversation?.length, [conversation]);

  const isProducts = useMemo(() => !!products?.length, [products]);

  const isProductDescription = useMemo(
    () => !!selectedProduct && !!Object.keys(selectedProduct),
    [selectedProduct]
  );

  const provide = {
    conversation,
    setConversation,
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
    isConversation,
    isProducts,
    isProductDescription,
  };

  return (
    <ChatContext.Provider value={provide}>{children}</ChatContext.Provider>
  );
};

export default useChat;
