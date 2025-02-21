import React, { createContext, FC,ReactNode, useContext, useState } from 'react';
import { darkTheme,lightTheme } from '@/styles/stylesForThheme';
import { baseTheme } from '@/styles/theme';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const generateCSS = (themeStyles: { bgColor: string; textColor: string }) => {
    return `
      body {
        background-color: ${themeStyles.bgColor};
        color: ${themeStyles.textColor};
      }
    `;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentThemeProvider theme={baseTheme}>
        <style>{generateCSS(currentTheme)}</style>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
