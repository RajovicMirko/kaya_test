import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const ScreenSplitStyled = styled(Box)(() => {
  return {
    width: "100%",
    height: "100%",
    maxHeight: "100vh",
    overflow: "hidden",
    display: "flex",
  };
});

export const getScreenSplitColumnAnimation = (
  containerCondition: boolean,
  container2Condition: boolean
) => ({
  width: container2Condition ? "0" : "100%",
  maxWidth: containerCondition ? "100%" : "50%",
  height: "100%",
  opacity: container2Condition ? 0 : 1,
});

export const ScreenSplitColumn = styled(motion.div)(() => {
  return {
    width: "100%",
    height: "100%",
  };
});

ScreenSplitColumn.defaultProps = {
  initial: false,
};
