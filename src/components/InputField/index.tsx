import React, { FC } from 'react';

import { StyledInput, StyledLabel } from './style';

interface InputFieldProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputFieldProps> = ({ inputValue, onChange }) => {
  return (
    <div>
      <StyledLabel>Add a new task</StyledLabel>
      <StyledInput type="text" value={inputValue} onChange={onChange} />
    </div>
  );
};
