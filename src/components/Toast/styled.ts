import styled, { css } from 'styled-components';

import { MESSAGE_COLORS } from './../../constants/constantsTopoast';

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
