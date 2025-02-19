import styled, { css } from 'styled-components';

export const StyledIcon = styled.img`
  ${({ theme }) => css`
    width: ${theme.sizeOfElement.xs};
    height: ${theme.sizeOfElement.xs};
    border-radius: ${theme.borderRadius.xs};
    box-shadow: ${theme.boxShadow.xsss} ${theme.boxShadow.xss} ${theme.boxShadow.xs}
      ${theme.colors.black};
  `}
`;
