import { LayoutGroup } from "framer-motion";
import { ComponentType, Dispatch, useState } from "react";
import {
  ScreenSplitColumn,
  ScreenSplitStyled,
  getScreenSplitColumnAnimation,
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
    <LayoutGroup>
      <ScreenSplitStyled>
        <ScreenSplitColumn
          animate={getScreenSplitColumnAnimation(
            isLeftFullWidth,
            isRightFullWidth
          )}
        >
          <LeftComponent
            isFullWidth={isLeftFullWidth}
            setFullWidth={setLeftFullWidth}
          />
        </ScreenSplitColumn>

        {!!RightComponent && (
          <ScreenSplitColumn
            animate={getScreenSplitColumnAnimation(
              isRightFullWidth,
              isLeftFullWidth
            )}
          >
            <RightComponent
              isFullWidth={isRightFullWidth}
              setFullWidth={setRightFullWidth}
            />
          </ScreenSplitColumn>
        )}
      </ScreenSplitStyled>
    </LayoutGroup>
  );
};

export default ScreenSplit;
