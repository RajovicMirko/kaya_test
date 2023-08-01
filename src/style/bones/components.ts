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
          borderRadius: "14px",
          padding: "20px 18px",
        };
      },
    },
  },
};

export default components;
