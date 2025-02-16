import React from 'react';
import '@testing-library/jest-dom';
import { renderWithTheme, screen, fireEvent } from './testUtils';
import { InputField } from './../components/InputField';

interface RenderInputFieldOptions {
  inputValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const renderInputField = ({
  inputValue = '',
  onChange = jest.fn(),
}: RenderInputFieldOptions = {}) => {
  renderWithTheme(<InputField inputValue={inputValue} onChange={onChange} />);
  const input = screen.getByRole('textbox');
  return { input, onChange };
};

export const typeIntoInput = (text: string, inputElement?: HTMLElement) => {
  const input = inputElement || screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: text } });
  return input;
};

describe('InputField component', () => {
  test('рендерит label и input с корректным значением', () => {
    const onChange = jest.fn();
    renderWithTheme(<InputField inputValue="Test" onChange={onChange} />);

    expect(screen.getByText(/Add a new task/i)).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Test');
  });

  test('вызывает onChange при изменении значения', () => {
    const onChange = jest.fn();
    renderWithTheme(<InputField inputValue="" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(onChange).toHaveBeenCalled();
  });
});
