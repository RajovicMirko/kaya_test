import { PropsWithChildren } from "react";
import { CustomLayout } from "./Layout.style";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

export type ILayout = PropsWithChildren & {};

type ILayoutReturn = JSX.Element | null;

const Layout = ({ children }: ILayout): ILayoutReturn => {
  return (
    <CustomLayout>
      <Sidebar />
      <Main>{children}</Main>
    </CustomLayout>
  );
};

export default Layout;
