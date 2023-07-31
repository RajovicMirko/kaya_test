import { Button, Typography, useTheme } from "@mui/material";
import { TestPaper } from "./Test.style";
import { BUTTON_TOGGLE, TEST_TITLE } from "./constants";

type ITestReturn = JSX.Element | null;

const Test = (): ITestReturn => {
  const { toggleMode } = useTheme();

  return (
    <TestPaper>
      <Typography>{TEST_TITLE}</Typography>
      <Button variant="contained" onClick={toggleMode}>
        {BUTTON_TOGGLE}
      </Button>
    </TestPaper>
  );
};

export default Test;
