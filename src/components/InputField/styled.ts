import styled, { css } from 'styled-components';

const WIDTH_INPUT = '557px';
const COLOR_INPUT = '#1e3aa8';

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: ${WIDTH_INPUT};
    font-size: ${theme.fontSize.m};
    font-weight: ${theme.fontWeight.normal};
    border: none;
    border-bottom: ${theme.borderBottom.xs} solid ${theme.colors.secondary};
    outline: none;
    margin-right: ${theme.margins.m};
    padding: ${theme.margins.xss} ${theme.margins.xsss};

    &:focus {
      border-bottom: ${theme.borderBottom.xs} solid ${COLOR_INPUT};
    }

    @media (${theme.media.medium}) {
      width: ${theme.width.max};
      font-size: ${theme.fontSize.xs};
      margin-right: ${theme.margins.s};
    }
  `}
`;

export const StyledLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xs};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.margins.xs};
    display: block;

    @media (${theme.media.medium}) {
      font-size: ${theme.fontSize.xss};
    }
  `}
`;
