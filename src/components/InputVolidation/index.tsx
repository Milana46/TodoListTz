import React, { ChangeEvent } from 'react';
import { InputField } from '@/components/InputField';

import { ErrorMessage, InputContainer } from '../../pages/Home/styled';

interface InputVolidationProps {
  inputValue: string;
  hasExceededLimit: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputVolidation: React.FC<InputVolidationProps> = ({
  inputValue,
  hasExceededLimit,
  onChange,
}) => {
  return (
    <InputContainer>
      <InputField inputValue={inputValue} onChange={onChange} />
      {hasExceededLimit && (
        <ErrorMessage>Your message is too long, you can enter up to 40 symbols</ErrorMessage>
      )}
    </InputContainer>
  );
};
