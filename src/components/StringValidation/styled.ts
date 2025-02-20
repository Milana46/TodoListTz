import styled, { css } from 'styled-components';

const MESSAGE_COLORS = {
  success: 'green',
  error: 'red',
  warning: 'orange',
};

export const ToastWrapper = styled.div<{ type: 'success' | 'error' | 'warning' }>`
  ${({ theme, type }) => css`
    position: fixed;
    top: ${theme.margins.s};
    right: ${theme.margins.s};
    padding: ${theme.margins.s};
    color: ${theme.colors.primary};
    border-radius: ${theme.colors.xs};
    box-shadow: ${theme.boxShadow.xsss} ${theme.boxShadow.xss} ${theme.boxShadow.xs}
      ${theme.colors.black};
    background-color: ${MESSAGE_COLORS[type]};
  `}
`;
