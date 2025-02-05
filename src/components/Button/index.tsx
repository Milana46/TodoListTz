import React, { FC } from 'react';

import { StyledAddButton, StyledDeleteButton } from './styled';
interface ButtonProps {
  content: string;
  variant?: 'add' | 'delete';
  onClick?: VoidFunction;
}

const BUTTON_VARIANTS = {
  add: StyledAddButton,
  delete: StyledDeleteButton,
};

export const Button: FC<ButtonProps> = ({ content, variant = 'add', onClick }) => {
  const ButtonComponent = BUTTON_VARIANTS[variant] || StyledAddButton;

  return <ButtonComponent onClick={onClick}>{content}</ButtonComponent>;
};
