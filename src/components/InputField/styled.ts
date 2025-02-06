import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 557px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border: none;
  border-bottom: ${({ theme }) => `${theme.borderBottom.xs} solid ${theme.colors.secondary}`};
  outline: none;
  margin-right: ${({ theme }) => theme.margins.m};
  padding: ${({ theme }) => `${theme.margins.xss} ${theme.margins.xsss}`};

  &:focus {
    border-bottom: 2px solid #1e3aa8;
  }

  @media (${({ theme }) => theme.media.medium}) {
    width: ${({ theme }) => theme.width.max};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-right: ${({ theme }) => theme.margins.s};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.margins.xs};
  display: block;

  @media (${({ theme }) => theme.media.medium};) {
    font-size: ${({ theme }) => theme.fontSize.xss};
  }
`;
