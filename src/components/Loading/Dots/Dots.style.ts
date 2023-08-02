import { Box } from "@mui/material";
import { darken, styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

const getFlashing = (color: string) => keyframes`
    0% {
        background-color: ${darken(color, 0.5)};
    }
    50%, 100% {
        background-color: ${color};
    }
`;

export const DotsFlashing = styled(Box)(({ theme }) => {
  const color = theme.palette.grey[300];
  const getAnimation = (delay: string) =>
    `${getFlashing(color)} 1s infinite ${delay} alternate`;

  return {
    position: "relative",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: color,
    color,
    animation: getAnimation("0.5s"),

    "&::before, &::after": {
      content: '""',
      display: "inline-block",
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
      borderRadius: "5px",
      backgroundColor: color,
      color,
    },

    "::before": {
      left: "-15px",
      borderRadius: "5px",
      animation: getAnimation("0s"),
    },

    "::after": {
      left: "15px",
      animation: getAnimation("1s"),
    },
  };
});
