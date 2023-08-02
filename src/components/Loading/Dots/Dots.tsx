// export type IDots = {};

import { DotsFlashing } from "./Dots.style";

type IDotsReturn = JSX.Element | null;

const Dots = (): IDotsReturn => {
  return <DotsFlashing />;
};

export default Dots;
