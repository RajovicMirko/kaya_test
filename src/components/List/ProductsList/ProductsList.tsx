import { Box } from "@mui/material";
import ElastoImage from "src/assets/images/elasto_barier.jpeg";
import ProductCard from "src/components/Card/ProductCard/ProductCard";

export type IProductsList = {};

type IProductsListReturn = JSX.Element | null;

const ProductsList = ({}: IProductsList): IProductsListReturn => {
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
};

export default ProductsList;
