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

export const PortalMessage = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSize.m};
    font-weight: bold;
  `}
`;
