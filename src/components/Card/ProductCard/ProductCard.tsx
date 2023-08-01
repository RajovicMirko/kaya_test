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
    <ProductCardStyled>
      <img src={image} alt="elasto-barier" />

      <ProductCardTitle>{title}</ProductCardTitle>

      <ProductCardRating value={rate} />

      <ProductCardPrice variant="body2">{price}</ProductCardPrice>
    </ProductCardStyled>
  );
};

export default ProductCard;
