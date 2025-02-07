import React, { FC } from 'react';

import { Label, Option, Select, ThemeContainer } from './style';

interface SwitchThemesProps {
  theme: string;
  onChangeTheme: (newTheme: string) => void;
}

export const SwitchThemes: FC<SwitchThemesProps> = ({ theme, onChangeTheme }) => {
  return (
    <ThemeContainer>
      <Label>Switch Theme</Label>
      <Select value={theme} onChange={(e) => onChangeTheme(e.target.value)}>
        <Option value="light">Light theme</Option>
        <Option value="dark">Dark theme</Option>
      </Select>
    </ThemeContainer>
  );
};
