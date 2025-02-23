import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { GlobalStyle } from '@/styles/globalStyle';
import { darkTheme, lightTheme } from '@/styles/stylesForThheme';
import { baseTheme } from '@/styles/theme';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

interface ThemeContextType {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const [theme, setTheme] = useState<typeof lightTheme | typeof darkTheme>(
    savedTheme === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    localStorage.setItem('theme', theme === darkTheme ? 'dark' : 'light');
  }, [theme]);

  const toggleTheme = (theme: 'light' | 'dark') => {
    setTheme(theme === 'light' ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentThemeProvider theme={baseTheme}>
        <GlobalStyle theme={theme} />
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};
