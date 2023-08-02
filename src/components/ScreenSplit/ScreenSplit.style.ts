import { Box, styled } from "@mui/material";

const SMALL_WIDTH = "50%";
const FULL_WIDTH = "100%";

const customProps = ["isLeftFull", "isRightFull"];
const shouldForwardProp = (prop: string) =>
  !customProps.includes(prop as string);

export interface IScreenSplitColumn {
  isLeftFull?: boolean;
  isRightFull?: boolean;
}

const getWidth = (isFull?: boolean) => {
  return isFull ? FULL_WIDTH : SMALL_WIDTH;
};

const getZIndex = (isFull?: boolean) => {
  return isFull ? 1 : 0;
};

const getPosition = (isLeftFull?: boolean, isRightFull?: boolean) => {
  return {
    left: {
      left: isRightFull ? `-${SMALL_WIDTH}` : 0,
    },
    right: {
      right: isLeftFull ? `-${SMALL_WIDTH}` : 0,
    },
  };
};

const getColumnStyle = (isLeftFull?: boolean, isRightFull?: boolean) => {
  return {
    left: {
      width: getWidth(isLeftFull),
      zIndex: getZIndex(isLeftFull),
      ...getPosition(isLeftFull, isRightFull).left,
    },
    right: {
      width: getWidth(isRightFull),
      zIndex: getZIndex(isRightFull),
      ...getPosition(isLeftFull, isRightFull).right,
    },
  };
};

export const ScreenSplitStyled = styled(Box)(() => {
  return {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };
});

export const ScreenSplitColumn = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    height: "100%",
    top: 0,
    transition: theme.transitions.create(
      ["width", "z-index", "left", "right"],
      {
        duration: theme.transitions.duration.splitScreen,
      }
    ),
  };
});

export const ScreenSplitColumnLeft = styled(ScreenSplitColumn, {
  shouldForwardProp,
})<IScreenSplitColumn>(({ isLeftFull, isRightFull }) => {
  return {
    ...getColumnStyle(isLeftFull, isRightFull).left,
  };
});

export const ScreenSplitColumnRight = styled(ScreenSplitColumn, {
  shouldForwardProp,
})<IScreenSplitColumn>(({ isLeftFull, isRightFull }) => {
  return {
    ...getColumnStyle(isLeftFull, isRightFull).right,
  };
});
