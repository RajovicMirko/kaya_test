import { Box, Typography } from "@mui/material";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import useChat from "src/context/ChatContext";
import ChatImage from "../components/ChatImage/ChatImage";

import ElastoImage from "src/assets/images/elasto_barier.jpeg";
import ProductCard from "src/components/Card/ProductCard/ProductCard";

export type IChatRight = IScreenSplitComponentProps & {};

type IChatRightReturn = JSX.Element | null;

const ChatRight = ({}: IChatRight): IChatRightReturn => {
  const { isConversation, isProducts, isProductDescription } = useChat();

  if (isProducts && !isProductDescription)
    return (
      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))",
            gap: "20px",
            padding: "50px",
            overflowY: "visible",
          }}
        >
          {Array.from({ length: 50 }, (_, i) => {
            return (
              <ProductCard
                key={i}
                image={ElastoImage}
                title="Ames Elasto-Barrier Gray Elastomeric Rubber Roof Coating 5 gal"
                rate={4}
                price="$179.99"
              />
            );
          })}
        </Box>
      </Box>
    );

  if (isProductDescription)
    return <Typography variant="h2">Product description</Typography>;

  if (!isConversation) return <ChatImage />;

  return null;
};

export default ChatRight;
