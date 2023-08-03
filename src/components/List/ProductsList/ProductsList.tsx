import { Box } from "@mui/material";
import ProductCard from "src/components/Card/ProductCard/ProductCard";
import useChat from "src/context/ChatContext";

export type IProductsList = {};

type IProductsListReturn = JSX.Element | null;

const ProductsList = ({}: IProductsList): IProductsListReturn => {
  const { products } = useChat();

  return (
    <Box
      sx={{
        position: "relative",
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
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </Box>
    </Box>
  );
};

export default ProductsList;
