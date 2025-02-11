import React, { createContext, useContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from '@/styles/stylesForThheme';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
      <style>{generateCSS(currentTheme)}</style>
      {children}
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
