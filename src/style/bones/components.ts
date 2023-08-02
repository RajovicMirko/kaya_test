import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiCard: {
    defaultProps: {
      raised: false,
    },
    styleOverrides: {
      root: ({ theme }) => {
        return {
          boxShadow: "none",
          backgroundColor: theme.palette.background.chat,
          borderRadius: "18px",
          padding: "20px",
        };
      },
    },
  },
};

export default components;
