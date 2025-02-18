import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.fontSize.xss};
    margin-top: ${theme.margins.xss};
  `}
`;
