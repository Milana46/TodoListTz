import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Navigation } from './../components/Navigation';
import { ROUTERS } from './../public/constants';
import { BrowserRouter } from 'react-router-dom';
import { baseTheme } from './../styles/theme';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>
  );
};

describe('Navigation component', () => {
  test('рендерит логотип и ссылки', () => {
    renderWithTheme(<Navigation />);
    expect(screen.getByText(/Modsen Todo list/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', ROUTERS.home);
    expect(screen.getByRole('link', { name: /Settings/i })).toHaveAttribute(
      'href',
      ROUTERS.settings
    );
  });
});
