import { MixinsOptions } from "@mui/material/styles/createMixins";

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
};

export default mixins;
