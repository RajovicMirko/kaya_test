import { OutlinedInputProps } from "@mui/material";
import { ChangeEventHandler, ReactNode } from "react";
import { CustomOutlinedInput } from "./InputAI.style";

export type IInputAI = OutlinedInputProps & {
  endAdornment: ReactNode;
};

type IInputAIReturn = JSX.Element | null;

const InputAI = ({
  onChange,
  endAdornment,
  placeholder,
  ...rest
}: IInputAI): IInputAIReturn => {
  const handleInputChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (value) => {
    onChange?.(value);
  };

  return (
    <CustomOutlinedInput
      size="small"
      placeholder={placeholder}
      endAdornment={endAdornment}
      fullWidth
      onChange={handleInputChange}
      {...rest}
    />
  );
};

export default InputAI;
