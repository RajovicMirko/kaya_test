import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ProductCard from "src/components/Card/ProductCard/ProductCard";
import { IScreenSplitComponentProps } from "src/components/ScreenSplit/ScreenSplit";
import useChat from "src/context/ChatContext";

export type IProductsList = IScreenSplitComponentProps;

type IProductsListReturn = JSX.Element | null;

const ProductsList = ({ setFullWidth }: IProductsList): IProductsListReturn => {
  const { products, selectedProduct } = useChat();

  useEffect(() => {
    setFullWidth(!!products?.length && !selectedProduct);
  }, [products, selectedProduct]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        overflowY: "auto",
      }}
    >
      <motion.div
        initial={{ height: "100%" }}
        animate={{
          opacity: selectedProduct ? 0 : 1,
          transition: {
            duration: 0.1,
            delay: selectedProduct ? 0 : 0.4,
          },
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
      </motion.div>
    </Box>
  );
};

export default ProductsList;
