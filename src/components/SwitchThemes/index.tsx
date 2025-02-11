import React, { FC } from 'react';

import { Label, Option, Select, ThemeContainer } from './styled';

interface SwitchThemesProps {
  theme: string;
  onChangeTheme: (newTheme: string) => void;
}

const handleThemeChange =
  (onChangeTheme: (newTheme: string) => void) => (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChangeTheme(e.target.value);

export const SwitchThemes: FC<SwitchThemesProps> = ({ theme, onChangeTheme }) => {
  return (
    <ThemeContainer>
      <Label>Switch Theme</Label>
      <Select value={theme} onChange={handleThemeChange(onChangeTheme)}>
        <Option value="light">Light theme</Option>
        <Option value="dark">Dark theme</Option>
      </Select>
    </ThemeContainer>
  );
};
