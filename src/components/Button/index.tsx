import React, { FC } from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
  content: string;
  variant?: 'add' | 'delete';
  onClick?: VoidFunction;
}

export const Button: FC<ButtonProps> = ({ content, variant, onClick }) => {
  if (variant === 'add') {
    return (
      <StyledButton variant="add" onClick={onClick}>
        {content}
      </StyledButton>
    );
  }

  if (variant === 'delete') {
    return (
      <StyledButton variant="delete" onClick={onClick}>
        {content}
      </StyledButton>
    );
  }

  return null;
};
