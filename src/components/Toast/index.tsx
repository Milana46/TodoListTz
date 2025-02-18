import React, { FC, useEffect } from 'react';
import { ToastWrapper } from './styled';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  onClose: () => void;
}

export const Toast: FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return <ToastWrapper type={type}>{message}</ToastWrapper>;
};
