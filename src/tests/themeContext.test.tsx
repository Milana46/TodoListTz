import React, { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { SearchField } from '../components/SearchField';
import { baseTheme } from '../styles/theme';

describe('SearchField', () => {
  const renderWithTheme = (component: ReactNode) =>
    render(<ThemeProvider theme={baseTheme}>{component}</ThemeProvider>);

  test('renders input and button', () => {
    renderWithTheme(<SearchField onSearch={jest.fn()} />);

    expect(screen.getByPlaceholderText('Search name...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('calls onSearch with entered username', async () => {
    const onSearchMock = jest.fn();
    renderWithTheme(<SearchField onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText('Search name...');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'octocat');
    await userEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith('octocat');
  });

  test('does not call onSearch when input is empty', async () => {
    const onSearchMock = jest.fn();
    renderWithTheme(<SearchField onSearch={onSearchMock} />);

    const button = screen.getByRole('button', { name: /search/i });
    await userEvent.click(button);

    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
