import StarIcon from "@mui/icons-material/Star";
import { Card, Rating, Typography, styled } from "@mui/material";

export const ProductCardStyled = styled(Card)(() => {
  return {
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "14px",
    },
  };
});

export const ProductCardTitle = styled(Typography)(() => {
  return {
    fontSize: "14px",
    maxWidth: "200px",
    marginTop: "10px",
    lineHeight: 1.2,
  };
});

export const ProductCardRating = styled(Rating)(() => {
  return {
    fontSize: "18px",
    margin: "14px 0",
  };
});
ProductCardRating.defaultProps = {
  readOnly: true,
  icon: <StarIcon color="primary" fontSize="inherit" />,
  emptyIcon: (
    <StarIcon
      fontSize="inherit"
      sx={{
        color: "grey.400",
      }}
    />
  ),
};

export const ProductCardPrice = styled(Typography)(() => {
  return {
    fontWeight: 700,
  };
});
