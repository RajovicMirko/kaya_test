import { Mixins } from "@mui/material";

interface MixinsOptions extends Partial<Mixins> {}

const mixins: MixinsOptions = {
  toolbar: {
    minHeight: 56,
    "@media (min-width:0px)": {
      "@media (orientation: landscape)": {
        minHeight: 48,
      },
    },
    "@media (min-width:600px)": {
      minHeight: 64,
    },
  },
  chatInnerComponentPaddingSmall: {
    padding: "0 30px",
  },
  chatInnerComponentPaddingBig: {
    padding: "0 50px",
  },
};

export default mixins;
