import styled from 'styled-components';

const WIDTH_INPUT='557px';
const COLOR_INPUT='#1e3aa8';

export const StyledInput = styled.input`
  width: ${WIDTH_INPUT};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border: none;
  border-bottom: ${({ theme }) => `${theme.borderBottom.xs} solid ${theme.colors.secondary}`};
  outline: none;
  margin-right: ${({ theme }) => theme.margins.m};
  padding: ${({ theme }) => `${theme.margins.xss} ${theme.margins.xsss}`};

  &:focus {
    border-bottom:${({ theme }) => theme.borderBottom.xs} solid ${COLOR_INPUT};
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
