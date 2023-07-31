import { PropsWithChildren } from "react";
import { MainStyle } from "./Main.style";

export type IMain = PropsWithChildren & {};

type IMainReturn = JSX.Element | null;

const Main = ({ children }: IMain): IMainReturn => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;
