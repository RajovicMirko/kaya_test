import { ComponentType, Dispatch, useState } from "react";
import {
  ScreenSplitColumnLeft,
  ScreenSplitColumnRight,
  ScreenSplitStyled,
} from "./ScreenSplit.style";

export type IScreenSplitComponentProps = {
  isFullWidth: boolean;
  setFullWidth: Dispatch<React.SetStateAction<boolean>>;
};

export type IScreenSplit = {
  renderLeft: ComponentType<IScreenSplitComponentProps> | any;
  renderRight?: ComponentType<IScreenSplitComponentProps> | any;
};

type IScreenSplitReturn = JSX.Element | null;

const ScreenSplit = ({
  renderLeft: LeftComponent,
  renderRight: RightComponent,
}: IScreenSplit): IScreenSplitReturn => {
  const [isLeftFullWidth, setLeftFullWidth] = useState(false);
  const [isRightFullWidth, setRightFullWidth] = useState(false);

  return (
    <ScreenSplitStyled>
      <ScreenSplitColumnLeft
        isLeftFull={isLeftFullWidth}
        isRightFull={isRightFullWidth}
      >
        <LeftComponent
          isFullWidth={isLeftFullWidth}
          setFullWidth={setLeftFullWidth}
        />
      </ScreenSplitColumnLeft>

      {!!RightComponent && (
        <ScreenSplitColumnRight
          isLeftFull={isLeftFullWidth}
          isRightFull={isRightFullWidth}
        >
          <RightComponent
            isFullWidth={isRightFullWidth}
            setFullWidth={setRightFullWidth}
          />
        </ScreenSplitColumnRight>
      )}
    </ScreenSplitStyled>
  );
};

export default ScreenSplit;
