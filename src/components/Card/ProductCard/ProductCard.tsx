import { motion } from "framer-motion";
import {
  ProductCardPrice,
  ProductCardRating,
  ProductCardStyled,
  ProductCardTitle,
} from "./ProductCard.style";

export type IProductCard = {
  image: any;
  title: string;
  price: string;
  rate: number;
};

type IProductCardReturn = JSX.Element | null;

const ProductCard = ({
  image,
  title,
  price,
  rate,
}: IProductCard): IProductCardReturn => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
    >
      <ProductCardStyled>
        <img src={image} alt="elasto-barier" />

        <ProductCardTitle>{title}</ProductCardTitle>

        <ProductCardRating value={rate} />

        <ProductCardPrice variant="body2">{price}</ProductCardPrice>
      </ProductCardStyled>
    </motion.div>
  );
};

export default ProductCard;
