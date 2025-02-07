import React, { FC } from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
  content: string;
  variant?: 'add' | 'delete';
  onClick?: VoidFunction;
}

export const Button: FC<ButtonProps> = ({ content, variant = 'add', onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {content}
    </StyledButton>
  );
};
