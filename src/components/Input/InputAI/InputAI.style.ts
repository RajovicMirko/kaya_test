import { OutlinedInput, styled } from "@mui/material";

export const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => {
  return {
    borderRadius: "100px",
    padding: "4px 10px",
    backgroundColor: theme.palette.background.input,
    maxWidth: "1000px",

    svg: {
      color: theme.palette.grey[500],
      marginRight: "6px",
    },

    fieldset: {
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
  };
});
