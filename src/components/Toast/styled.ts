import styled, { css } from 'styled-components';

export const ToastWrapper = styled.div<{ type: 'success' | 'error' | 'warning' }>`
  ${({ theme, type }) => css`
    position: fixed;
    top: ${theme.margins.s};
    right: ${theme.margins.s};
    padding: ${theme.margins.s};
    color: ${theme.colors.primary};
    border-radius: ${theme.colors.xs};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    background-color: ${type === 'success' ? 'green' : type === 'error' ? 'red' : 'orange'};
  `}
`;
