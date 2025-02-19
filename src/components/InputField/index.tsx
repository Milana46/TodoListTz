import React, { ChangeEvent, FC } from 'react';

import { StyledInput, StyledLabel } from './styled';

interface InputFieldProps {
  inputValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputFieldProps> = ({ inputValue, onChange }) => {
  return (
    <div>
      <StyledLabel>Add a new task</StyledLabel>
      <StyledInput type="text" value={inputValue} onChange={onChange} />
    </div>
  );
};
