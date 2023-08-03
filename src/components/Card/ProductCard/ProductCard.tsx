import { motion } from "framer-motion";
import useChat, { IProduct } from "src/context/ChatContext";
import {
  ProductCardPrice,
  ProductCardRating,
  ProductCardStyled,
  ProductCardTitle,
} from "./ProductCard.style";

export type IProductCard = IProduct;

type IProductCardReturn = JSX.Element | null;

const ProductCard = (product: IProductCard): IProductCardReturn => {
  const { setSelectedProduct } = useChat();

  const { image, title, price, rate } = product;

  const handleCardClick = () => {
    setSelectedProduct(product);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 12 },
      }}
      onClick={handleCardClick}
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
