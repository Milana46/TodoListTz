import React, { ChangeEvent, FC } from 'react';
import { lightTheme } from '@/styles/stylesForThheme';

import { useTheme } from '../../hooks/useTheme';
import { Label, Option, Select, ThemeContainer } from './styled';

export const SwitchThemes: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const themeValue = theme === lightTheme ? 'light' : 'dark';

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as 'light' | 'dark';
    toggleTheme(selectedTheme);
  };

  return (
    <ThemeContainer>
      <Label>Switch Theme</Label>
      <Select value={themeValue} onChange={handleThemeChange}>
        <Option value="light">Light theme</Option>
        <Option value="dark">Dark theme</Option>
      </Select>
    </ThemeContainer>
  );
};
