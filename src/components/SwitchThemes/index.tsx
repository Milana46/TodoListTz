import React from 'react';
import { useTheme } from '@/context/themeContext';

import { Label, Option, Select, ThemeContainer } from './styled';

export const SwitchThemes: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContainer>
      <Label>Switch Theme</Label>
      <Select value={theme} onChange={() => toggleTheme()}>
        <Option value="light">Light theme</Option>
        <Option value="dark">Dark theme</Option>
      </Select>
    </ThemeContainer>
  );
};
