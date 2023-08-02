import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export enum IConversationType {
  client = "client",
  bot = "bot",
  loading = "loading",
}
export type IConversation = {
  id: string;
  type: IConversationType;
  text: string;
};

export type IProduct = any;

export type IChatContext = {
  conversation: Array<IConversation>;
  setConversation: Dispatch<SetStateAction<IConversation[]>>;
  products: Array<IProduct>;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  selectedProduct: object | null;
  setSelectedProduct: Dispatch<SetStateAction<IProduct>>;
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
  const [conversation, setConversation] = useState<Array<IConversation>>([]);
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

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
